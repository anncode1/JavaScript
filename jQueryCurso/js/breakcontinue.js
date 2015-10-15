var cadena = "En un lugar de la Mancha de cuyo nombre no quiero acordarme...";
var letras = cadena.split("");
var resultado = "";

for(i in letras){
	if (letras[i] == 'a') {
		break;
		console.log("un mensaje");
	}else{
		resultado += letras[i];
		//resultado = resultado + letras[i];
	}
}

console.log("Usando un break imprimo esto: \n" + resultado);//En un lug

resultado = "";
for(i in letras){
	if (letras[i] == 'a') {
		continue;
		console.log("un mensaje");
		console.log("un mensaje");
		console.log("un mensaje");
	}else{
		resultado += letras[i];
		//resultado = resultado + letras[i];
	}
}
console.log("Usando un continue imprimo esto: \n" + resultado);


