from django.contrib import admin
from .models import Category, Items, Cart, CartItem, Order, OrderItem

# Register the BeerCategory model
@admin.register(Category)
class BeerCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)
    prepopulated_fields = {'slug': ('name',)}

# Register the Beer model
@admin.register(Items)
class BeerAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'abv', 'price')
    list_filter = ('category',)
    search_fields = ('name', 'category__name')
    prepopulated_fields = {'slug': ('name',)}

# Inline model for CartItem
class CartItemInline(admin.TabularInline):
    model = CartItem
    extra = 1

# Register the Cart model
@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ('user', 'created_at')
    search_fields = ('user__username',)
    inlines = [CartItemInline]

# Register the CartItem model
@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ('cart', 'items', 'quantity')
    raw_id_fields = ('cart', 'items')
    search_fields = ('beer__name',)

# Inline model for OrderItem
class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1

# Register the Order model
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('user', 'total_amount', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('user__username', 'id')
    inlines = [OrderItemInline]

# Register the OrderItem model
@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
    list_display = ('order', 'items', 'quantity', 'price')
    raw_id_fields = ('order', 'items')
    search_fields = ('order__id', 'beer__name')
