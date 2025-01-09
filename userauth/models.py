# from django.db import models
# from django.contrib.auth.models import AbstractUser
# from PIL import Image
# from shortuuid.django_fields import ShortUUIDField
# import shortuuid
# from django.utils.text import slugify
# from django.db.models.signals import post_save
# from django.contrib.auth.models import AbstractUser,Group


from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    street = models.CharField(max_length=255)
    house_no = models.CharField(max_length=10)

# from django.contrib.auth.models import AbstractUser, Permission

# class User(AbstractUser):
#     full_name = models.CharField(max_length=100)
#     username=models.CharField(max_length=100)
    
#     email = models.EmailField(unique=True)
#     otp = models.CharField(max_length=10, null=True, blank=True)

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['username']

#     # Add the groups field with a unique related_name
#     groups = models.ManyToManyField(
#         Group,
#         verbose_name=('groups'),
#         blank=True,
#         related_name='user_custom_groups'  # Change related_name to avoid clash
#     )

#     # Add the user_permissions field with a unique related_name
#     user_permissions = models.ManyToManyField(
#         Permission,
#         verbose_name=('user permissions'),
#         blank=True,
#         related_name='user_custom_permissions'  # Change related_name to avoid clash
#     )

#     def __str__(self):
#         return self.username

        
    
# class Profile(models.Model):
   
#     user=models.OneToOneField(User,on_delete=models.CASCADE)
#     full_name=models.CharField(max_length=100,null=True,blank=True)
#     phone_number=models.CharField(max_length=100,null=True,blank=True)
#     house_no=models.CharField(max_length=100,null=True,blank=True)
#     street=models.CharField(max_length=100,null=True,blank=True)
#     #bio=models.CharField(max_length=200,null=True,blank=True,d')
#     about_me=models.TextField(null=True,blank=True,default='')
#     counrty=models.CharField(max_length=200,null=True,blank=True)
#     state=models.CharField(max_length=200,null=True,blank=True)
#     city=models.CharField(max_length=200,null=True,blank=True)
#     adress=models.CharField(max_length=200,null=True,blank=True)
   

#     slug=models.SlugField(unique=True,null=True,blank=True)
#     date=models.DateTimeField(auto_now=True)
    
#     def __str__(self):
#         return self.user.username
            
#     def save(self,*args,**kwargs):
#         if self.slug=='' or self.slug==None:
#             uuid_key=shortuuid.uuid()
#             uniqueid=uuid_key[:2]
#             self.slug=slugify(self.full_name) + '-' + str(uniqueid.lower())
#         super(Profile,self).save(*args,**kwargs)
            
#     #class Meta:
#         #prepopulated_fields = {'slug': ('full_name',)}
        
#     def create_user_profile(sender,instance,created,**kwargs):
#         if created:
#             Profile.objects.get_or_create(user=instance)
#     def save_user_profile(sender,instance,**kwargs):
#         instance.profile.save()
#     post_save.connect(create_user_profile,sender=User)
#     post_save.connect(save_user_profile,sender=User)