# Generated by Django 4.1.4 on 2023-02-08 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0010_favoris'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favoris',
            name='discription',
            field=models.CharField(max_length=500),
        ),
    ]