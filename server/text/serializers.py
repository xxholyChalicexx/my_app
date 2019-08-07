from rest_framework import serializers
from .models import text

class textSerializer(serializers.ModelSerializer):
    name = serializers.CharField()
    class Meta:
        model = text
        fields = ('name',)