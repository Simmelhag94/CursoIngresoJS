function mostrar()
{
//tomo la edad  

    var laedad;
    var estado;

    laedad = edad.value;
    estado = estadoCivil.value;
    laedad = parseInt(laedad);

    if (laedad>18) {
        
    }
        else{
            if (estado == "Casado" || estado == "Divorciado") {
                
                alert("usted es muy joven para no estar soltero");
            }

            }

}//FIN DE LA FUNCIÓN