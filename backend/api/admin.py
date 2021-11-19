from django.contrib import admin

from api.models import Shoes

class ShoeAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'price', 'image_shoes')


admin.site.register(Shoes, ShoeAdmin)
