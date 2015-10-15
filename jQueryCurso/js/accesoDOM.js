//TRAIGO UNO O VARIOS ELEMENTOS A PARTIR DE SU ETIQUETA
var parrafos = document.getElementsByTagName("p");
//console.log(parrafos);
for(i in parrafos){
	var p = parrafos[i];
	
}

//TRAIGO UNO O VATIOS ELEMENTOS A PARTIR DE SU ATRIBUTO name
var parrafo1 = document.getElementsByName("parrafo1");
console.log(parrafo1);
var radioButton = document.getElementsByName("decision");
console.log(radioButton);


//TRAIGO UNO Y SOLO UN ELEMENTO A PARTIR DE SU id
var miParrafo = document.getElementById("id_parrafo1");
console.log(miParrafo);