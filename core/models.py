from django.db import models
from django.contrib.auth.models import User
class Annonce(models.Model):
   
    titre= models.CharField(max_length=128)
    niveau= models.CharField(max_length=128)
    discription= models.CharField(max_length=128)
    image= models.CharField(max_length=128)
    mode= models.CharField(max_length=128)
    nom= models.CharField(max_length=128)
    prix= models.CharField(max_length=128)
    lieu= models.CharField(max_length=128)
    timestamp=models.DateField(auto_now_add=True,auto_now=False,blank=True)

    class Meta:
        db_table="annonce"
def upload_path(instance,filname):
    return '/'.join(['images',str(instance.titre),filname])   
     
class Annoncee(models.Model):
    email=models.CharField(max_length=128,null=True,blank=True)
    titre= models.CharField(max_length=128 ,null=True,blank=True)
    niveau= models.CharField(max_length=128 ,null=True,blank=True)
    discription= models.CharField(max_length=500 ,null=True,blank=True)
    mode= models.CharField(max_length=128 ,null=True,blank=True)
    nom= models.CharField(max_length=128 ,null=True,blank=True)
    prix= models.CharField(max_length=128 ,null=True,blank=True)
    lieu= models.CharField(max_length=128, null=True,blank=True)
    image1= models.ImageField(blank=True,null=True,upload_to=upload_path)
    img= models.CharField(max_length=128, null=True,blank=True)
    timestamp=models.DateField(auto_now_add=True,auto_now=False,blank=True,)
    class Meta:
        db_table="annonce1"   
        
class Favoris(models.Model):
    email=models.CharField(max_length=128,null=True,blank=True)
    titre= models.CharField(max_length=128 ,null=True,blank=True)
    niveau= models.CharField(max_length=128 ,null=True,blank=True)
    discription= models.CharField(max_length=500 , null=True,blank=True)
    mode= models.CharField(max_length=128 ,null=True,blank=True)
    nom= models.CharField(max_length=128 ,null=True,blank=True)
    prix= models.CharField(max_length=128 ,null=True,blank=True)
    lieu= models.CharField(max_length=128 ,null=True,blank=True)
    image1= models.ImageField(blank=True,null=True,upload_to=upload_path)
    img= models.CharField(max_length=128 ,null=True,blank=True)
    timestamp=models.DateField(auto_now_add=True,auto_now=False,blank=True)
    author = models.CharField(max_length=128 ,null=True,blank=True)
    class Meta:
        db_table="Favoris"         
        
         
            
