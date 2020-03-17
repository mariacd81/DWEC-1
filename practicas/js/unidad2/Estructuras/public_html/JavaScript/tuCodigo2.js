/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function funcion1(){
    
    //Creación de variables
    
    var edad1;
    var edad2;
    //Crea la variable y le asigna un id para el html
    var parrafo = document.getElementById ("parrafo");       
    var parrafo2 = document.getElementById ("parrafo2");
    var parrafo3 = document.getElementById ("parrafo3");
    var parrafo4 = document.getElementById ("parrafo3");
    
    //Pide los números
    edad1= prompt("Introduzca una edad: ");
    
    if(isNaN(edad1)){ //Comprueba que lo que se ha introducido es un número
        parrafo.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO"; //Mensaje que se muestra por pantalla en caso de que no se haya introducido un número
    }else{
        edad2= prompt("Introduzca otra edad: "); //Si se ha introducido un número, el programa pide el siguiente número
        if(isNaN (edad2)){ //Comprueba que este también sea un número
            parrafo.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO";
        }else{ //Si los datos introducidos son correctos el programa sigue ejecutándose
           if(edad1<edad2){ //Compara las dos edades
                parrafo2.innerHTML = ("La segunda edad es mayor que la primera."); //Si la primera edad es menor que la segunda, se muestra este mensaje
                parrafo.innerHTML = ("Las edades introducidas son: "+edad1+" y "+edad2); //Muestra las dos edades
            }else if(edad1>edad2){ //Si la primera edad es mayor que la segunda, se muestra este mensaje
                parrafo3.innerHTML =("La primera edad es mayor que la segunda."); 
                parrafo.innerHTML = ("Las edades introducidas son: "+edad1+" y "+edad2); //Muestra las dos edades
            }else{ //Si las dos edades son iguales se muestra esto
                parrafo4.innerHTML =("Las edades son iguales."); 
                parrafo.innerHTML = ("Las edades introducidas son: "+edad1+" y "+edad2); //Muestra las dos edades
            }
        }   
    }
}

function funcion2(){
    
    //Creación de variables
    
    var numero1;
    var numero2;
    var numero3;
    
    //Crea la variable y le asigna un id para el html
    var parrafo = document.getElementById ("parrafo");       
    var parrafo2 = document.getElementById ("parrafo2");
    var parrafo3 = document.getElementById ("parrafo3");
    var parrafo4 = document.getElementById ("parrafo4");
    
    //Pide los números
    numero1= prompt("Introduzca un numero");
    
    if(isNaN(numero1)){ //Comprueba que lo que se ha introducido es un número
        parrafo.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO"; //Mensaje que se muestra por pantalla en caso de que no se haya introducido un número
    }else{
        numero2= prompt("Introduzca otro numero"); //Si se ha introducido un número, el programa pide el siguiente número
        if(isNaN (numero2)){ //Comprueba que este también sea un número
            parrafo.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO";
        }else{ //Se pide el tercer número
            numero3= prompt("Introduzca otro numero");
           if(isNaN (numero3)){ //Se comprueba que esté bien
                parrafo.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO";
            }else{ //Si los datos introducidos son correctos el programa sigue ejecutándose
                if(numero1 === numero2 && numero1 === numero3 && numero2 === numero3){ //Comprueba si los tres números son iguales
                    parrafo2.innerHTML = ("Los tres números son iguales.");
                    parrafo.innerHTML = ("Los números introducidos son: "+numero1+", "+numero2+" y "+numero3); // Muestra los tres números
                }else if(numero1 === numero2 || numero1 === numero3 || numero2 === numero3){ //Comprueba si al menos dos de ellos son iguales
                    parrafo3.innerHTML =("Dos de los números son iguales.");
                    parrafo.innerHTML = ("Los números introducidos son: "+numero1+", "+numero2+" y "+numero3); // Muestra los tres números
                }else{ //En caso de que ninguno de los tres sean iguales
                    parrafo4.innerHTML=("Ninguno de los números son iguales.");
                    parrafo.innerHTML = ("Los números introducidos son: "+numero1+", "+numero2+" y "+numero3); // Muestra los tres números
                }
            }
        }
    }
}

function funcion3(){
    
    //Creación de variables
    
    var num;
    var i;
    
    //Crea la variable y le asigna un id para el html
    var parrafo = document.getElementById ("parrafo");

    //Pide los números
    num= prompt("Introduzca un numero");
    
    if(isNaN(num)){ //Comprueba que lo que se ha introducido es un número
        parrafo.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO"; //Mensaje que se muestra por pantalla en caso de que no se haya introducido un número
    }else{//Si los datos introducidos son correctos el programa sigue ejecutándose
        for (i=0;i<=10;i++) { 
            parrafo.innerHTML +=num +" x "+i+" = "+num*i+ "<br>"; //Con el bucle FOR repetimos esta operación 10 veces
        }
    }
}

