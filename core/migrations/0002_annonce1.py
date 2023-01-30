# Generated by Django 4.1.4 on 2023-01-30 07:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Annonce1',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titre', models.CharField(max_length=128)),
                ('niveau', models.CharField(max_length=128)),
                ('discription', models.CharField(max_length=128)),
                ('mode', models.CharField(max_length=128)),
                ('nom', models.CharField(max_length=128)),
                ('prix', models.CharField(max_length=128)),
                ('lieu', models.CharField(max_length=128)),
                ('image', models.ImageField(upload_to='images/')),
            ],
            options={
                'db_table': 'annonce1',
            },
        ),
    ]