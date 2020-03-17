/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function funcion1(){
    //Declaración de párrafos asignados a ID
    var parrafo = document.getElementById("parrafo");
    var parrafo2 = document.getElementById("parrafo2");

    //Declaramos el array con los datos
    var dias = new Array('lunes','martes','miercoles','jueves','viernes','sabado','domingo');

    //Mostramos el array
    parrafo.innerHTML = "El array original es: " + dias;

    //Creamos una variable nueva para almacenar el array en String
    var cadena = dias.toString();
    
    //Usamos la función para String toUpperCase 
    parrafo2.innerHTML = "En mayúsculas: "+ cadena.toUpperCase();

}

function funcion2(){
    //Declaración de párrafos asignados a ID
    var parrafo = document.getElementById("parrafo");
    var cadena, cadena2, palabras;

    //Pedimos la cadena
    cadena = prompt("Introduzca una frase: ");
    
    //En la segunda cadena almacenamos la primera cadena dividida por los espacios
    cadena2 = cadena.split(" ");
    palabras = cadena2.length;
    parrafo.innerHTML="La frase tiene "+palabras+" palabras.";
}

function funcion3(){
    //Declaración de párrafos asignados a ID
    var parrafo = document.getElementById("parrafo");
    var parrafo2 = document.getElementById("parrafo2");
    var cadena, remplazado;
    
     //Pedimos la cadena
    cadena = prompt("Introduzca una frase: ");
    
    remplazado = cadena;
    parrafo.innerHTML="La frase original es: "+cadena;
    do{
        remplazado = remplazado.replace("a","@");
    }while(remplazado.includes("a"));
    do{
        remplazado = remplazado.replace("e","3");
    }while(remplazado.includes("e"));
    do{
        remplazado = remplazado.replace("o","0");
    }while(remplazado.includes("o"));


    parrafo2.innerHTML="La frase cambiada es: "+remplazado;
}

function funcion4(){
    //Declaración de párrafos asignados a ID
    var parrafo = document.getElementById("parrafo");
    var parrafo2 = document.getElementById("parrafo2");
    var cadena, remplazado;
    
     //Pedimos la cadena
    cadena = prompt("Introduzca una frase: ");
    
    remplazado = cadena;

    parrafo.innerHTML="La frase original es: "+remplazado;
    do{
        remplazado = remplazado.replace("a","");
    }while(remplazado.includes("a"));
    do{
        remplazado = remplazado.replace("e","");
    }while(remplazado.includes("e"));
    do{
        remplazado = remplazado.replace("i","");
    }while(remplazado.includes("i"));
    do{
        remplazado = remplazado.replace("o","");
    }while(remplazado.includes("o"));
    do{
        remplazado = remplazado.replace("u","");
    }while(remplazado.includes("u"));


    parrafo2.innerHTML="La frase cambiada es: "+remplazado;
}

function funcion5(){
    //Declaración de variables
    var fecha, fechaFormato;
    
    //Declaración de párrafos asignados a ID
    var parrafo = document.getElementById("parrafo");
    var parrafo2 = document.getElementById("parrafo2");
    var parrafo3 = document.getElementById("parrafo3");
    var parrafo4 = document.getElementById("parrafo4");
    
     //Pedimos la cadena
    fecha = prompt("Introduzca una fecha: (dd/mm/yyyy)");
    
    parrafo.innerHTML="La fecha original es: "+fecha;
    
    fechaFormato = fecha.split("/");
    
    parrafo2.innerHTML="El día es: "+fechaFormato[0];
    parrafo3.innerHTML="El mes es: "+fechaFormato[1];
    parrafo4.innerHTML="El año es: "+fechaFormato[2];
}

function funcion6(){
    //Declaración de variables
    var cadena1 = "Cocina para todos";
    var cadena2 = "La cocina a tu alcance";
    var cadena3 = "Descubre los platos más exquisitos, fáciles y económicos que puedas imaginar.";
    var cadena = "2";
    var cadena4 = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.";
    var cadena5 = "Adéntrate en los misterios de la cocina sin quemar más cacerolas ni llamar al pizzero";
    
    //Declaración de párrafos asignados a ID
    var parrafo = document.getElementById("parrafo");
    var parrafo2 = document.getElementById("parrafo2");
    var parrafo3 = document.getElementById("parrafo3");
    var parrafo4 = document.getElementById("parrafo4");
    var parrafo5 = document.getElementById("parrafo5");
    
    
    parrafo.innerHTML= cadena1.fontcolor("olive").fontsize(50);
    parrafo2.innerHTML= cadena2.fontcolor("olive");
    parrafo3.innerHTML= cadena3.fontcolor("red")+cadena.sup().fontcolor("red");
    //parrafo5.innerHTML=;
}