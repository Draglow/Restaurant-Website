from django.shortcuts import render
from . models import Item
from django.shortcuts import render, get_object_or_404
# Create your views here.


def index(request):
    #food = Category.objects.get(name='food')
    items_in_category = Item.objects.filter(category='SW')
    beer = Item.objects.filter(category='S')
    #alchol_drink = Category.objects.get(name='alcholic')
    #beer=Item.objects.filter(category=alchol_drink)
    context={
        'beer':beer,
        'food':items_in_category
    }
    return render(request,'mainapp/index.html',context)

# from django.shortcuts import get_object_or_404
# from .models import Items

def alldetail(request, slug):
    # Get the specific product by ID
    obj = get_object_or_404(Item, slug=slug)
    
    # Get related items in the same category, excluding the current product
    related_items = Item.objects.filter(category=obj.category).exclude(slug=obj.slug)[:4]  # Limit to 8 items

    context = {
        'obj': obj,
        'related_items': related_items,
    }
    
    return render(request, 'mainapp/detail.html', context)


def allbeer(request):
    return render(request,'main/allbeer.html')


def detail(request):
    return render(request,'mainapp/lol.html')

def about(request):
    return render(request,'main/about.html')

def confirm(request):
    return render(request,'main/confirm.html')





import random
import string

import stripe
from django.conf import settings
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import redirect
from django.shortcuts import render, get_object_or_404
from django.utils import timezone
from django.views.generic import ListView, DetailView, View

from .forms import CheckoutForm, CouponForm, RefundForm, PaymentForm
from .models import Item, OrderItem, Order, Address, Payment, Coupon, Refund, UserProfile

#stripe.api_key = settings.STRIPE_SECRET_KEY


def create_ref_code():
    return ''.join(random.choices(string.ascii_lowercase + string.digits, k=20))


def products(request):
    context = {
        'items': Item.objects.all()
    }
    return render(request, "core/index.html", context)


def is_valid_form(values):
    valid = True
    for field in values:
        if field == '':
            valid = False
    return valid


class CheckoutView(View):
    def get(self, *args, **kwargs):
        try:
            order = Order.objects.get(user=self.request.user, ordered=False)
            form = CheckoutForm()
            context = {
                'form': form,
                'couponform': CouponForm(),
                'order': order,
                'DISPLAY_COUPON_FORM': True
            }

            shipping_address_qs = Address.objects.filter(
                user=self.request.user,
                address_type='S',
                default=True
            )
            if shipping_address_qs.exists():
                context.update(
                    {'default_shipping_address': shipping_address_qs[0]})

            billing_address_qs = Address.objects.filter(
                user=self.request.user,
                address_type='B',
                default=True
            )
            if billing_address_qs.exists():
                context.update(
                    {'default_billing_address': billing_address_qs[0]})
            return render(self.request, "core/checkout.html", context)
        except ObjectDoesNotExist:
            messages.info(self.request, "You do not have an active order")
            return redirect("core:checkout")

    def post(self, *args, **kwargs):
        form = CheckoutForm(self.request.POST or None)
        try:
            order = Order.objects.get(user=self.request.user, ordered=False)
            if form.is_valid():

                use_default_shipping = form.cleaned_data.get(
                    'use_default_shipping')
                if use_default_shipping:
                    print("Using the defualt shipping address")
                    address_qs = Address.objects.filter(
                        user=self.request.user,
                        address_type='S',
                        default=True
                    )
                    if address_qs.exists():
                        shipping_address = address_qs[0]
                        order.shipping_address = shipping_address
                        order.save()
                    else:
                        messages.info(
                            self.request, "No default shipping address available")
                        return redirect('core:checkout')
                else:
                    print("User is entering a new shipping address")
                    shipping_address1 = form.cleaned_data.get(
                        'shipping_address')
                    shipping_address2 = form.cleaned_data.get(
                        'shipping_address2')
                    shipping_country = form.cleaned_data.get(
                        'shipping_country')
                    shipping_zip = form.cleaned_data.get('shipping_zip')

                    if is_valid_form([shipping_address1, shipping_country, shipping_zip]):
                        shipping_address = Address(
                            user=self.request.user,
                            street_address=shipping_address1,
                            apartment_address=shipping_address2,
                            country=shipping_country,
                            zip=shipping_zip,
                            address_type='S'
                        )
                        shipping_address.save()

                        order.shipping_address = shipping_address
                        order.save()

                        set_default_shipping = form.cleaned_data.get(
                            'set_default_shipping')
                        if set_default_shipping:
                            shipping_address.default = True
                            shipping_address.save()

                    else:
                        messages.info(
                            self.request, "Please fill in the required shipping address fields")

                use_default_billing = form.cleaned_data.get(
                    'use_default_billing')
                same_billing_address = form.cleaned_data.get(
                    'same_billing_address')

                if same_billing_address:
                    billing_address = shipping_address
                    billing_address.pk = None
                    billing_address.save()
                    billing_address.address_type = 'B'
                    billing_address.save()
                    order.billing_address = billing_address
                    order.save()

                elif use_default_billing:
                    print("Using the defualt billing address")
                    address_qs = Address.objects.filter(
                        user=self.request.user,
                        address_type='B',
                        default=True
                    )
                    if address_qs.exists():
                        billing_address = address_qs[0]
                        order.billing_address = billing_address
                        order.save()
                    else:
                        messages.info(
                            self.request, "No default billing address available")
                        return redirect('core:checkout')
                else:
                    print("User is entering a new billing address")
                    billing_address1 = form.cleaned_data.get(
                        'billing_address')
                    billing_address2 = form.cleaned_data.get(
                        'billing_address2')
                    billing_country = form.cleaned_data.get(
                        'billing_country')
                    billing_zip = form.cleaned_data.get('billing_zip')

                    if is_valid_form([billing_address1, billing_country, billing_zip]):
                        billing_address = Address(
                            user=self.request.user,
                            street_address=billing_address1,
                            apartment_address=billing_address2,
                            country=billing_country,
                            zip=billing_zip,
                            address_type='B'
                        )
                        billing_address.save()

                        order.billing_address = billing_address
                        order.save()

                        set_default_billing = form.cleaned_data.get(
                            'set_default_billing')
                        if set_default_billing:
                            billing_address.default = True
                            billing_address.save()

                    else:
                        messages.info(
                            self.request, "Please fill in the required billing address fields")

                payment_option = form.cleaned_data.get('payment_option')

                if payment_option == 'S':
                    return redirect('core:payment', payment_option='stripe')
                elif payment_option == 'P':
                    return redirect('core:payment', payment_option='paypal')
                else:
                    messages.warning(
                        self.request, "Invalid payment option selected")
                    return redirect('core:checkout')
        except ObjectDoesNotExist:
            messages.warning(self.request, "You do not have an active order")
            return redirect("core:order-summary")


