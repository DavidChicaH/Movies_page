var nombrre = document.getElementById("name");
var apellidos = document.getElementById("Apellidos");
var Correo = document.getElementById("e-mail");
var Contraseña = document.getElementById("Password1");
var Reppass = document.getElementById("Password2");
var pais = document.getElementById("Country");
var tipodoc = document.getElementById("typedoc");
var numdoc = document.getElementById("documento");
var tel = document.getElementById("celular");

function regis(){
    if( document.forms.Contraseña.value == document.forms.Reppass.value){
        alert("coincide");

    }else{
        alert("no coincide");
    }
}

