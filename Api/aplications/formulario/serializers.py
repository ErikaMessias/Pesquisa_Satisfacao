from rest_framework import serializers
from .models import Aluno, Perguntas, Satisfacao, Importancia, Formulario

class Alunoserializer(serializers.ModelSerializer):
    class Meta:
        model=Aluno
        fields='__all__'

class Perguntaserializer(serializers.ModelSerializer):
    class Meta:
        model=Perguntas
        fields='__all__'

class Satisfacaoserializer(serializers.ModelSerializer):
    class Meta:
        model=Satisfacao
        fields='__all__'

class Importanciaserializer(serializers.ModelSerializer):
    class Meta:
        model=Importancia
        fields='__all__'

class Formularioserializer(serializers.ModelSerializer):
    Aluno=Alunoserializer(read_only=True, many=True)
    Pergunta=Perguntaserializer(read_only=True, many=True)
    Satisfacao=Satisfacaoserializer(read_only=True, many=True)
    Importancia=Importanciaserializer(read_only=True, many=True)
    class Meta:
        model=Formulario
        fields='__all__'