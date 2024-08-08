from django.urls import path
from . import views


urlpatterns = [
   path("",views.index,name='index' ),
   path("allbeer",views.allbeer,name='allbeer' ),
   path("alldetail",views.alldetail,name='alldetail' ),
   path("about",views.about,name='aboutus' ),
   path("detail",views.detail,name='detail' ),
   path("confirm",views.confirm,name='confirm' )
]