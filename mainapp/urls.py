from django.urls import path
from . import views


urlpatterns = [
   path("",views.index,name='index' ),
   path("allbeer",views.allbeer,name='allbeer' ),
   path("alldetail/<int:id>/",views.alldetail,name='alldetail' ),
   path("about",views.about,name='aboutus' ),
   path("detail",views.detail,name='detail' ),
   path("confirm",views.confirm,name='confirm' ),
   path('add_too_cart/', views.add_too_cart, name='add_to_cart'),
   #path('cart/remove/', views.remove_from_cart, name='remove_from_cart'),
   path('remove-from-cart/',views.remove_from_cart, name='remove_from_cart'),
]