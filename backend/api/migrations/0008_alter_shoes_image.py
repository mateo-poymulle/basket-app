# Generated by Django 3.2.9 on 2021-12-10 17:56

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_alter_shoes_cantidad'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoes',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=api.models.url),
        ),
    ]
