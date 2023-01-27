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
    class Meta:
        db_table="annonce"
