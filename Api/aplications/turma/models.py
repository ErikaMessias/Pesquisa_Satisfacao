from django.db import models

from ..empresa.models import Empresa

class Turma(models.Model):
    turmaid=models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=50)
    id_empresa = models.ForeignKey(Empresa, related_name="fk_empresa", on_delete=models.CASCADE)
      
    def __str__(self):
        return '%s' % self.nome