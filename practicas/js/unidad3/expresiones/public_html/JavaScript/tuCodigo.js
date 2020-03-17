/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function funcion1(){
    //Creación de variables
    var cadena;
    
    //Crea la variable y le asigna un id para el html
    var parrafo = document.getElementById("parrafo");
    
    //Pide la cadena
    cadena= prompt("Introduzca dirección de correo: ");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(cadena)){
   alert("La dirección de email " + cadena + " es correcta.");
  } else {
   alert("La dirección de email es incorrecta.");
  }
}