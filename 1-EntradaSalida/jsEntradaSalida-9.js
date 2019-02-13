/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

    var Sueldo;
    var Importe;



    Sueldo = sueldo.value;
    Sueldo = parseInt(Sueldo);
    Importe = parseInt(Importe);

    Importe = Sueldo + Sueldo* 10/100;

    resultado.value = Importe;



}
