# Generated by Django 3.2.9 on 2021-11-29 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_shoes_cantidad'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shoes',
            name='cantidad',
            field=models.IntegerField(default=1),
        ),
    ]