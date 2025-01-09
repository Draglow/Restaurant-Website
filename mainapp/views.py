from django.shortcuts import render
from . models import Items,Category
from django.shortcuts import render, get_object_or_404
# Create your views here.

def index(request):
    food = Category.objects.get(name='food')
    items_in_category = Items.objects.filter(category=food)
    alchol_drink = Category.objects.get(name='alcholic')
    beer=Items.objects.filter(category=alchol_drink)
    context={
        'beer':beer,
        'food':items_in_category
    }
    return render(request,'mainapp/index.html',context)


def alldetail(request,id):
    obj = get_object_or_404(Items,pk=id)
    context={
        'obj':obj
    }
    return render(request,'mainapp/detail.html',context)

def allbeer(request):
    return render(request,'main/allbeer.html')


def detail(request):
    return render(request,'mainapp/lol.html')

def about(request):
    return render(request,'main/about.html')

def confirm(request):
    return render(request,'main/confirm.html')


from django.http import JsonResponse
from django.shortcuts import get_object_or_404
import json
from .models import Items, Cart, CartItem

def add_to_cart(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        item_id = data.get('item_id')

        # Fetch the item and the user's cart
        item = get_object_or_404(Items, id=item_id)
        cart, created = Cart.objects.get_or_create(user=request.user, is_active=True)

        # Get or create the cart item
        cart_item, created = CartItem.objects.get_or_create(cart=cart, items=item)

        # Increment quantity if the item already exists
        if not created:
            cart_item.quantity += 1
        else:
            cart_item.quantity = 1  # Set initial quantity to 1 for new item

        cart_item.save()  # Save the cart item

        # Calculate total price for the current item
        item_total_price = item.price * cart_item.quantity

        # Calculate the grand total for all items in the cart
        cart_items = CartItem.objects.filter(cart=cart)
        cart_grand_total = sum(cart_item.items.price * cart_item.quantity for cart_item in cart_items)

        # Return response data with formatted strings to avoid JavaScript NaN errors
        return JsonResponse({
            'item_name': item.name,
            'item_price': f"{item.price:.2f}",  # Ensure this is correctly formatted
            'quantity': cart_item.quantity,
            'item_total_price': f"{item_total_price:.2f}",  # Total price of this item in cart
            'cart_grand_total': f"{cart_grand_total:.2f}",  # Total for all items
            'item_id': item_id  # ID to track in JavaScript
        })

    return JsonResponse({'error': 'Invalid request'}, status=400)  
def remove_from_cart(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            item_id = data.get('item_id')

            # Get the user's active cart
            cart = Cart.objects.get(user=request.user, is_active=True)
            cart_item = CartItem.objects.get(cart=cart, items__id=item_id)

            # Remove the cart item
            cart_item.delete()

            return JsonResponse({'success': True, 'item_id': item_id})
        except CartItem.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Item not found in cart.'})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)})

    return JsonResponse({'success': False, 'error': 'Invalid request.'})

def add_to_cart(request):
    
    cart_product={}
    
    
    
    product_id=request.POST.get('id')
    
    cart_product[product_id]={
        'title':request.GET['title'],
        'price':request.GET['price'],
        'qty':request.GET['qty']
    }
    
    if 'cart_obj' in request.session:
        if product_id in request.session['cart_obj']:
            cart_data=request.session['cart_obj']
            cart_data['id']['qty']=int(cart_product['id'])['qty']
            cart_data.update(cart_data)
        else:
            cart_data=request.session['cart_obj']
            cart_data.update(cart_data)
            request.session['cart_obj']=cart_data
    else:
        request.session['cart_obj']=cart_product
    return JsonResponse({'data':request.session['cart_obj','totalcartitem':len(request.session['cart_obj'])]})




from django.http import JsonResponse

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def add_too_cart(request):
    if request.method == "POST":
        # Initialize the cart_product dictionary
        cart_product = {}

        # Get product details from the POST request
        product_id = request.POST.get('id')
        title = request.POST.get('title')
        price = request.POST.get('price')
        qty = int(request.POST.get('qty', 1))  # Convert quantity to an integer

        # Add product information to the cart_product dictionary
        cart_product[product_id] = {
            'title': title,
            'price': price,
            'qty': qty
        }

        # Check if 'cart_obj' exists in session
        if 'cart_obj' in request.session:
            cart_data = request.session['cart_obj']
            
            # Check if product already exists in cart to update quantity
            if product_id in cart_data:
                cart_data[product_id]['qty'] += qty  # Update quantity
            else:
                cart_data[product_id] = cart_product[product_id]  # Add new product
            
            # Update session with modified cart data
            request.session['cart_obj'] = cart_data
        else:
            # Initialize cart with the new product
            request.session['cart_obj'] = cart_product

        # Return updated cart and total item count
        return JsonResponse({
            'data': request.session['cart_obj'],
            'totalcartitem': len(request.session['cart_obj'])
        })

    # Return error if request method is not POST
    return JsonResponse({'error': 'Invalid request method'}, status=400)



# from django.http import JsonResponse
# @csrf_exempt
# def add_too_cart(request):
#     if request.method == "POST":
#         # Get product details from the POST request
#         product_id = request.POST.get('id')
#         title = request.POST.get('title')
#         price = request.POST.get('price')

#         # Retrieve the cart from the session or initialize it if it doesn't exist
#         cart_data = request.session.get('cart_obj', {})

#         # Check if the product is already in the cart
#         if product_id in cart_data:
#             # Increment the quantity by 1
#             cart_data[product_id]['qty'] += 1
#         else:
#             # Add the product to the cart with a quantity of 1
#             cart_data[product_id] = {
#                 'title': title,
#                 'price': price,
#                 'qty': 1
#             }

#         # Save the updated cart back to the session
#         request.session['cart_obj'] = cart_data
#         request.session.modified = True  # Ensure session updates are saved

#         # Calculate the total number of unique items and the total quantity of all items
#         total_unique_items = len(cart_data)  # Unique items in the cart
#         total_quantity = sum(item['qty'] for item in cart_data.values())  # Sum of all quantities

#         # Return the updated cart data, total unique items, and total quantity
#         return JsonResponse({
#             'data': request.session['cart_obj'],
#             'totalcartitem': total_unique_items,  # Count of unique items
#             'total_quantity': total_quantity       # Sum of all quantities
#         })

#     # Return an error if the request method is not POST
#     return JsonResponse({'error': 'Invalid request method'}, status=400)