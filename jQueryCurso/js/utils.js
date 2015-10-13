var a = 2;
var b = 3;
var e = 23.0;
var d = "mi variable: ";
var caracter = 'esto tambien es una cadena';
var mensaje1 = "Esto es un mensaje 'Hola mundo'";
var mensaje2 = 'Esto es un mensaje "Hola mundo"';
var mensaje3 = "Esto es un mensaje \"Hola mundo\"";
var mensaje4 = "Esto es un mensaje\t'Hola mundo'"
var mensaje5 = 'Esto es unmensaje \'Hola mundo\'';
var mensaje6 = "Esto es una barra \\";
//alert(mensaje6);
var c = d + a + b;

var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
var dias2 = new Array();
dias2.push("Lunes");
dias2.push("Martes");
//alert(dias2[1]);

var datoVerdadero 	= true;
var datoFalso	 	= false;
//alert(datoFalso);

var i = 0;
//Postfijo
//i++;  
//=> i = i+1;
//alert(i);//1

//Prefijo
++i; // => i = (+1) i
i = 0;
//alert(++i);//1


var valores = [true, 5, false, "hola", "adios", 2];

//1. Determinar cual de los dos elementos de texto mayor

var elemento1 = valores[3];
var elemento2 = valores[4];

var esMayorElemento1 = elemento1 > elemento2;
var esMayorElemento2 = elemento2 > elemento1;

console.log("Elemento 1: " + elemento1);
console.log("Elemento 2: " + elemento2);
console.log("Es mayor el elemento1: " + esMayorElemento1);
console.log("Es mayor el elemento2: " + esMayorElemento2);


//2. utilizar los valores booleanos y 
//ejecutar operaciones para obtener resultados 
//true/false

var valor1 = valores[0]; 
var valor2 = valores[2];

console.log("Valor booleano 1: " + valor1);
console.log("Valor booleano 2: " + valor2);

//NEGACION
console.log("NEGACION")
console.log("Negacion valor1: " + !valor1);
console.log("Negacion valor2: " + !valor2);

//AND
console.log("AND");
var operacioAND = valor1 && valor2;
console.log("La operacion valor1 && valor2 es: " + operacioAND );


//OR
console.log("OR")
var operacionOR = valor1 || valor2;
console.log("La operacion valor1 || valor2 es: " + operacionOR );


//3. Cinco Operaciones matematicas 
//Operacion suma +
var numero1 = valores[1]; //5
var numero2 = valores[5]; //2
var resultadoSuma = numero1 + numero2;
console.log("Resutlado Suma: " + resultadoSuma);

//Operacion resta -
var resultadoResta = numero1 - numero2;
console.log("Resutlado Resta: " + resultadoResta);

//Operacion multiplicacion *
var resultadoMultiplicacion = numero1 * numero2;
console.log("Resutlado Multiplicacion: " + resultadoMultiplicacion);

//Operacion div /
var resultadoDiv = numero1 / numero2;
console.log("Resutlado Div: " + resultadoDiv);

//Operacion Mod %
var resultadoMod = numero1 % numero2;
console.log("Resutlado Mod: " + resultadoMod);







