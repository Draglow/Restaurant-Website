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