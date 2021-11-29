import random
import string

from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.
from django.utils.safestring import mark_safe

class ExtendedUser(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE, related_name='extended_user')
    data = models.CharField(max_length=100, null=True)

def url(self, filename):
    ruta = "static/img/shoes/%s/%s"%(self.title, str(filename))
    return ruta

class Shoes(models.Model):

    def image_shoes(self):
        return mark_safe('<a href="/%s"><img src="/%s" width=50px height=50px /> </a> '%(self.image, self.image))

    id = models.CharField(primary_key=True, max_length=15, editable=False)
    title = models.CharField(max_length=50, null=True)
    category = models.CharField(max_length=20, null=True)
    price = models.FloatField(null=True)
    image = models.ImageField(upload_to=url)
    cantidad = models.IntegerField(default=1)

    def save(self, force_insert=False, force_update=False, using=None,
             update_fields=None):
        is_new = self._state.adding
        if is_new:
            self.id = 'c_' + ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(5))
        return super(Shoes, self).save(force_insert, force_update, using, update_fields)

    def __str__(self):
        return self.title


class Activity(models.Model):
    title = models.CharField(max_length=50)
    category = models.CharField(max_length=20)
    price = models.FloatField(null=True)
    shoe = models.ForeignKey(Shoes, on_delete=models.CASCADE, related_name='activities')