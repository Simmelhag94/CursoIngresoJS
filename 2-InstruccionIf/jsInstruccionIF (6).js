function mostrar()
{
//tomo la edad  

    var laedad;

    laedad= edad.value;
    laedad= parseInt(laedad);

    if (laedad>17) {
        alert("usted es mayor de edad");
        }

    
   if (laedad<13 ) {
      alert("usted es niño"); 
     }

   if (laedad>12 && laedad<18) {
       
        alert("usted es adolescente");
    }  




}//FIN DE LA FUNCIÓN