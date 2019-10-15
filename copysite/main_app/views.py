from django.shortcuts import render

from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def main_app1(request):
    return render(request, 'index.html')


def net_gh(request):
    return render(request, 'new.html')

def treni(request):
    return render(request, 'treni.html')

def rapid(request):
    return render(request, 'sbori.html')

def tumba(request):
    return render(request, 'tumba.html')

def commanda(request):
    return render(request, 'commanda.html')
      
def vorota(request):
    return render(request, 'vorota.html')

def sopernik(request):
    return render(request, 'sopernik.html')

def produkiay(request):
    return render(request, 'produkiay.html')