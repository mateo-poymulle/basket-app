from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, generics
from rest_framework.decorators import api_view, permission_classes, action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from api.models import Shoes, Activity
from api.serializers import ShoesSerializer, RegisterSerializer, MeSerializer, ActivitySerializer


class ShoesViewSet(viewsets.ModelViewSet):
    serializer_class = ShoesSerializer
    queryset = Shoes.objects.all()

    def get_permissions(self):
        if self.action == 'list':
            # si la action es list utilizo estos permisos
            self.permission_classes = []
        else:
            # sino utilizo estos permisos
            self.permission_classes = []
        return super(ShoesViewSet, self).get_permissions()

    @action(methods=["GET"], detail=True)
    def another_route(self, request, pk):
        # al ser detail=True la ruta es del formato /courses/{id}/another_route/
        # y puedo usar self.get_object() para obtener la instancia del curso segun el id pasado
        shoes = self.get_object()
        return Response(ShoesSerializer(shoes).data, status=200)

    def create(self, request, *args, **kwargs):
        # do something before create course (via POST /courses/)
        response = super(ShoesViewSet, self).create(request, *args, **kwargs)
        # do something after create course (via POST /courses/)
        return response

class ActivityViewSet(viewsets.ModelViewSet):
    serializer_class = ActivitySerializer
    queryset = Activity.objects.all()

    def get_queryset(self):
        # sin el .all() el queryset devuelve siempre lo mismo (no se vuelve a ejecutar la query en la base de datos)
        # con el .all() hacemos que se reevalue en cada request, asi devuelve un resultado actualizado
        queryset = self.queryset.all()
        name = self.request.query_params.get('name')
        shoe_name = self.request.query_params.get('shoe_name')
        if name is not None:
            queryset = queryset.filter(name=name)
        if shoe_name is not None:
            queryset = queryset.filter(shoe__name=shoe_name)
        return queryset


class RegisterView(generics.CreateAPIView):
    serializer_class = RegisterSerializer

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def me(request):
    return Response(MeSerializer(request.user).data, 200)
