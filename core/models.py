from django.db import models

class Annonce(models.Model):

    titre= models.CharField(max_length=128)
    niveau= models.CharField(max_length=128)
    discription= models.CharField(max_length=128)
    image= models.CharField(max_length=128)
    mode= models.CharField(max_length=128)
    nom= models.CharField(max_length=128)
    prix= models.CharField(max_length=128)
    lieu= models.CharField(max_length=128)
    # img= models.ImageField(upload_to='images/')
    class Meta:
        db_table="annonce"
def upload_path(instance,filname):
    return '/'.join(['images',str(instance.titre),filname])   
     
class Annoncee(models.Model):
    
    titre= models.CharField(max_length=128)
    niveau= models.CharField(max_length=128)
    discription= models.CharField(max_length=128)
    mode= models.CharField(max_length=128)
    nom= models.CharField(max_length=128)
    prix= models.CharField(max_length=128)
    lieu= models.CharField(max_length=128)
    image1= models.ImageField(blank=True,null=True,upload_to=upload_path)
    class Meta:
        db_table="annonce1"        
