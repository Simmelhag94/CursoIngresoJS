/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primernumero;
	var segundonumero;
	var suma;

	primernumero = numeroUno.value;
	segundonumero = numeroDos.value;
	primernumero = parseInt(primernumero);
	segundonumero = parseInt(segundonumero);

	suma = primernumero+ segundonumero;
	alert("la Suma es: "+suma);



}


function restar()
{
	
	var primernumero;
	var segundonumero;
	var Resta;

	primernumero = numeroUno.value;
	segundonumero = numeroDos.value;
	primernumero = parseInt(primernumero);
	segundonumero = parseInt(segundonumero);

	Resta = primernumero- segundonumero;
	alert("la resta es: "+Resta);



}


function multiplicar()
{ 
	var primernumero;
	var segundonumero;
	var multiplicacion;

	primernumero = numeroUno.value;
	segundonumero = numeroDos.value;
	primernumero = parseInt(primernumero);
	segundonumero = parseInt(segundonumero);
	multiplicacion = primernumero * segundonumero;

	alert("la multiplicacion es: " +multiplicacion);

}


function dividir()
{
	
	var primernumero;
	var segundonumero;
	var division;

	primernumero = numeroUno.value;
	segundonumero = numeroDos.value;

	primernumero = parseInt(primernumero);
	segundonumero = parseInt(segundonumero);
	division = primernumero / segundonumero;

	alert("el resultado de la division es: " +division);

// el procentaje indica modulo o resto 

}
