from django.urls import path
from . import views
from .views import (
    ItemDetailView,
    CheckoutView,
    
    OrderSummaryView,
    add_to_cart,
    remove_from_cart,
    remove_single_item_from_cart,
    PaymentView,
    AddCouponView,
    RequestRefundView
)

app_name = 'core'


urlpatterns = [
   path("",views.index,name='index' ),
   path("allbeer",views.allbeer,name='allbeer' ),
   path("alldetail/<slug:slug>/",views.alldetail,name='alldetail' ),
   path("about",views.about,name='aboutus' ),
   path("detail",views.detail,name='detail' ),
   path("confirm",views.confirm,name='confirm' ),
   #path("order-summary/",views.order_summary_view,name='order-summary' ),
#    path('add_too_cart/', views.add_too_cart, name='add_to_cart'),
#    #path('cart/remove/', views.remove_from_cart, name='remove_from_cart'),
#    path('remove-from-cart/',views.remove_from_cart, name='remove_from_cart'),
#     path('get_cart_count/', views.get_cart_count, name='get_cart_count'),



    path('checkout/', CheckoutView.as_view(), name='checkout'),
    path('order-summary/', OrderSummaryView.as_view(), name='order-summary'),
    path('product/<slug:slug>/', ItemDetailView.as_view(), name='product'),
    path('add-to-cart/<slug:slug>/', add_to_cart, name='add-to-cart'),
    path('add-coupon/', AddCouponView.as_view(), name='add-coupon'),
    path('add-single-item-to-cart/<int:item_id>/', views.add_single_item_to_cart, name='add-single-item-to-cart'),

    path('remove-from-cart/<int:item_id>/', remove_from_cart, name='remove-from-cart'),
    path('remove-item-from-cart/<int:item_id>/', remove_single_item_from_cart,
         name='remove-single-item-from-cart'),
    path('payment/<payment_option>/', PaymentView.as_view(), name='payment'),
    path('request-refund/', RequestRefundView.as_view(), name='request-refund')
]