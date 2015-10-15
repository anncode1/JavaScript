var numero1 = 5;
var numero2 = 8;

if (numero1 <= numero2) {
	console.log("numero1 no  es mayor que numero2");
};

if (numero2 > 0) {
	console.log("numero2 es positivo");
};

if (numero1 < 0 || numero1 != 0) {
	console.log("numero1 es negativo o distinto de cero");
};

if (++numero1 < numero2) {
	console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
};

var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for(var i = 0; i<7; i++){
	console.log(dias[i]);
}

for(indice in dias){
	console.log(dias[indice]);
}

var numero = 8;

switch(numero){
	case 5:
		console.log(numero);
		break;
	case 8:
		console.log(numero);
		break;
	case 20:
		console.log(numero);
		break;
	default:
		console.log("Si nada conincidió");
		break;

}

















