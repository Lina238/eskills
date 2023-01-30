from django.urls import path
from . import views
from django.urls import path, include
from rest_framework import routers
from .views import UserViewSet
from .views import AnnonceViewSet,AnnonceeViewSet
router=routers.DefaultRouter()
router.register('users',UserViewSet)
router.register('annonces',AnnonceViewSet)
router.register('annonces1',AnnonceeViewSet)
urlpatterns = [
    path("", views.scores, name='scores'),
    path('creerannonce/',views.creerannonce,name='creerannonce'),
    path('',include(router.urls)),
]
