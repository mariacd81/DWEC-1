/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function funcion1(){
    
    //Creación de variables
    
    var numero1;
    var numero2;
    //Crea la variable y le asigna un id para el html
    var parrafo = document.getElementById ("parrafo");       
    var parrafo2 = document.getElementById ("parrafo2");
    var parrafo3 = document.getElementById ("parrafo3");
    var parrafo4 = document.getElementById ("parrafo4");
    var parrafo5 = document.getElementById ("parrafo5");
    var parrafo6 = document.getElementById ("parrafo6");
    
    //Pide el primer número
    numero1= prompt("Introduzca un numero");
    
    
    if(isNaN(numero1)){ //Comprueba que lo que se ha introducido es un número
        parrafo6.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO"; //Mensaje que se muestra por pantalla en caso de que no se haya introducido un número
    }else{
        numero2= prompt("Introduzca otro numero"); //Si se ha introducido un número, el programa pide el siguiente número
        if(isNaN (numero2)){ //Comprueba que este también sea un número
            parrafo6.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO";
        }else{ //Si los datos introducidos son correctos el programa sigue ejecutándose
            parrafo.innerHTML = ("El primer número introducido es: "+numero1); //Muestra el primer número introducido
            parrafo2.innerHTML = ("El segundo número introducido es: "+numero2); //Muestra el segundo número introducido
            parrafo3.innerHTML =("Suma de los números: "+ (parseInt(numero1) + parseInt(numero2))); //Muestra la suma de los números
            parrafo4.innerHTML=("Multiplicación de los números de los números: "+(numero1 * numero2)); //Muestra la multiplicación de los números
            parrafo5.innerHTML=("División de los números: "+(numero1 % numero2)); //Muestra la división de los números
        }
    }
}

function funcion2(){
    
    //Creación de variables
    var prec;
    var desc;
    
    //Crea la variable y le asigna un id para el html
    var par = document.getElementById ("par");       
    var par2 = document.getElementById ("par2");
    var par3 = document.getElementById ("par3");
    
    //Pide la variable
    prec= prompt("Introduzca precio");
    
    if(isNaN(prec)){ //Comprueba que lo que se ha introducido es un número
        par.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO"; //Mensaje que se muestra por pantalla en caso de que no se haya introducido un número
    }else{
        desc= prompt("Introduzca tanto por ciento de descuento"); //Si se ha introducido un número, el programa pide el siguiente número
        if(isNaN (desc)){ //Comprueba que este también sea un número
            par.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO";
        }else{ //Si los datos introducidos son correctos el programa sigue ejecutándose
            par.innerHTML = ("El precio es: "+prec); //Muestra el precio introducido
            par2.innerHTML = ("El descuento es: "+desc); //Muestra el descuento introducido
            par3.innerHTML =("El precio con descuento es: "+ (parseInt(prec)-(desc * 0.01 * prec))); //Realiza la operación y la muestra
        }
    }
}

function funcion3(){
    
   //Creación de variables
    var nBase16;
    var nBase8;
    
    //Crea la variable y le asigna un id para el html
    var par = document.getElementById ("par");       
    var par2 = document.getElementById ("par2");
    var par3 = document.getElementById ("par3");
    var par4 = document.getElementById("par4");
    
    //Pide las variables
    nBase16= prompt("Introduzca número hexadecimal: ");
    
    if(isNaN(nBase16)){ //Comprueba que lo que se ha introducido es un número
        par.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO"; //Mensaje que se muestra por pantalla en caso de que no se haya introducido un número
    }else{
        nBase8= prompt("Introduzca número en octal: "); //Si se ha introducido un número, el programa pide el siguiente número
        if(isNaN (nBase8)){ //Comprueba que este también sea un número
            par.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO";
        }else{ //Si los datos introducidos son correctos el programa sigue ejecutándose
            par.innerHTML = ("El número hexadecimal es: " + nBase16); //Muestra el número hexadecimal inroducido
            par2.innerHTML = ("El número en decimal es: " + parseInt(nBase16, 16)); //Convierte el número a decimal y lo muestra
            par3.innerHTML =("El número octal es: "+ nBase8); //Muestra el número octal inroducido
            par4.innerHTML = ("El número en decimal es: "+ parseInt(nBase8, 8)); //Convierte el número a decimal y lo muestra
        }
    }
}

function funcion4(){
    
   //Creación de variables
    var base;
    var altura;
    
    //Crea la variable y le asigna un id para el html
    var par = document.getElementById ("par");       
    var par2 = document.getElementById ("par2");
    var par3 = document.getElementById ("par3");
    var par4 = document.getElementById("par4");
    
    //Pide las variables
    base= prompt("Introduzca la base del rectángulo: ");
    
    if(isNaN(base)){ //Comprueba que lo que se ha introducido es un número
        par.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO"; //Mensaje que se muestra por pantalla en caso de que no se haya introducido un número
    }else{
        altura= prompt("Introduzca la altura del rectángulo: "); //Si se ha introducido un número, el programa pide el siguiente número
        if(isNaN (altura)){ //Comprueba que este también sea un número
            par.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO";
        }else{ //Si los datos introducidos son correctos el programa sigue ejecutándose
            par.innerHTML = ("La base del rectángulo es: " + base); //Muestra la base
            par2.innerHTML = ("La altura del rectángulo es: " + altura); //Muestra la altura
            par3.innerHTML =("El perímetro es: "+ parseInt((base * 2) + (altura * 2))); //Calcula el perímetro del rectángulo y lo muestra
            par4.innerHTML = ("El área del rectángulo es: "+ base * altura); // Calcula el área y lo muestra
        }
    }
}

