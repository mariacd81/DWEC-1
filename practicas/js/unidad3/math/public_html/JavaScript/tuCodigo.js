/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function funcion1(){
    
    

}

function funcion2(){
    //Creación de variables
    var a, b, c, res1, res2;
    
    //Crea la variable y le asigna un id para el html
    var parrafo = document.getElementById("parrafo");
    var parrafo2 = document.getElementById("parrafo2");
    var parrafo3 = document.getElementById("parrafo3");
    
    //Valida la entrada de datos
    var bien = true;
    do {
        bien = true;
        a = (prompt("Introduzca primer número"));
        b = (prompt("Introduzca segundo número"));
        c = (prompt("Introduzca tercer número"));
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            bien = false;
            alert("Datos no válidos. Debe introducir numeros.");
        }
    } while (bien === false);
    
    //La función sqrt() hace la raíz cuadrada del parámetro que le pasemos
    //La función pow() eleva el primer parámetro al segundo, en este caso sería b elevado al cuadrado
    res1 = (-b+(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
    res2 = (-b-(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
    
    //Mostramos los resultados en el html
    parrafo.innerHTML = "Ecuación: " + a + "x" + "2".sup() + " + " + b + "x + " + c + " = 0";
    parrafo2.innerHTML = "Resultado de la ecuación positiva: " + res1;
    parrafo3.innerHTML = "Resultado de la ecuación negativa: " + res2;


}

function funcion3(){  
    //Creación de variables
    var radio;

    //Crea la variable y le asigna un id para el html
    var parrafo = document.getElementById ("parrafo");       
    var parrafo2 = document.getElementById ("parrafo2");
    var parrafo3 = document.getElementById ("parrafo3");
    
    //Pide los números
    radio= prompt("Introduzca radio de la circunferencia: ");
 
    if(isNaN(radio)){//si no es un número te salta el error
        parrafo.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO";
    }else{//si es un número continua la operación
        parrafo.innerHTML="El radio introducido es: "+radio; //Mostramos los resultados
        parrafo2.innerHTML="El diámetro de la circunferencia es: "+ radio*2;
        //La función pow() eleva el primer parámetro al segundo
        parrafo3.innerHTML="El área de la circunferencia es: "+(Math.PI*Math.pow(radio,2)); //PI devuelve el valor de pi
    }
}

function funcion4(){  
    //Creación de variables
    var cat1, cat2;

    //Crea la variable y le asigna un id para el html
    var parrafo = document.getElementById ("parrafo");       
    var parrafo2 = document.getElementById ("parrafo2");
    var parrafo3 = document.getElementById ("parrafo3");
    
    //Pide los números
    cat1= prompt("Introduzca cateto: ");
 
    if(isNaN(cat1)){//si no es un número te salta el error
        parrafo.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO";
    }else{//si es un número continua la operación
        cat2= prompt("Introduzca cateto: ");
        if(isNaN(cat2)){//si no es un número te salta el error
            parrafo.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO";
        }else{
            parrafo.innerHTML="El primer cateto introducido es: "+cat1; //Mostramos los resultados
            parrafo2.innerHTML="El segundo cateto introducido es: "+cat2;
            //La función pow() eleva el primer parámetro al segundo
            parrafo3.innerHTML="La hipotenusa del triángulo es: "+ (Math.pow(cat1,2)+ Math.pow(cat2,2));
        }
    }
}

function funcion5(){  
    //Creación de variables
    var num, array;

    //Crea la variable y le asigna un id para el html
    var parrafo = document.getElementById ("parrafo");       
    var parrafo2 = document.getElementById ("parrafo2");
    var parrafo3 = document.getElementById ("parrafo3");
    
    //Creamos el array y le indicamos el tamaño
    array=new Array(10);
        
    //pedir por pantalla introducir los elementos en el array
    for(var i = 0; i<10; i++){//el for te recorre todo el array posicion por posicion
        num=parseInt(prompt("Introduce número: ")); //Pide los elementos
        array[i]=num; //Los va introduciendo en el array
    }

    parrafo.innerHTML="Los números introducidos son: "+ array; //te muestra el array completo
    //Las funciones min() y max() muestran el valor más pequeño y el más grande introducidos
    //Al tratarse de un array hay que poner ...delante del nombre
    parrafo2.innerHTML="El menor número introducido es: "+ Math.min(...array); 
    parrafo3.innerHTML="El mayor número introducido es: "+ Math.max(...array);
}