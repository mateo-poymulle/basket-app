# Generated by Django 3.2.9 on 2021-11-29 17:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_shoes_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='shoes',
            name='cantidad',
            field=models.IntegerField(null=True),
        ),
    ]