function funcion5(){
    
    //Iniciamos las variables
    var segundos;
    var par1 = document.getElementById("par1");
    var par2 = document.getElementById("par2");
    var par3 = document.getElementById("par3");
    var par4 = document.getElementById("par4");
    var par5 = document.getElementById("par5");
    
    //Iniciamos las constantes que no van a cambiar
    const dias = 24*3600;
    const horas = 3600;
    const minutos = 60;
    
    segundos = prompt("Introduzca una cantidad de segundos");
    
    if(isNaN(segundos)){ //Comprueba que lo que se ha introducido es un número
        par1.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO"; //Mensaje que se muestra por pantalla en caso de que no se haya introducido un número
    }else{
         //Si los datos introducidos son correctos el programa se sigue ejecutando
        par1.innerHTML = "Segundos introducidos: " + segundos; //Muestra  el número de segundos
        par2.innerHTML = "Días: " + parseInt(segundos / dias); //Divide el número de segundos entre la cantidad de segundos que hay en un día
        par3.innerHTML = "Horas: " + parseInt(segundos % dias / horas); //Divide el resto de la operación anterior entre el número de segundos en una hora
        par4.innerHTML = "Minutos: " + parseInt(segundos % dias % horas / minutos); //Divide el resto de la operación anterior entre el número de segundos en un minuto
        par5.innerHTML = "Segundos: " + parseInt(segundos % dias % horas % minutos % segundos); //Muestra el resto de la operación anterior
    }
}

function funcion7(){
    
   //Creación de variables
    var num1;
    var num2;
    
    //Crea la variable y le asigna un id para el html
    var par = document.getElementById ("par");       
    var par2 = document.getElementById ("par2");
    var par3 = document.getElementById ("par3");
    var par4 = document.getElementById ("par4");
    var par5 = document.getElementById ("par5");
    
    
    //Pide las variables
    num1= parseInt(prompt("Introduzca un número: "));
    
    if(isNaN(num1)){ //Comprueba que lo que se ha introducido es un número
        par.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO"; //Mensaje que se muestra por pantalla en caso de que no se haya introducido un número
    }else{
        num2= parseInt(prompt("Introduzca otro número: ")); //Si se ha introducido un número, el programa pide el siguiente número
        if(isNaN (num2)){ //Comprueba que este también sea un número
            par.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO";
        }else{ //Si los datos introducidos son correctos el programa sigue ejecutándose
            par.innerHTML = ("Has introducido los números: " + num1 + " " + num2); //Muestra los números introducidos
            par2.innerHTML = ("La suma es: " + (parseInt(num1) + parseInt(num2))); //Realiza la suma
            par3.innerHTML = (num1 + " en binario es: " + num1.toString(2)); //Pasa el primer número a binario
            par4.innerHTML = (num2 + " en binario es: " + num2.toString(2)); //Pasa el segundo número a binario

            aux = num1;
            aux |= num2;
            suma = aux;
            par5.innerHTML = ("El resultado de la suma en binario es: " + suma.toString(2)); //Muestra el resultado de la suma en binario
        }
    }
}

function funcion8(){
    
   //Creación de variables
    var num1;
    var num2;
    
    //Crea la variable y le asigna un id para el html
    var par = document.getElementById ("par");       
    var par2 = document.getElementById ("par2");
    var par3 = document.getElementById ("par3");
    var par4 = document.getElementById ("par4");
    
    
    //Pide las variables
    num1= parseInt(prompt("Introduzca un número: "));
    
    if(isNaN(num1)){ //Comprueba que lo que se ha introducido es un número
        par.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO"; //Mensaje que se muestra por pantalla en caso de que no se haya introducido un número
    }else{
        num2= parseInt(prompt("Introduzca otro número: ")); //Si se ha introducido un número, el programa pide el siguiente número
        if(isNaN (num2)){ //Comprueba que este también sea un número
            par.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO";
        }else{ //Si los datos introducidos son correctos el programa sigue ejecutándose
            par.innerHTML = ("Has introducido el número: " + num1); //Muestra el primer número
            par2.innerHTML = ("El número de ceros es: " + num2); //Muestra el número de ceros que va a desplazar el número
            par3.innerHTML = (num1 + " en binario es: " + num1.toString(2)); //Pasa el primer número a binario y lo muestra

            aux = num1;
            aux <<= num2;
            resultado = aux;
            par4.innerHTML = ("Después del desplazamiento: " + resultado.toString(2)); //Muestra el número en binario con los ceros de desplazamiento ya añadidos
        }
    }
}    