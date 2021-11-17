from .serializers import Empresaserializer, Turmaserializer
from .models import Empresa, Turma
from rest_framework import viewsets


class EmpresaApi(viewsets.ModelViewSet):
    queryset = Empresa.objects.all()
    serializer_class = Empresaserializer


class TurmaApi(viewsets.ModelViewSet):
    queryset = Turma.objects.all()
    serializer_class = Turmaserializer
