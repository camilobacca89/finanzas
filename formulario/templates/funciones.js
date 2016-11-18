// Variables para setear
onload=function() 
{
	cAyuda=document.getElementById("mensajesAyuda");
	cNombre=document.getElementById("ayudaTitulo");
	cTex=document.getElementById("ayudaTexto");
	divTransparente=document.getElementById("transparencia");
	divMensaje=document.getElementById("transparenciaMensaje");
	form=document.getElementById("formulario");
	urlDestino="mail.php";
	
	claseNormal="input";
	claseError="inputError";
	  
	ayuda=new Array();
	ayuda["Fecha Calificacion"]="Ingresa una fecha de calificacion de tu estudiante.                   formato mm/dd/aaaa. OBLIGATORIO";
	ayuda["GRAMA"]="Evalue la gramatica entre 1 y 10.";
	ayuda["PCPS"]="Evalue el pcps entre 1 y 10.";
	ayuda["ROLE"]="Evalue el Role entre 1 y 10.";
	ayuda["ENTRE"]="Evalue la Entrevista entre 1 y 10. ";
	ayuda["Participacion"]="Evalue la Participacion entre 1 y 10.";
	ayuda["Asistencia"]="Evalue la Asistencia reduciendo una decima por cada minuto de atraso .OBLIGATORIO ";
	ayuda["Comportamiento"]="Evalue el Comportamiento entre 1 y 10.OBLIGATORIO";
	ayuda["Control_de_Asistencia"]="Seleccione del menu desplegable. OBLIGATORIO";
	
	
	ayuda["Fecha Inicio"]="Seleccion la fecha del calendario que se despliegue, en caso de no desplegar coloque la fecha con el formato mm/dd/aaaa. OBLIGATORIO";
	ayuda["Nombres"]="Escriba sus Nombres tal cual aparecen en su documento de identificacion.";
	ayuda["Apellidos"]="Escriba sus Apellidos tal cual aparecen en su documento de identificacion.";
	ayuda["Identificacion"]="Escriba su Identificacion tal cual aparecen en su documento.";
	ayuda["Genero"]="Clic en el circulo correspondiente a su genero.";
	ayuda["Fecha Nacimiento"]="Seleccione su fecha de nacimiento del calendario que se despliegue, en caso de no desplegar coloque la fecha con el formato mm/dd/aaaa. ";
	ayuda["Edad"]="No escriba nada, unicamente de clic en el boton Dar Edad y la edad se dara automaticamente.";
	ayuda["Colegio"]=" Seleccione de la lista desplegable el instituto en el que se encuentra estudiando, si no aparece el instituto seleccione SIN INFORMACION.";
	ayuda["Grado"]="Seleccione de la lista desplegable el grado que esta cursando, si no aparece seleccione SIN INFORMACION.OBLIGATORIO";
	ayuda["Profesion"]="Coloque su profesion, si no tiene ninguna escriba ESTUDIANTE. OBLIGATORIO";
	ayuda["Celular"]="Seleccione el indicativo de su operador y en el escriba los 7 digitos restantes de su telefono celular, sin espacion, ni caracteres especiales. OBLIGATORIO";
    ayuda["Direccion"]="Escriba su direccion de residencia, donde se pueda ubicar o enviarle correspondencia. OBLIGATORIO";
	ayuda["Estrato"]="Seleccione de la lista desplegable su estrato, en caso de que no aparezca seleccion SIN INFORMACION. OBLIGATORIO";
	ayuda["EPS_SALUD"]="Seleccione de la lista desplegable la entidad de salud que le suministra su atencion medica, si no tiene seleccion SIN INFORMACION. OBLIGATORIO";
	ayuda["Correo"]="Escriba su correo en el cual desea recibir informacion.Escriba un formato valido. OBLIGATORIO";
	
	
	ayuda["Fecha Corte"]="Seleccion la fecha del calendario que se despliegue, en caso de no desplegar coloque la fecha con el formato mm/dd/aaaa. Esta fecha hace referencia al dia que el estudiante debe efectuar su pago.OBLIGATORIO";
	ayuda["Forma de Pago"]="Clic en el circulo: CONTADO si el estudiante ha cancelado el programa en su totalidad o CREDITO en caso contrario";
	ayuda["Numero de Cuotas"]="Seleccione y deslice el cursor hasta llegar al numero de cuotas aprobadas en el credito al Estudiante.Si no lo sabe comuniquese con la Administracion.";
	ayuda["Valor Cuota"]="Escriba la cantidad mensual que el estudiante debe pagar.Si no lo sabe comuniquese con la Administracion";
	

	
	preCarga("ok.gif", "loading.gif", "error.gif");
}

function preCarga()
{
	imagenes=new Array();
	for(i=0; i<arguments.length; i++)
	{
		imagenes[i]=document.createElement("img");
		imagenes[i].src=arguments[i];
	}
}

function nuevoAjax()
{ 
	var xmlhttp=false; 
	try 
	{ 
		// No IE
		xmlhttp=new ActiveXObject("Msxml2.XMLHTTP"); 
	}
	catch(e)
	{ 
		try
		{ 
			// IE 
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); 
		} 
		catch(E) { xmlhttp=false; }
	}
	if (!xmlhttp && typeof XMLHttpRequest!="undefined") { xmlhttp=new XMLHttpRequest(); } 
	return xmlhttp; 
}

