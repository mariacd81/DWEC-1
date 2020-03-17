/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function funcion1(){
    
    //Creación de variables
    var array, tam, num;

    //Crea la variable y le asigna un id para el html
    var parrafo = document.getElementById ("parrafo");       
    var parrafo2 = document.getElementById ("parrafo2");
    var parrafo3 = document.getElementById ("parrafo3");
    
    //Pide los números
    tam= prompt("Introduzca tamaño del array: ");
    
    if(isNaN(tam)){//si no es un número te salta el error
        parrafo.innerHTML="ERROR: NO SE HA INTRODUCIDO UN NÚMERO";
    }else{//si es un número continua la operación
        
        array=new Array(tam); //se introduce el array el número de elementos por el que va a estar compuesto
        //salida del número de elementos que componen al array 
            parrafo2.innerHTML="El número de elementos es: " + tam;
       
            
        //pedir por pantalla introducir los elementos en el array
        for(var i = 0; i<tam; i++){//el for te recorre todo el array posicion por posicion
            num=parseInt(prompt("Introduce número: ")); //te pide un elemento en cada posicion del array
            
            array[i]=num; //te introduce un elemento posicion por posicion
        }
        parrafo3.innerHTML="El array es: "+ array; //te muestra el array completado
    }

}

function funcion2(){
    
    var array;
    
    //las que salen en pantalla
    var parrafo = document.getElementById ("parrafo");       
    var parrafo2 = document.getElementById ("parrafo2");
    var parrafo3 = document.getElementById ("parrafo3");
    
    //en las que se incluye valores
    var array = [2,5,9,7,6,3,1,5,4,8,3,2,6,9,3,5,1,2,3]; //es el array del enunciado
    
    //mostrar el array
    parrafo.innerHTML="El array original es: "+array;
    
    //ordenar el array y mostrarlo
    parrafo2.innerHTML="El array ordenado es: " +array.sort();
  
    //borrar los elementos repetidos y mostrar el array resultante
    for(var i = 0; i < array.length; i++){ 
        if(array[i+1] === (i+1)){
           array.splice(i,1); 
            i--;
        }
    }
    parrafo3.innerHTML="El array sin elementos repetidos es: "+array;
}

function funcion3(){
     //Declaración de párrafos asignados a ID
    var parrafo = document.getElementById("parrafo");
    var parrafo2 = document.getElementById("parrafo2");
    var parrafo3 = document.getElementById("parrafo3");

    //Declaramos el array con los datos
    var datos = ["Lunes", " Martes", " Miércoles", " Jueves", " Viernes", " Sábado", " Domingo"];

    //Mostramos el array
    parrafo.innerHTML = "El array original es: " + datos;

    //Utilizamos el slice para poner los días laborales
    parrafo2.innerHTML = "Días Laborales: " + datos.slice(0, 5);

    //Utilizamos el slice para poner los días festivos
    parrafo3.innerHTML = "Días Festivos: " + datos.slice(5);
}

function funcion4(){
    //declaracion de variables

    var parrafo = document.getElementById("parrafo");
    var parrafo2=document.getElementById("parrafo2");
    
    //en las que se incluye valores
    var array = [2,5,9,7,6,3,1,5,4,8,3,2,6,9,3,5,1,2,3]; //es el array del enunciado
    
    
    //mostrar el array 
    parrafo.innerHTML="El array original es: "+array;
    
    //buscar todas las posiciones con el valor 3 y remplazar sus valores
    
    for(var i=0; i<array.length; i++){ //recorrer el array
        if(array[i]===3){ //si el valor es igual a 3
            array[i]=i+1; //se remplaza el valor por la posicion
            
        } 
    }
    
    //array con la posicion 3 cambiada
   
    parrafo2.innerHTML="El array cambiado es: "+array;
    
}

function funcion5() {
    
    //Creación de variables
    var pos, bien, pal, cont = 0;
    var array = new Array(10);
    var parrafo = document.getElementById ("parrafo");
    
    do{
        do{
            bien=true;        
            pos = prompt('Introduce la posición en el array'); //introducción de la posición
            pos = parseInt(pos);
            if(isNaN(pos) || pos<1){ //comprobación de que el dato de la posición esta correctamente insertado
                bien = false;
                alert("El dato introducido no es válido. Debe introducir un número no menor de 1.");
            }
            if(array[pos-1] !== undefined &&  bien === true){ //comprobación de que la posición no esta repetida y bien insertada
                bien = false; 
                alert("Esta posición ya esta ocupada");
            }
        }while(bien === false);       //hasta que la posición no este bien introducida no se continua
        pal = prompt('Introduce la palabra que va en esa posición'); //introducción de la palabra en la posición indicada con anterioridad
        array[pos-1] = pal; 
        cont++;
    }while(cont !== 10);

    parrafo.innerHTML="Los datos introducidos son: "+array;
}

function funcion6(){
    var tamaño=parseInt(prompt("Tamaño "));
    var array;
    var array2=Array(tamaño);
    var parrafo = document.getElementById ("parrafo");
    var parrafo2 = document.getElementById ("parrafo2");
    
    for (var j=0;j<tamaño;j++){
        array2[j]=1;
    }
    array=Array(array2);
    for(var i=1;i<tamaño;i++){
        array.splice(array.length,0,[1]);//inicializamos los array
    }
    parrafo.innerHTML=array;
    for(var i=1;i<=array.length-1;i++){//filas
        for(var j=1;j<=array.length-1;j++){//columnas
            array[i][j]=array[i-1][j]+array[i][j-1];//Sumamos los numeros correspondientes
        }
    }
    parrafo2.innerHTML=array;
}

function funcion7(){
    var aArray=Array(Array(2,0,1),Array(3,0,0),Array(5,1,1));
    var array2=Array(Array(1,0,1),Array(1,2,1),Array(1,1,0));
    var array3=Array();
    var acumulador;
    var contador,contador2;
    for(var i=0;i<aArray.length;i++){
        contador2=0;
        for(var k=0;k<=2;k++){
            acumulador=0;
            contador=0;
            for(var j=0;j<aArray.length;j++){
                acumulador=acumulador+aArray[i][j]+array2[k][contador];
                contador++;
                console.log(acumulador);
            }
            array3[i][contador]=acumulador;
            contador2++;
        }
    }
}