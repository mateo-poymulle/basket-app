# Generated by Django 3.2.9 on 2021-11-19 13:58

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_shoes_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='shoes',
            name='image',
            field=models.ImageField(default='exit', upload_to=api.models.url),
            preserve_default=False,
        ),
    ]
