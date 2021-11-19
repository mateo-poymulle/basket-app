from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.models import Shoes
from api.serializers import ShoesSerializer, RegisterSerializer, MeSerializer


class ShoesViewSet(viewsets.ModelViewSet):
    serializer_class = ShoesSerializer
    queryset = Shoes.objects.all()


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):

    return Response(MeSerializer(request.user).data, 200)
