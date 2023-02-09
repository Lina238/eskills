from django.http import HttpResponse
from django.shortcuts import render
import csv
from rest_framework import viewsets
from django.contrib.auth.models import User
from core.models import Annonce,Annoncee,Favoris
from .serializers import UserSerializer,AnnonceSerializer,AnnonceeSerializer,FavorisSerializer
# Create your views here.
from django.contrib.auth.mixins import LoginRequiredMixin
from django.utils import timezone
def creerannonce():
               i=1
               with open('infos.csv', mode ='r') as file:   
  
                 csvFile = csv.DictReader(file)
 
       
                 for lines in csvFile:
                      annonce=Annonce(
                       id=i,   
                       titre=lines['titre'],
                       niveau=lines['niveau'],
                       discription=lines['discription'],
                       image=lines['image'],
                       mode=lines['mode'], 
                       nom=lines['nom'],
                       prix=lines['prix'], 
                       lieu=lines['lieu']    
                           
                      )
                      annonce.save();
                      i=i+1
class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class  = UserSerializer                   
class AnnonceViewSet(viewsets.ModelViewSet):
    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer
    # reviens si tu veux savoir comment afficher qu'au gens qui sont contectés kan
    # authentication_classes = [TokenAuthentication, ]
    # permission_classes = [IsAuthenticated, ]   
class AnnonceeViewSet(viewsets.ModelViewSet):
    queryset = Annoncee.objects.all()
    serializer_class = AnnonceeSerializer
    # reviens si tu veux savoir comment afficher qu'au gens qui sont contectés kan
    # authentication_classes = [TokenAuthentication, ]
    # permission_classes = [IsAuthenticated, ]                     
    def post(self, request, *args, **kwargs):
        image1 = request.data['image1']
        titre = request.data['titre']
        niveau = request.data['niveau']
        discription = request.data['discription']
        mode = request.data['mode']
        img=request.data['img']
        nom= request.data['nom']
        email= request.data['email']
        prix= request.data['prix']
        lieu= request.data['lieu']
        Annoncee.objects.create(titre=titre,
                                image1=image1,
                                niveau=niveau,
                                discription=discription,
                                mode=mode,
                                nom=nom,
                                prix=prix,
                                lieu=lieu,
                                img=img,
                                timestamp=timezone.now(),
                                email=email
                                )
        return HttpResponse({'Annonce created!'}, status=200)  
class FavorisViewSet(viewsets.ModelViewSet):
    queryset = Favoris.objects.all()
    serializer_class = FavorisSerializer
    # reviens si tu veux savoir comment afficher qu'au gens qui sont contectés kan
    # authentication_classes = [TokenAuthentication, ]
    # permission_classes = [IsAuthenticated, ]                     
    def post(self, request, *args, **kwargs):
        image1 = request.data['image1']
        titre = request.data['titre']
        niveau = request.data['niveau']
        discription = request.data['discription']
        mode = request.data['mode']
        img=request.data['img']
        nom= request.data['nom']
        email= request.data['email']
        prix= request.data['prix']
        lieu= request.data['lieu']
        Annoncee.objects.create(titre=titre,
                                image1=image1,
                                niveau=niveau,
                                discription=discription,
                                mode=mode,
                                nom=nom,
                                prix=prix,
                                lieu=lieu,
                                img=img,
                                email=email,
                                timestamp=timezone.now(),
                                author = request.user
                                )
        return HttpResponse({'Annonce created!'}, status=200)                     
    