function funcion4(){
    
    //Creación de variables
    var filas = 7;
    var parrafo = document.getElementById ("parrafo"); 
    
    for (var i=1;i<=filas;i+=2) { //Creamos un bucle FOR 
        parrafo.innerHTML += ""+"<br>";
        for ( var j=1;j<=(filas-i)*2;j+=2){
            parrafo.innerHTML += "&nbsp";
        }
        for(var k=1; k<=i; k++){
            parrafo.innerHTML += "*";
        }
    }
}

function funcion5(){
    var fila;

 //Creación de la variable identifico p con el id       
    var parrafo1 = document.getElementById ("parrafo1");  

 //Petición de los números
   fila = parseInt(prompt ("Introduzca un número: "));

  //Visualización de las operaciones          

    for(var i=1; i<= fila; i++){
        for(var j=1; j<=(fila-i)*2; j++){
            parrafo1.innerHTML += "&nbsp";
        }
        for(var k=1; k<i*2; k++){
            parrafo1.innerHTML += "*";
        }
            parrafo1.innerHTML += "<br>";    
    }
        
    for(var i=fila-1; i>=1; i--){
        for(var j=1; j<=(fila-i)*2; j++){
            parrafo1.innerHTML += "&nbsp";
        }
        for(var k=1; k<i*2; k++){
            parrafo1.innerHTML += "*";
        }
            parrafo1.innerHTML += "<br>";    
    }
}

function funcion6(){
    var fila;
      
    //Creación de la variable identifico p con el id       
    var parrafo1 = document.getElementById ("parrafo1");  
            
    //Petición de los números
    fila = parseInt(prompt ("Introduzca un número: "));
                               
     //Visualización de las operaciones          
               
    for(var i=1; i<= fila; i++){
        for(var j=1; j<=(fila-i)*2; j++){
            parrafo1.innerHTML += "&nbsp";
        }
        for(var k=1; k<=i*2; k++){
            if(k === 1 || k === (2 * i) - 1){
                parrafo1.innerHTML += "*";
            }else{
                parrafo1.innerHTML += "&nbsp;&nbsp";
            }
            }
        parrafo1.innerHTML += "<br>";
    }       
    for(var i=fila-1; i>=1; i--){
        for(var j=1; j<=(fila-i)*2; j++){
            parrafo1.innerHTML += "&nbsp";
        }
        for(var k=1; k<=i*2; k++){
            if(k === 1 || k === (2 * i) - 1){
                 parrafo1.innerHTML += "*";
            }else{
                parrafo1.innerHTML += "&nbsp;&nbsp";    
            }
        }
        parrafo1.innerHTML += "<br>";
    }
}

function funcion7(){
    
    //Creación de variables
    
    var num, n1,n2,n3;
    //Crea la variable y le asigna un id para el html
    var parrafo = document.getElementById ("parrafo");
    var parrafo2 = document.getElementById ("parrafo2");
    var parrafo3 = document.getElementById ("parrafo3");
    //Pide los números
    num= parseInt(prompt("Introduzca un número: "));
    
    if(isNaN(num)){ //Comprueba que lo que se ha introducido es un número
        parrafo.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO"; //Mensaje que se muestra por pantalla en caso de que no se haya introducido un número
    }else{//Si los datos introducidos son correctos el programa se sigue ejecutando
       while(num<100 || num>999){ //Bucle que repite la operación mientras el número introducido tenga tres cifras
       num= parseInt(prompt("Introduzca un número: ")); 
        }
        
        //Separamos las tres cifras del número introducido
        n1=parseInt(num / 100);
        n2=parseInt(num % 100 / 10);
        n3=parseInt(num % 100 % 10);

        //Las mostramos
        parrafo.innerHTML = (num + "  "+n1+"   "+n2+"   "+n3);

        if(num === ((n1*n1*n1)+(n2*n2*n2)+(n3*n3*n3))){ //Si al elevar al cubo los tres números y sumarlos el resultado es igual al número introducido:
            parrafo2.innerHTML ="Es un número Amstrong";
        }else{ //Si la condición no se cumple:
            parrafo3.innerHTML = "No es un número Amstrong";
        }
    }
}

function funcion8(){
    
     //Creación de la variable
    var parrafo1 = document.getElementById("parrafo1");
    var parrafo2 = document.getElementById("parrafo2");

    //Introducción del número y validación
    var precio = parseInt(Math.random() * (1000 - 1) + 1);
    precio /= 100;
    
    var bien = true;
    do{
        bien=true;
        var pagar = prompt("El precio es " + precio + ". ¿Cuanto quieres pagar?");
        
        pagar = parseInt(pagar*100);
        pagar /= 100;
        if(isNaN(pagar) || pagar < precio){
            bien = false;
            alert("El numero introducido no es válido. Debe introducir un número mayor al precio.");
        }
    }while(bien === false);
    
    //Creamos la variable vuelta para pagar con la cantidad que queramos
    
    var vuelta = parseInt((pagar - precio)*100);
    vuelta /= 100;
    
    //Calculas la vuelta con cada una de las monedas que hay
    var doscientos = parseInt(vuelta / 2);   
    var cien = parseInt(vuelta % 2);  
    var cincuenta = parseInt(vuelta % 2 / 0.5);  
    var veinte = parseInt(vuelta % 2 % 0.5 / 0.2);   
    var diez = parseInt(vuelta % 2 % 0.5 % 0.2 / 0.1);
    var cinco = parseInt(vuelta % 2 % 0.5 % 0.2 % 0.1 / 0.05);
    var dos = parseInt(vuelta % 2 % 0.5 % 0.2 % 0.1 % 0.05 / 0.02);
    var uno = parseInt(vuelta % 2 % 0.5 % 0.2 % 0.1 % 0.05 % 0.02);
    
    //Escribir los resultados
    parrafo1.innerHTML = "Has introducido " + pagar + "€. <br/> El precio es: " + precio + "€. <br/>La vuelta es: " + vuelta + '€';
    parrafo2.innerHTML = "2€: " + doscientos + " monedas <br/>" + "1€: " + cien + " monedas <br/>" + "50cts: " + cincuenta + " monedas <br/>" + "20cts: " + veinte + " monedas <br/>" + "10cts: " + diez + " monedas <br/>" + "5cts: " + cinco + " monedas <br/>" + "2cts: " + dos + " monedas <br/>" + "1cts: " + uno + " monedas <br/>"; 
    
}

