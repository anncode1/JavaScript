
function mostrarTexto () {
	// body...

	/** Declaracion de elementos (etiquetas) **/
	var inputNombre 		= document.getElementById('nombre');
	var textAreaDireccion 	= document.getElementById('direccion');
	var selectOpcionColor	= document.getElementById("opcionColor");
	
	/** Obtención de datos **/
	var nombre 		= inputNombre.value;
	var direccion 	= textAreaDireccion.value;

	var indiceElementoColor 	= selectOpcionColor.selectedIndex;
	var opcionSeleccionadaColor = selectOpcionColor.options[indiceElementoColor];
	var color 					= opcionSeleccionadaColor.text;

	var etiquetaDiv = document.getElementById("resultadoForm");
	
	var html = "<p>"+
					"<strong>Nombre: </strong> " + nombre + 
			   "</p>" + 
			   "<p>"+
			   		"<strong>Direccion: </strong> " + direccion + 
			   "</p>" +
			   "<p>"+
			   		"<strong>Color: </strong> " + color + 
			   "</p>"
				;
	etiquetaDiv.innerHTML = html;

}