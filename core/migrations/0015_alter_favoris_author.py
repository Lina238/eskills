# Generated by Django 4.1.4 on 2023-02-09 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0014_favoris_author'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favoris',
            name='author',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
    ]
