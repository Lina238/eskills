from django.shortcuts import render
import csv
from rest_framework import viewsets
from django.contrib.auth.models import User
from core.models import Annonce
from .serializers import UserSerializer,AnnonceSerializer
# Create your views here.
def scores(request):
    fixtures=Annonce.objects.all()

    context = {}
    return render(request, 'index.html', context)
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