class PaymentView(View):
    def get(self, *args, **kwargs):
        order = Order.objects.get(user=self.request.user, ordered=False)
        if order.billing_address:
            # Ensure userprofile exists or create it
            userprofile, created = UserProfile.objects.get_or_create(user=self.request.user)

            context = {
                'order': order,
                'DISPLAY_COUPON_FORM': False,
                'STRIPE_PUBLIC_KEY': settings.STRIPE_PUBLIC_KEY,
            }

            if userprofile.one_click_purchasing:
                # Fetch the user's card list
                cards = stripe.Customer.list_sources(
                    userprofile.stripe_customer_id,
                    limit=3,
                    object='card'
                )
                card_list = cards['data']
                if len(card_list) > 0:
                    # Update the context with the default card
                    context.update({
                        'card': card_list[0]
                    })

            return render(self.request, "core/payment.html", context)
        else:
            messages.warning(
                self.request, "You have not added a billing address")
            return redirect("core:checkout")

    def post(self, *args, **kwargs):
        order = Order.objects.get(user=self.request.user, ordered=False)
        form = PaymentForm(self.request.POST)
        userprofile = UserProfile.objects.get(user=self.request.user)
        if form.is_valid():
            token = form.cleaned_data.get('stripeToken')
            save = form.cleaned_data.get('save')
            use_default = form.cleaned_data.get('use_default')

            if save:
                if userprofile.stripe_customer_id != '' and userprofile.stripe_customer_id is not None:
                    customer = stripe.Customer.retrieve(
                        userprofile.stripe_customer_id)
                    customer.sources.create(source=token)

                else:
                    customer = stripe.Customer.create(
                        email=self.request.user.email,
                    )
                    customer.sources.create(source=token)
                    userprofile.stripe_customer_id = customer['id']
                    userprofile.one_click_purchasing = True
                    userprofile.save()

            amount = int(order.get_total() * 100)

            try:

                if use_default or save:
                    # charge the customer because we cannot charge the token more than once
                    charge = stripe.Charge.create(
                        amount=amount,  # cents
                        currency="usd",
                        customer=userprofile.stripe_customer_id
                    )
                else:
                    # charge once off on the token
                    charge = stripe.Charge.create(
                        amount=amount,  # cents
                        currency="usd",
                        source=token
                    )

                # create the payment
                payment = Payment()
                payment.stripe_charge_id = charge['id']
                payment.user = self.request.user
                payment.amount = order.get_total()
                payment.save()

                # assign the payment to the order

                order_items = order.items.all()
                order_items.update(ordered=True)
                for item in order_items:
                    item.save()

                order.ordered = True
                order.payment = payment
                order.ref_code = create_ref_code()
                order.save()

                messages.success(self.request, "Your order was successful!")
                return redirect("/")

            except stripe.error.CardError as e:
                body = e.json_body
                err = body.get('error', {})
                messages.warning(self.request, f"{err.get('message')}")
                return redirect("/")

            except stripe.error.RateLimitError as e:
                # Too many requests made to the API too quickly
                messages.warning(self.request, "Rate limit error")
                return redirect("/")

            except stripe.error.InvalidRequestError as e:
                # Invalid parameters were supplied to Stripe's API
                print(e)
                messages.warning(self.request, "Invalid parameters")
                return redirect("/")

            except stripe.error.AuthenticationError as e:
                # Authentication with Stripe's API failed
                # (maybe you changed API keys recently)
                messages.warning(self.request, "Not authenticated")
                return redirect("/")

            except stripe.error.APIConnectionError as e:
                # Network communication with Stripe failed
                messages.warning(self.request, "Network error")
                return redirect("/")

            except stripe.error.StripeError as e:
                # Display a very generic error to the user, and maybe send
                # yourself an email
                messages.warning(
                    self.request, "Something went wrong. You were not charged. Please try again.")
                return redirect("/")

            except Exception as e:
                # send an email to ourselves
                messages.warning(
                    self.request, "A serious error occurred. We have been notifed.")
                return redirect("/")

        messages.warning(self.request, "Invalid data received")
        return redirect("/payment/stripe/")


