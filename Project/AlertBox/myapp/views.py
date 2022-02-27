from pyexpat.errors import messages
from django.shortcuts import render,redirect
from django.http import HttpResponse, HttpResponseRedirect

from django.contrib import messages
from django.urls import reverse_lazy


import requests
from bs4 import BeautifulSoup
import json


# Create your views here.
def hello(request):
    val="helllo"
    return HttpResponse("<script>alert('hello');</script>")

def calc(request):
    print("ine")
    return render(request,"index.html")

def mal_det(request):  
    if request.method == 'GET' and 'u1' in request.GET:
        res = request.GET['u1']
        api_url = 'https://www.virustotal.com/vtapi/v2/url/report'  
        params = dict(apikey='938439d30a084aaa74d25b244045077cac031565f6ce7ae4d0a806466123bb6c', resource=res, scan=0)
        response = requests.get(api_url, params=params)
        if response.status_code == 200:
            result=response.json()
            #res = json.dumps(result, sort_keys=False, indent=4)
            print(result['positives'])
             
        if result['positives']>0:
            return HttpResponse("<script>alert('DANGER !!! NOT SAFE ');window.close()</script>")
        else:
            return HttpResponse("<script>alert('SAFE TO SURF !!! HAPPY BROWSING ');window.close()</script>")
    return HttpResponse('ok')
