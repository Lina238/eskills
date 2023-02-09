from django.urls import path
from . import views
from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet
from .views import AnnonceViewSet,AnnonceeViewSet,FavorisViewSet
router=routers.DefaultRouter()
router.register('users',UserViewSet)
router.register('annonces',AnnonceViewSet)
router.register('annonces1',AnnonceeViewSet)
router.register('Favoriss',FavorisViewSet)
urlpatterns = [
    path('creerannonce/',views.creerannonce,name='creerannonce'),
    path('',include(router.urls)),
]
