from rest_framework import serializers
from django.contrib.auth.models import User
from core.models import Annonce,Annoncee,Favoris
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username','email', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
class AnnonceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annonce
        fields = ['id', 'titre','niveau','discription','image','mode','nom','prix','lieu',
                  'timestamp'
                  ]  
class AnnonceeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Annoncee
        fields = ['id', 'titre','niveau','discription','image1','mode','nom','prix','lieu',
                'img','email','timestamp'
                  ]          
        # authentication_class={TokenAuthentication,}
        # permission_classes={IsAuthenticated,}
class FavorisSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favoris
        fields = ['id', 'titre','niveau','discription','image1','mode','nom','prix','lieu',
                'img','email','timestamp','author'
                  ]          