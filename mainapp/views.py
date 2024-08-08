from django.shortcuts import render
from . models import Beer
# Create your views here.

def index(request):
    beer=Beer.objects.all()
    context={
        'beer':beer
    }
    return render(request,'mainapp/index.html',context)


def detail(request):
    return render(request,'main/lol.html')

def allbeer(request):
    return render(request,'main/allbeer.html')


def alldetail(request):
    return render(request,'main/alldetail.html')

def about(request):
    return render(request,'main/about.html')

def confirm(request):
    return render(request,'main/confirm.html')