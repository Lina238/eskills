# Generated by Django 4.1.4 on 2023-02-09 00:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('core', '0013_annonce_timestamp_annoncee_timestamp_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='favoris',
            name='author',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
