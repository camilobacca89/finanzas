from django.shortcuts import render, render_to_response
from django.core.urlresolvers import reverse
from django.core.paginator import Paginator, InvalidPage, EmptyPage
from formulario.models import *
import time
from calendar import month_name

from django.forms import ModelForm
from django.template.context_processors import csrf
from django.http import HttpResponseRedirect
# Create your views here.
def contabilidad(request,pk):
	idcontabilidad = Contabilidad.objects.get(pk=int(pk))
	return render_to_response("contabilidad.html",dict(elemento=idcontabilidad))
def main(request):
	contabilidad= Contabilidad.objects.all().order_by("-fecha_movimiento")
	paginator= Paginator(contabilidad,3)

	try:pagina = int(request.POST.get("page","1"))
	except ValueError: pagina=1
	
	try:
		entrada = paginator.page(pagina)
	except (InvalidPage,EmptyPage):
		entrada= Paginator.page(Paginator.num_pages)

	return render_to_response("contabilidad.html",dict(contabilidad=contabilidad))




