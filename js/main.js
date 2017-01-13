// Para los inputs
document.getElementById("inputEmail").value="";
document.getElementById("inputEmail").placeholder="Correo Electrónico";

document.getElementById("inputPassword").value="";
document.getElementById("inputPassword").placeholder="Contraseña";

// Para el titulo
var h2= document.getElementById("form-signin-heading");
h2.innerHTML='<h2>Por favor inicia sesión</h2>';

// Para el span de remenber me 
document.getElementsByTagName("SPAN")[0].innerHTML = "Recordar datos";

// Para el button
document.getElementsByTagName("BUTTON")[0].innerHTML= "Iniciar Sesión"