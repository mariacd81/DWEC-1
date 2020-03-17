/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var miVentana;

function abrir(){
    miVentana = open("Colores.html","_blank","width=500px,height=500px");
    console.log(miVentana.location.pathname);
}

function recibir(){
    console.log(event.data);
}

function cargar(){
    
    var btnFondo = document.getElementById("btnAbrirFondo");
    //Añadir el evento
    btnFondo.addEventListener("click", abrir, false);
    
    var btnLetra = document.getElementById("btnAbrirLetra");
    //Añadir el evento
    btnLetra.addEventListener("click", abrir, false);
    
    window.addEventListener("message",recibir,false);
}

window.addEventListener("load",cargar,false);


