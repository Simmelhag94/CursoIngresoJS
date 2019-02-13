/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    
    var Sueldo;
    var Importe;



    Sueldo = importe.value;
    Sueldo = parseInt(Sueldo);
    Importe = parseInt(Importe);

    Importe = Sueldo - Sueldo* 25/100;

    resultado.value = Importe;


}
