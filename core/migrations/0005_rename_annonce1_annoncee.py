# Generated by Django 4.1.4 on 2023-01-30 09:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_rename_image_annonce1_image1'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Annonce1',
            new_name='Annoncee',
        ),
    ]