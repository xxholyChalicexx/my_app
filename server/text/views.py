from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import textSerializer
from .models import text

class textAPI(APIView):

    def get(self, request):
        key_word = request.GET['word']
        texts = text.objects.filter(name__contains=key_word)[:25]
        serializer = textSerializer(texts, many=True)
        return Response({"texts":serializer.data})
        