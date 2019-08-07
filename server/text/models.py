from django.db import models

class text(models.Model):
    name = models.CharField(max_length=100)
    number = models.IntegerField()

