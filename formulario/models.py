from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Conceptos(models.Model):
	concepto=models.CharField(max_length=100)

	def __str__(self):
		return self.concepto

class Contabilidad(models.Model):
	observacion=models.TextField()
	fecha_movimiento=models.DateTimeField(auto_now_add=True)
	entrada=models.IntegerField(null=True, blank=True)
	salida=models.IntegerField(null=True, blank=True)
	saldo_general=models.IntegerField(null=True, blank=True)
	idconcepto=models.ForeignKey(Conceptos)
	
	def __str__(self):
		return str(self.idconcepto)
		

		