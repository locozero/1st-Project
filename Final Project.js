let usuaario1 = 'Bryan';
let usuario2 = 'Carlos';
let usuario3 = 'Tayina';

function myFunction() {
    location.replace("https://www.w3schools.com")
  }

function capturar() {
    // obtenemos e valor por el numero de elemento
    var porElementos = document.forms["form1"].elements[0].value;
    // Obtenemos el valor por el id
    var porId = document.getElementById("nombres").value;
    // Obtenemos el valor por el id
    var porPassword = document.getElementById("password").value;
    // Obtenemos el valor por el Password
    var porNombre = document.getElementsByName("nombre")[0].value;
    // Obtenemos el valor por el tipo de tag
    var porTagName = document.getElementsByTagName("input")[0].value;
    // Obtenemos el valor por el nombre de la clase
    var porClassName = document.getElementsByClassName("formulario")[0].value;
/*    document.getElementById("resultado").innerHTML = " \
           Por Nombre: " + porNombre + " \
                 <br>Por Password: " + porPassword;
*/
                 if (porNombre == usuaario1) {
                    alert("Bienvenido Bryan");    
                    location.replace("proyectofinal.html");

                    } else if(porNombre == usuario2) {
                        alert("Bienvenido  Carlos");    
                        location.replace("proyectofinal.html");

                    } else if (porNombre == usuario3) {
                        alert ("Bienvenida Tayina");
                        location.href("proyectofinal.html");
        
                    } else{
                        alert ("No Autorizado")
                    } 

}

