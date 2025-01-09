from django.urls import path
from . import views
from .views import custom_logout

urlpatterns = [
   
   path("signup",views.signup,name='signup' ),
   path("signupp",views.signupp,name='signupp' ),
   path("login",views.login,name='login' ),
   path("loginv",views.login_view,name='loginv' ),
   path('logout/', custom_logout, name='logout'),
   path('logoutt/', views.logoutt, name='logoutt'),
   
]