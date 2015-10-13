//Variables globales
var impuestos 	= 1.15;
var gastosEnvio = 10;

function calcularPrecioTotal(precio){
	//todo lo que la funcion hace
	var precioTotal = (precio * impuestos) + gastosEnvio;
	return precioTotal.toFixed(2);
}

function calcularPrecioSinImpuestos (precio) {
	// body...
	var precioTotalSinImpuestos = precio + gastosEnvio;
	return precioTotalSinImpuestos;
}

function calcularParImpar(numeroEntero){
	var mensaje = "";
	var r = numeroEntero % 2;
	//si es par el r es 0
	//si es impar el r diferente de 0
	if (r == 0) {
		mensaje = "El numero "+numeroEntero+" es un numero par";
	}else{
		mensaje = "El numero "+numeroEntero+" es un numero impar";
	}

	return mensaje;
}

//LLamando a calcularPrecioTotal
console.log("Precio Total: " + calcularPrecioTotal(100));
console.log("Precio Total Sin Impuestos: " + calcularPrecioSinImpuestos(100));
console.log(calcularParImpar(4));