function limpiaForm()
{
	for(i=0; i<=4; i++)
	{
		form.elements[i].className=claseNormal;
	}
	document.getElementById("inputComentario").className=claseNormal;
}

function campoError(campo)
{
	campo.className=claseError;
	error=1;
}

function ocultaMensaje()
{
	divTransparente.style.display="none";
}

function muestraMensaje(mensaje)
{
	divMensaje.innerHTML=mensaje;
	divTransparente.style.display="block";
}

function eliminaEspacios(cadena)
{
	// Funcion para eliminar espacios delante y detras de cada cadena
	while(cadena.charAt(cadena.length-1)==" ") cadena=cadena.substr(0, cadena.length-1);
	while(cadena.charAt(0)==" ") cadena=cadena.substr(1, cadena.length-1);
	return cadena;
}

function validaLongitud(valor, permiteVacio, minimo, maximo)
{
	var cantCar=valor.length;
	if(valor=="")
	{
		if(permiteVacio) return true;
		else return false;
	}
	else
	{
		if(cantCar>=minimo && cantCar<=maximo) return true;
		else return false;
	}
}

function validaCorreo(valor)
{
	var reg=/(^[a-zA-Z0-9._-]{1,30})@([a-zA-Z0-9.-]{1,30}$)/;
	if(reg.test(valor)) return true;
	else return false;
}

function validaForm()
{
	limpiaForm();
	error=0;
	
	var nombre=eliminaEspacios(form.inputNombre.value);
	var empresa=eliminaEspacios(form.inputEmpresa.value);
	var telefono=eliminaEspacios(form.inputTelefono.value);
	var correo=eliminaEspacios(form.inputCorreo.value);
	var comentarios=eliminaEspacios(form.inputComentario.value);
	
	if(!validaLongitud(nombre, 0, 4, 50)) campoError(form.inputNombre);
	if(!validaLongitud(empresa, 1, 4, 50)) campoError(form.inputEmpresa);
	if(!validaLongitud(telefono, 1, 4, 50)) campoError(form.inputTelefono);
	if(!validaCorreo(correo)) campoError(form.inputCorreo);
	if(!validaLongitud(comentarios, 0, 5, 500)) campoError(form.inputComentario);
	
	if(error==1)
	{
		var texto="<img src='error.gif' alt='Error'><br><br>Error: revise los campos en rojo.<br><br><button style='width:45px; height:18px; font-size:10px;' onClick='ocultaMensaje()' type='button'>Ok</button>";
		muestraMensaje(texto);
	}
	else
	{
		var texto="<img src='loading.gif' alt='Enviando'><br>Enviando. Por favor espere.<br><br><button style='width:60px; height:18px; font-size:10px;' onClick='ocultaMensaje()' type='button'>Ocultar</button>";
		muestraMensaje(texto);
		
		var ajax=nuevoAjax();
		ajax.open("POST", urlDestino, true);
		ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajax.send("nombre="+nombre+"&empresa="+empresa+"&telefono="+telefono+"&correo="+correo+"&comentarios="+comentarios);
		
		ajax.onreadystatechange=function()
		{
			if (ajax.readyState==4)
			{
				var respuesta=ajax.responseText;
				if(respuesta=="OK")
				{
					var texto="<img src='ok.gif' alt='Ok'><br>Gracias por su mensaje.<br>Le responderemos a la brevedad.<br><br><button style='width:45px; height:18px; font-size:10px;' onClick='ocultaMensaje()' type='button'>Ok</button>";
				}
				else var texto="<img src='error.gif'><br><br>Error: intente más tarde.<br><br><button style='width:45px; height:18px; font-size:10px;' onClick='ocultaMensaje()' type='button'>Ok</button>";
				
				muestraMensaje(texto);
			}
		}
	}
}

// Mensajes de ayuda

if(navigator.userAgent.indexOf("MSIE")>=0) navegador=0;
else navegador=1;

function colocaAyuda(event)
{
	if(navegador==0)
	{
		var corX=window.event.clientX+document.documentElement.scrollLeft;
		var corY=window.event.clientY+document.documentElement.scrollTop;
	}
	else
	{
		var corX=event.clientX+window.scrollX;
		var corY=event.clientY+window.scrollY;
	}
	cAyuda.style.top=corY+20+"px";
	cAyuda.style.left=corX+15+"px";
}

function ocultaAyuda()
{
	cAyuda.style.display="none";
	if(navegador==0) 
	{
		document.detachEvent("onmousemove", colocaAyuda);
		document.detachEvent("onmouseout", ocultaAyuda);
	}
	else 
	{
		document.removeEventListener("mousemove", colocaAyuda, true);
		document.removeEventListener("mouseout", ocultaAyuda, true);
	}
}

function muestraAyuda(event, campo)
{
	colocaAyuda(event);
	
	if(navegador==0) 
	{ 
		document.attachEvent("onmousemove", colocaAyuda); 
		document.attachEvent("onmouseout", ocultaAyuda); 
	}
	else 
	{
		document.addEventListener("mousemove", colocaAyuda, true);
		document.addEventListener("mouseout", ocultaAyuda, true);
	}
	
	cNombre.innerHTML=campo;
	cTex.innerHTML=ayuda[campo];
	cAyuda.style.display="block";
}