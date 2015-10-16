var divInfo = document.getElementById("info");

function muestraInformacion (tituloEvento, xA,yA, xR, yR) {
	// body...
	
	var html = "<h1>"+tituloEvento+"</h1>"+
				"<p>Navegador ["+xR+","+yR+"]</p>"+
				"<p>Pagina ["+xA+","+yA+"]</p>";

	divInfo.innerHTML = html;
}

function muestraInformacionTeclado (tituloEvento, tecla) {
	// body...
	
	var html = "<h1>"+tituloEvento+"</h1>"+
				"<p>Tecla ["+tecla+"]</p>";
				

	divInfo.innerHTML = html;
}

function informacion(eventoCachado) {
	// body...
	//Si trabajo en cualquier navegador
	var evento = eventoCachado || window.event;
	switch(evento.type){
		case 'mousemove':
			var ie = navigator.userAgent.toLowerCase().indexOf('msie') != -1;
			var coordenadaXrelativa, coordenadaYrelativa;
			var coordenadaXabsoluta, coordenadaYabsoluta;
			if (ie) {
				coordenadaXabsoluta = evento.clientX + document.documentElement.scrollLeft;
				coordenadaYabsoluta = evento.clientY + document.documentElement.scrollTop;
			}else{
				coordenadaXabsoluta = evento.pageX;
				coordenadaYabsoluta = evento.pageY;
			}

			coordenadaXrelativa = evento.clientX;
			coordenadaYrelativa = evento.clientY;

			muestraInformacion("Ratón", coordenadaXabsoluta, coordenadaYabsoluta, coordenadaXrelativa, coordenadaYrelativa);
			divInfo.style.backgroundColor = '#FFFFFF';
		break;

		case 'keypress':
			var caracter = evento.charCode || evento.keyCode;
			var letra = String.fromCharCode(caracter);
			muestraInformacionTeclado("Teclado", letra);

			divInfo.style.backgroundColor = '#00BCD4';
		break;

		case 'click':
			//Colocando estilo CSS desde JS
			divInfo.style.backgroundColor = '#FFC107';
		break;

		default:
			console.log("Registre este evento: " + evento.type);
		break;
	}
}

document.onmousemove = informacion;
document.onkeypress = informacion;
document.onclick = informacion;

