/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var miXHR;

function conectar(){
    //Evaluar que hay una instancia del objeto
    if(miXHR){
        /*Abrimos la petición con los siguientes valores:
        GET o POST
        URL del servidor
        TRUE si es asíncrono y false si es síncrono
        
        miXHR.open("GET","fecha.php",true);*/
        
        /*var url;
        var valorInput = document.getElementById("numero").value;
        url = "fecha.php?numero=" + valorInput;
        miXHR.open("GET",url,true);*/
        
        //PARA ENVIAR POR POST
        var url;
        var valorInput = document.getElementById("numero").value;
        miXHR.open("POST","fecha.php",true);
        miXHR.setRequestHeader("Content-type","application/x-www-form-urlencoded") ;
        
        //Cada vez que hay un evento llama a la función
        miXHR.onreadystatechange = cambio;
        
        /*Qué queremos enviar
        GET envía NULL
        POST envía los parámetros*/
        miXHR.send("numero="+valorInput);
    }else{
        alert("No existe un objeto del tipo XHR");
    }
}

function cambio(){
    console.log(this.readyState);
    console.log(this.responseText);
    console.log(this.status);
    
    //Si hay respuesta del servidor es un 4
    //Si ha sido satisfactoria es 200
    if(this.readyState == 4 && this.status == 200){
        var p = document.getElementById("respuesta");
        p.innerHTML = "La fecha en el servidor es: "+this.responseText;
    }
}


function cargar(){
   //Crear el objeto de Ajax
   miXHR = new XMLHttpRequest();
   
   //Iniciar que se haya pulsado el botón
   var boton = document.getElementById("conectar");
   boton.addEventListener("click",conectar,false);
}

window.addEventListener("load",cargar, false);