class HomeView(ListView):
    model = Item
    paginate_by = 10
    template_name = "home.html"


class OrderSummaryView(LoginRequiredMixin, View):
    def get(self, *args, **kwargs):
        try:
           
            
            order = Order.objects.get(user=self.request.user, ordered=False)

            context = {
                'object': order
            }
            return render(self.request, 'core/order_summary.html', context)
        
        except ObjectDoesNotExist:
            messages.warning(self.request, "You do not have an active order")
            return redirect("/")


class ItemDetailView(DetailView):
    model = Item
    template_name = "main/alldetail.html"


from django.http import JsonResponse

@login_required(login_url='accounts/login')
def add_to_cart(request, slug):
    item = get_object_or_404(Item, slug=slug)
    order_item, created = OrderItem.objects.get_or_create(
        item=item,
        user=request.user,
        ordered=False
    )
    if created:
        order_item.quantity = 1
        order_item.save()

    order_qs = Order.objects.filter(user=request.user, ordered=False)
    if order_qs.exists():
        order = order_qs[0]
        if order.items.filter(item__slug=item.slug).exists():
            order_item.quantity += 1
            order_item.save()
        else:
            order.items.add(order_item)
    else:
        ordered_date = timezone.now()
        order = Order.objects.create(
            user=request.user, ordered_date=ordered_date
        )
        order.items.add(order_item)
    cart_count = sum([item.quantity for item in order.items.all()])


    response_data = {
        "cart_count": cart_count,
        "item_id": item.id,
        "item_title": item.title,
        "item_price": item.price,
        "item_discount_price": item.discount_price,
        "item_image_url": item.image.url,
        "quantity": order_item.quantity,
        "total_price": order_item.quantity * item.price,
    }

    return JsonResponse(response_data)


@login_required(login_url='accounts/login')
def remove_from_cart(request, item_id):
    if request.method == "POST":
        item = get_object_or_404(Item, id=item_id)
        order_qs = Order.objects.filter(user=request.user, ordered=False)
        
        if order_qs.exists():
            order = order_qs.first()
            if order.items.filter(item__id=item.id).exists():
                order_item = OrderItem.objects.get(
                    item=item,
                    user=request.user,
                    ordered=False
                )
                # Remove the order item from the order and delete it
                order.items.remove(order_item)
                order_item.delete()
                
                # Recalculate cart count and total price
                cart_count = sum([oi.quantity for oi in order.items.all()])
                total_price = sum([oi.item.price * oi.quantity for oi in order.items.all()])
                
                return JsonResponse({
                    "cart_count": cart_count,
                    "total_price": total_price
                })
            else:
                return JsonResponse({"error": "Item not in cart"}, status=400)
        else:
            return JsonResponse({"error": "No active order"}, status=400)
    
    return JsonResponse({"error": "Invalid request method"}, status=405)

 # Use id instead of slug



