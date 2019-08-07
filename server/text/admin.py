from django.contrib import admin
from .models import text

@admin.register(text)
class textAdmin(admin.ModelAdmin):
    list_display=('name','number')