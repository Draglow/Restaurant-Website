# from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin
# from .models import User, UserProfile

# # Customizing the User admin interface
# class CustomUserAdmin(UserAdmin):
#     # Specify the fields to display in the list view
#     list_display = ('email', 'username', 'full_name', 'is_staff', 'is_active')
#     # Define the fields to make searchable
#     search_fields = ('email', 'username', 'full_name')
#     # Add filter options for is_staff and is_active status
#     list_filter = ('is_staff', 'is_active', 'groups')
    
#     # Customize the form view by specifying fieldsets
#     fieldsets = (
#         (None, {'fields': ('email', 'password')}),
#         ('Personal Info', {'fields': ('full_name', 'username')}),
#         ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
#         ('Important Dates', {'fields': ('last_login', 'date_joined')}),
#     )
    
#     # Specify the fields required when creating a new user in the admin interface
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('email', 'username', 'password1', 'password2', 'full_name', 'is_active', 'is_staff', 'groups')
#         }),
#     )
    
#     ordering = ('email',)  # Order users by email

# # Register the custom User model with the customized admin
# admin.site.register(User, CustomUserAdmin)

# # Profile admin configuration
# class ProfileAdmin(admin.ModelAdmin):
#     list_display = ('user', 'full_name', 'phone_number', 'city', 'state', 'counrty', 'date')
#     search_fields = ('user__username', 'full_name', 'phone_number', 'city', 'state', 'counrty')
#     list_filter = ('state', 'counrty', 'date')
    
#     # Prepopulate the slug field based on the full_name field
#     prepopulated_fields = {"slug": ("full_name",)}

# # Register the Profile model with the admin site


# class UserProfileAdmin(admin.ModelAdmin):
#     list_display = ('user', 'full_name', 'phone_number', 'street', 'house_no')
#     search_fields = ('user__username', 'full_name', 'phone_number')

# admin.site.register(UserProfile)
