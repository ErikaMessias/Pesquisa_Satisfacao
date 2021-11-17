from .serializers import Formularioserializer, Importanciaserializer, Satisfacaoserializer, Perguntaserializer, \
    Alunoserializer
from .models import Aluno, Perguntas, Satisfacao, Importancia, Formulario

from rest_framework import viewsets


class FormularioApi(viewsets.ModelViewSet):
    queryset = Formulario.objects.all()
    serializer_class = Formularioserializer


class AlunoApi(viewsets.ModelViewSet):
    queryset = Aluno.objects.all()
    serializer_class = Alunoserializer


class PerguntaApi(viewsets.ModelViewSet):
    queryset = Perguntas.objects.all()
    serializer_class = Perguntaserializer


class SatisfacaoApi(viewsets.ModelViewSet):
    queryset = Satisfacao.objects.all()
    serializer_class = Satisfacaoserializer


class ImportanciaApi(viewsets.ModelViewSet):
    queryset = Importancia.objects.all()
    serializer_class = Importanciaserializer