function funcion9(){
    
    //Creación de variables
    var introducido1;
    var bisiesto = false;
    var parrafo = document.getElementById ("parrafo");
    var parrafo2 = document.getElementById ("parrafo2");
    
    //Se pide que introduzca el año
    introducido1= parseInt(prompt("Introduzca un año: "));
    
    if(isNaN(introducido1)){ //Comprueba que lo que se ha introducido es un número
        parrafo.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO"; //Mensaje que se muestra por pantalla en caso de que no se haya introducido un número
    }else{//Si los datos introducidos son correctos el programa se sigue ejecutando
        if(introducido1 % 4 === 0){ //Comprobamos que el resto de la división del número introducido entre 4 sea 0
            bisiesto = true; //Si lo es, la variable bisiesto pasa a ser TRUE
            if(introducido1 % 100 === 0){ //Comprobamos que el resto de la división del número introducido entre 100 sea 0
                if(introducido1 % 400 !== 0){ //Comprobamos que el resto de la división del número introducido entre 100 sea distinto a 0
                    bisiesto = false; //La variable bisiesto seguiría siendo FALSE
                }
            }
        }
        if(bisiesto){ //Si bisiesto es TRUE
           parrafo.innerHTML = "El año, "+ introducido1 +", es bisiesto.";
        }else{ //Si no
            parrafo2.innerHTML = "El año, "+ introducido1 +",  no es bisiesto.";
        }
    } 
}

function funcion10(){
    
    //Creación de variables
    var sal;
    var ant;
    
    var parrafo = document.getElementById ("parrafo");
    var parrafo2 = document.getElementById ("parrafo2");
    var parrafo3 = document.getElementById ("parrafo3");
    var parrafo4 = document.getElementById ("parrafo4");
    
    
    sal= parseInt(prompt("Introduzca salario: "));
    
    if(isNaN(sal)){ //Comprueba que lo que se ha introducido es un número
        parrafo.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO"; //Mensaje que se muestra por pantalla en caso de que no se haya introducido un número
    }else{ //Se pide el siguiente dato
       ant= parseInt(prompt("Introduzca antigüedad: "));
       if(isNaN(ant)){ //Comprueba que lo que se ha introducido es un número
            parrafo.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO"; //Mensaje que se muestra por pantalla en caso de que no se haya introducido un número
        }else{ //Si los datos introducidos son correctos el programa se sigue ejecutando
            if(sal < 500){ //Si el salario es menor a 500:
                if(ant >= 10){ //Si la antigüedad es mayor o igual a 10:
                    parrafo.innerHTML = "El salario del trabajador tras triplicarlo sería: "+parseInt(sal * 3);
                }else{
                    parrafo2.innerHTML = "El salario del trabajador tras duplicarlo sería: "+parseInt(sal * 2);
                }
            }else{
                 parrafo3.innerHTML = "El salario del trabajador sin cambios sería: "+sal;
            } //Mostramos el salario y la antigüedad introducidos
        parrafo4.innerHTML = "El trabajador tiene un salario de: "+sal+"€ y una antigüedad de: "+ant+" años.";
        }
    }
}

function funcion11(){
    
   var numMayor,numMenor,acertado,noAcertado,contador;
                
    contador=1;
    numMayor=parseInt(100);
    numMenor=parseInt(1);
                
    alert("El juego ha comenzado!\nPiensa un número de 1-100");
    acertado=confirm("¿Tu número es el "+parseInt((numMayor+numMenor)/2)+"? ");
                
    while(!acertado){
        noAcertado=confirm("¿El número es mayor que "+parseInt((numMayor+numMenor)/2)+"(Aceptar) o menor(Cancelar)");
        if(noAcertado){
            numMenor=parseInt((numMayor+numMenor)/2);
        }else{
            numMayor=parseInt((numMayor+numMenor)/2);
        }
        contador++;
        acertado=confirm("¿Tu número es el "+parseInt((numMayor+numMenor)/2)+"? ");
    }
                
    alert("El número de intentos es "+contador);
}