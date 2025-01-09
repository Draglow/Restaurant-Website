from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth.hashers import make_password
from django.contrib.auth import logout

# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages,auth

from django.shortcuts import render, redirect
from django.contrib import messages, auth
from django.contrib.auth import get_user_model



# def login(request):
#     if request.method == 'POST':
#         email = request.POST.get('email')
#         password = request.POST.get('password1')
        
#         try:
#             # Fetch the user by email
#             user = User.objects.get(email=email)
            
#             # Check if the password is correct
#             if user.check_password(password):
#                 auth.login(request, user)
#                 messages.success(request, 'You are successfully logged in')
#                 return redirect('index')
#             else:
#                 messages.error(request, 'Invalid password')
#         except User.DoesNotExist:
#             messages.error(request, 'User with this email does not exist')
        
#         return redirect('login')
    
#     return render(request, 'userauth/login.html')



    



from django.contrib import messages, auth
from django.db import transaction
from django.shortcuts import render, redirect
from .models import UserProfile  # Ensure UserProfile is imported

def signup(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')
        full_name = request.POST.get('full_name')
        phone_number = request.POST.get('phone_number')
        street = request.POST.get('street')
        house_no = request.POST.get('house_no')

        if not all([username, email, password1, password2, full_name, phone_number, street, house_no]):
            messages.error(request, 'Please fill in all the fields')
            return render(request, 'userauth/signup.html')
        
        if password1 != password2:
            messages.error(request, 'Passwords do not match')
            return render(request, 'userauth/signup.html')
        
        if User.objects.filter(username=username).exists():
            messages.error(request, 'This username already exists')
            return render(request, 'userauth/signup.html')
        
        if User.objects.filter(email=email).exists():
            messages.error(request, 'This email already exists')
            return render(request, 'userauth/signup.html')

        with transaction.atomic():
            user = User.objects.create_user(username=username, email=email, password=password1)
            UserProfile.objects.create(user=user, full_name=full_name, phone_number=phone_number, street=street, house_no=house_no)
        
        auth.login(request, user)
        messages.success(request, 'Registration successful')
        return redirect('index')
    
    return render(request, 'userauth/signup.html')


from django.contrib import messages, auth
from django.contrib.auth.models import User
from django.db import transaction
from django.http import JsonResponse
from .models import UserProfile

def signupp(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')
        full_name = request.POST.get('full_name')
        phone_number = request.POST.get('phone_number')
        street = request.POST.get('street')
        house_no = request.POST.get('house_no')

        # Check if all required fields are filled
        if not all([username, email, password1, password2, full_name, phone_number, street, house_no]):
            return JsonResponse({'error': 'Please fill in all the fields'}, status=400)
        
        # Check if passwords match
        if password1 != password2:
            return JsonResponse({'error': 'Passwords do not match'}, status=400)
        
        # Check if username or email already exists
        if User.objects.filter(username=username).exists():
            return JsonResponse({'error': 'This username already exists'}, status=400)
        
        if User.objects.filter(email=email).exists():
            return JsonResponse({'error': 'This email already exists'}, status=400)

        # Create user and profile within an atomic transaction
        try:
            with transaction.atomic():
                user = User.objects.create_user(username=username, email=email, password=password1)
                UserProfile.objects.create(user=user, full_name=full_name, phone_number=phone_number, street=street, house_no=house_no)
            
            # Log the user in after successful registration
            auth.login(request, user)
            return redirect ('index')
        
        except Exception as e:
            return JsonResponse({'error': f'An error occurred: {str(e)}'}, status=500)

    return JsonResponse({'error': 'Invalid request method'}, status=405)




def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password1')

        try:
            # Attempt to get the user with the provided email
            user = User.objects.get(email=email)
            # Check if the password matches
            if user.check_password(password):
                auth.login(request, user)
                messages.success(request, 'You are successfully logged in')
                return redirect('index')  # Redirect to the home page or other desired page
            else:
                messages.error(request, 'Invalid email or password')
        except User.DoesNotExist:
            messages.error(request, 'Invalid email or password')

        return redirect('login')
    
    return render(request, 'userauth/login.html')




def custom_logout(request):
    logout(request)
    messages.success(request, 'You have been logged out successfully.')
    return redirect('login')  # Redirect to the login page or any other page

def logoutt(request):
    logout(request)
    messages.success(request, 'You have been logged out successfully.')
    return redirect('index')  # Redirect to the login page or any other page

def login_view(request):
   if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password1')

        try:
            # Attempt to get the user with the provided email
            user = User.objects.get(email=email)
            # Check if the password matches
            if user.check_password(password):
                auth.login(request, user)
                messages.success(request, 'You are successfully logged in')
                return redirect('index')  # Redirect to the home page or other desired page
            else:
                messages.error(request, 'Invalid email or password')
        except User.DoesNotExist:
            messages.error(request, 'Invalid email or password')

        return redirect('login')

   return JsonResponse({'success': False, 'message': 'Invalid email or password'})


def addd_to_cart(request):
    cart_product={}
    pro_id=str(request.GET['id'])
    cart_product[pro_id]={
        'title':request.GET['title'],
        'price':request.GET['price'],
        'qty':request.GET['quantity'],
    }
    
    if 'cart_obj' in request.session:
        if pro_id in request.session['cart_obj']:
            cart_data=request.session['cart_obj']
            cart_data[pro_id]['qty']=int(cart_product[pro_id])['qty']
            cart_data.update[cart_data]
            request.session['cart_obj']=cart_data
        else:
            pass
             