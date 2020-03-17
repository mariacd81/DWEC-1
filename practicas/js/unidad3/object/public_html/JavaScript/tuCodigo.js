/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function funcion1(){
    class Rectangulo{
        //Crear constructor
        constructor(base,altura,color){
            this.base=base;
            this.altura=altura;
            this.color=color;
        }
        //Metodos a mayores
        mostrar(id){
            document.getElementById(id).innerHTML = "Ancho ->" + this.base+ "px. Alto ->" +this.altura+"px. Color ->#"+this.color;
        }
        asignarAId(id){
            document.getElementById(id).style.width = this.base + "px";
            document.getElementById(id).style.height = this.altura + "px";
            document.getElementById(id).style.backgroundColor = "#"+this.color;
        }
    }
    
    var rect1 = new Rectangulo(Math.floor(Math.random()*750),150,Math.floor(Math.random()*15).toString(16)+Math.floor(Math.random()*15).toString(16)+Math.floor(Math.random()*15).toString(16));
    var rect2 = new Rectangulo(Math.floor(Math.random()*750),150,Math.floor(Math.random()*15).toString(16)+Math.floor(Math.random()*15).toString(16)+Math.floor(Math.random()*15).toString(16));
    var rect3 = new Rectangulo(Math.floor(Math.random()*750),150,Math.floor(Math.random()*15).toString(16)+Math.floor(Math.random()*15).toString(16)+Math.floor(Math.random()*15).toString(16));
    var rect4 = new Rectangulo(Math.floor(Math.random()*750),150,Math.floor(Math.random()*15).toString(16)+Math.floor(Math.random()*15).toString(16)+Math.floor(Math.random()*15).toString(16));
    
    rect1.asignarAId("rec1");
    rect2.asignarAId("rec2");
    rect3.asignarAId("rec3");
    rect4.asignarAId("rec4");

    rect1.mostrar("parrafo");
}

function funcion2(){
    //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var creacionH = document.getElementById("creacion");    
    var procesoH = document.getElementById("proceso");    
    
        //DESARROLLO DEL PROGRAMA
        //Creación de las variables con los párrafos
    var creacion = "";
    var proceso = "";
        
        //Creación de las clases
    class Persona{
        constructor(nombre, apellidos, dni){
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.dni = dni;
        }
    }
    
    class Alumno extends Persona{
        constructor(nombre, apellidos, dni, asignaturas){
            super(nombre, apellidos, dni);
            this.asignaturas = asignaturas; //El array va luego
            creacion += "He sido creado y mis atributos son: " + nombre + " " + apellidos + " " + dni + " " + asignaturas + "<br/>";
        }
        entrega(ejercicio, profesor){
            proceso += "El alumno " + this.nombre + " " + this.apellidos + " ha entregado el ejercicio " + ejercicio + " al profesor " + profesor.nombre + "<br/>";
            profesor.corregir(ejercicio, this.nombre);
        }
    }
    class Profesor extends Persona{
        constructor(nombre, apellidos, dni, asignaturas){
            super(nombre, apellidos, dni);
            this.asignaturas = asignaturas; //El array va luego
            creacion += "He sido creado y mis atributos son: " + nombre + " " + apellidos + " " + dni + " " + asignaturas + "<br/>";
        }
        corregir(ejercicio, alumno){
            proceso += "El profesor " + this.nombre + " " + this.apellidos + " ha corregido el ejercicio " + ejercicio + " del alumno " + alumno + " y lo ha calificado con un " + (Math.random() * 10).toFixed(2) + "<br/><br/>";
        }
    }
        
        //Creación de objetos
    creacion += "Alumnos<br/>";
    var alumno1 = new Alumno("Alberto", "Perez Roblez", "12345678A", new Array("Lengua", "Matematicas", "Naturales", "Ingles"));
    var alumno2 = new Alumno("Ignacio", "Torino Álvares", "12345666A", new Array("Lengua", "Matematicas", "Naturales", "Ingles"));
    var alumno3 = new Alumno("Alejandro", "Otálvaro Hereda", "15555678A", new Array("Lengua", "Matematicas", "Naturales", "Ingles"));
    var alumno4 = new Alumno("Jesús", "Lopez Sanchez", "11115678A", new Array("Lengua", "Matematicas", "Naturales", "Ingles"));
    creacion += "<br/><br/>Profesores<br/>";
    var profesor1 = new Profesor("David", "Broncano Rodriguez", "12345678A", new Array("Lengua", "Matematicas"));
    var profesor2 = new Profesor("Firulais", "Santas Galletas", "12345678A", new Array("Naturales", "Ingles"));
        
        //Llamada a los métodos
    alumno1.entrega(1, profesor1);
    alumno1.entrega(2, profesor2);
    alumno2.entrega(1, profesor1);
    alumno2.entrega(2, profesor2);
    alumno3.entrega(1, profesor1);
    alumno3.entrega(2, profesor2);
    alumno4.entrega(1, profesor1);
    alumno4.entrega(2, profesor2);
        //Aplicación al HTML
    creacionH.innerHTML = creacion;
    procesoH.innerHTML = proceso;
}