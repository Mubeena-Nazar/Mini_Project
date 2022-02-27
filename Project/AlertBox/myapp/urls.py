from django.urls import path
from . import views

urlpatterns = [
    path('', views.mal_det)
]

#path('', views.calc),
#path('display', views.disp),