# @login_required
# def remove_single_item_from_cart(request, item_id):
#     item = get_object_or_404(Item, id=item_id)
#     order_qs = Order.objects.filter(user=request.user, ordered=False)
#     if order_qs.exists():
#         order = order_qs[0]
#         if order.items.filter(item__id=item.id).exists():
#             order_item = OrderItem.objects.get(
#                 item=item,
#                 user=request.user,
#                 ordered=False
#             )
#             if order_item.quantity > 1:
#                 order_item.quantity -= 1
#                 order_item.save()
#             else:
#                 order.items.remove(order_item)
#             cart_count = sum([item.quantity for item in order.items.all()])
#             return JsonResponse({"cart_count": cart_count})
#     return JsonResponse({"error": "No active order"}, status=400)

from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from .models import Item, Order, OrderItem

@login_required
def add_single_item_to_cart(request, item_id):
    if request.method == "POST":  # Ensure only POST requests are allowed
        item = get_object_or_404(Item, id=item_id)
        # Fetch or create the user's active order
        order_qs = Order.objects.filter(user=request.user, ordered=False)
        if order_qs.exists():
            order = order_qs.first()
            # Fetch or create the OrderItem
            order_item, created = OrderItem.objects.get_or_create(
                item=item,
                user=request.user,
                ordered=False
            )
            order_item.quantity += 1  # Increment the quantity
            order_item.save()

            # Calculate cart count and total price
            cart_count = sum([oi.quantity for oi in order.items.all()])
            total_price = sum([oi.item.price * oi.quantity for oi in order.items.all()])

            return JsonResponse({
                "item_id": item.id,
                "quantity": order_item.quantity,
                "item_price": item.price,
                "total_price": total_price,
                "cart_count": cart_count
            })
        else:
            return JsonResponse({"error": "No active order"}, status=400)
    return JsonResponse({"error": "Invalid request method"}, status=405)


@login_required
def remove_single_item_from_cart(request, item_id):
    if request.method == "POST":  # Ensure the request is POST
        item = get_object_or_404(Item, id=item_id)
        # Query for the user's active order
        order_qs = Order.objects.filter(user=request.user, ordered=False)
        if order_qs.exists():
            order = order_qs.first()
            # Check if the item exists in the order
            if order.items.filter(item__id=item.id).exists():
                order_item = OrderItem.objects.get(
                    item=item,
                    user=request.user,
                    ordered=False
                )
                if order_item.quantity > 1:
                    order_item.quantity -= 1
                    order_item.save()
                    response_data = {
                        "item_id": item.id,
                        "quantity": order_item.quantity,
                        "item_price": item.price,
                        "total_price": sum([oi.item.price * oi.quantity for oi in order.items.all()]),
                        "cart_count": sum([oi.quantity for oi in order.items.all()])
                    }
                else:
                    # If the quantity is 1, remove the item from the cart
                    order.items.remove(order_item)
                    response_data = {
                        "item_id": item.id,
                        "quantity": 0,
                        "item_price": item.price,
                        "total_price": sum([oi.item.price * oi.quantity for oi in order.items.all()]),
                        "cart_count": sum([oi.quantity for oi in order.items.all()])
                    }

                return JsonResponse(response_data)
            else:
                return JsonResponse({"error": "Item not in cart"}, status=400)
        else:
            return JsonResponse({"error": "No active order"}, status=400)
    return JsonResponse({"error": "Invalid request method"}, status=405)

def get_coupon(request, code):
    try:
        coupon = Coupon.objects.get(code=code)
        return coupon
    except ObjectDoesNotExist:
        messages.info(request, "This coupon does not exist")
        return redirect("core:checkout")


class AddCouponView(View):
    def post(self, *args, **kwargs):
        form = CouponForm(self.request.POST or None)
        if form.is_valid():
            try:
                code = form.cleaned_data.get('code')
                order = Order.objects.get(
                    user=self.request.user, ordered=False)
                order.coupon = get_coupon(self.request, code)
                order.save()
                messages.success(self.request, "Successfully added coupon")
                return redirect("core:checkout")
            except ObjectDoesNotExist:
                messages.info(self.request, "You do not have an active order")
                return redirect("core:checkout")


class RequestRefundView(View):
    def get(self, *args, **kwargs):
        form = RefundForm()
        context = {
            'form': form
        }
        return render(self.request, "request_refund.html", context)

    def post(self, *args, **kwargs):
        form = RefundForm(self.request.POST)
        if form.is_valid():
            ref_code = form.cleaned_data.get('ref_code')
            message = form.cleaned_data.get('message')
            email = form.cleaned_data.get('email')
            # edit the order
            try:
                order = Order.objects.get(ref_code=ref_code)
                order.refund_requested = True
                order.save()

                # store the refund
                refund = Refund()
                refund.order = order
                refund.reason = message
                refund.email = email
                refund.save()

                messages.info(self.request, "Your request was received.")
                return redirect("core:request-refund")

            except ObjectDoesNotExist:
                messages.info(self.request, "This order does not exist.")
                return redirect("core:request-refund")
