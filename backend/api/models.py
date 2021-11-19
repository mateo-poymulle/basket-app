from django.db import models

# Create your models here.
from django.utils.safestring import mark_safe


def url(self, filename):
    ruta = "static/img/shoes/%s/%s"%(self.title, str(filename))
    return ruta

class Shoes(models.Model):

    def image_shoes(self):
        return mark_safe('<a href="/%s"><img src="/%s" width=50px height=50px /> </a> '%(self.image, self.image))

    title = models.CharField(max_length=50, null=True)
    category = models.CharField(max_length=20, null=True)
    price = models.FloatField(null=True)
    image = models.ImageField(upload_to=url)

    def __str__(self):
        return self.title


