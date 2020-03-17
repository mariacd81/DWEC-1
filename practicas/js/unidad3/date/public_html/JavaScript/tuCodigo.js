/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function funcion1(){
    //PEDIMOS LOS DATOS POR TECLADO       
    var anyo = Number(prompt("Año:"));
    var mes = Number(prompt("Mes:"));
    var dia = Number(prompt("Día:"));
    var fecha = new Date(anyo, mes, dia);   //Crea objeto fecha de la fecha introducida.
    var plazo = 1000; //Variable para sacar a 1000 días

    //Crea la variable y le asigna un id para el html
    var parrafo = document.getElementById ("parrafo");       
    var parrafo2 = document.getElementById ("parrafo2");

    //SALE LA FECHA INTRODUCIDA POR PANTALLA
    parrafo.innerHTML="Fecha Introducida: " + fecha;

    //SOLUCIÓN A LOS ERRORES DE INTRODUCCIÓN (TE AÑADE AUTOMÁTICAMENTE LOS 0 Y / QUE FALTAN)=> PARA LA FECHA INTRODUCIDA
    if (fecha.getDate() < 10) { //Añadir un cero cuando el dia es menor que diez.
        document.write("0" + fecha.getDate());
    } else {
        document.write(fecha.getDate());
    }
    document.write("/");
    if (fecha.getMonth() < 9) {    //Añadir un cero cuando el mes es menor que 9+1.
        document.write("0" + (fecha.getMonth())); //Para mostrar el mes sumarle 1.
    } else {
        document.write(fecha.getMonth());   //Sumamos 1 para que ponga el mes correcto.
    }
    document.write("/" + fecha.getFullYear() + ".<br>");

    //SALE LA FECHA MODIFICADA
     parrafo2.innerHTML="FEcha 1000 días después: " +( fecha.getDate() + 1000);
    //MODIFICACIÓN DE LA FECHA          
    fecha.setDate(fecha.getDate() + 1000); //Se suma los 1000 días a la fecha

    //SOLUCIÓN A LOS ERRORES DE INTRODUCCIÓN (TE AÑADE AUTOMÁTICAMENTE LOS 0 Y / QUE FALTAN)=> PARA LA FECHA MODIFICADA
    if (fecha.getDate() < 10) { //Poner un cero delante en los dias menores de 10.

        document.write("0" + fecha.getDate());
    } else {

        document.write(fecha.getDate());
    }
    document.write("/");

    if (fecha.getMonth() < 9) {    //Poner un cero delante a los meses menores de 9+1;

        document.write("0" + (fecha.getMonth()));   //Sumamos 1 para que ponga el mes correcto.
    } else {

        document.write(fecha.getMonth());
    }

    document.write("/" + fecha.getFullYear() + ".<br>");
}

function funcion2(){
         //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var salidaH = document.getElementById("valores");
    
        //DECLARAR HORA Y OPERAR
    var hora = new Date();
    var diferencia = 0;
    diferencia = hora.getUTCHours() - hora.getHours();
    if(diferencia < 0){
        diferencia *= -1;
    }
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    salidaH.innerHTML = "La hora en España es: " + hora.toLocaleTimeString() + "<br/> La diferencia con UTC es de: " + diferencia + " horas.";
}

function funcion3(){
         //DEFINICIÓN DE VARIABLES ENLAZADAS AL DOCUMENTO
    var introducidoH = document.getElementById("introducido");
    var salidaH = document.getElementById("salida");
    
        //PEDIR FECHA Y COMPROBAR SU VALIDEZ
    var sFecha = "";
    var aFecha = [];
    var bien = false;
    do{
        sFecha = prompt("Introduzca la fecha con el formato 'dd/mm/aaaa' Ejemplo: '4/9/2002'");
        aFecha = sFecha.split("/");
        if(!isNaN(aFecha[0]) && !isNaN(aFecha[1]) && !isNaN(aFecha[2])){   //No compruebo los días máximos de cada mes
            aFecha[0] = parseInt(aFecha[0]);
            aFecha[1] = parseInt(aFecha[1]);
            aFecha[2] = parseInt(aFecha[2]);
            if(0<aFecha[0] && aFecha[0]<32 && 0<aFecha[1] && aFecha[1]<13){
                bien = true;
            }
        }
        if(!bien){
            alert("La fecha introducida no es válida. Recuerda usar '/' cómo separador.");
        }
    }while(!bien);
    
        //UNA VEZ VALIDADA LA FECHA, TRABAJAMOS CON ELLA
    var introducido= new Date(aFecha[2], aFecha[1]-1, aFecha[0]);
    var salida = introducido;
    var aux = new Date();
    salida = aux - salida;
     
        //ESCRIBIR LOS RESULTADOS EN LOS DISTINTOS PÁRRAFOS
    introducidoH.innerHTML = "Naciste el: " + introducido.toLocaleDateString(); //Hace cosas raras con los años because Date Object
    salidaH.innerHTML = "Has vivido: " + parseInt(salida/1000/3600/24/365) + " años, " + parseInt(salida/1000/3600/24%365/30.41666666666667) + " meses y " + parseInt(salida/1000/3600/24%365%30.41666666666667) + " días.";
}

function funcion3(){
    //PEDIMOS LOS DATOS POR TECLADO         
    //Pedir fecha por pantalla
    var ano = Number(prompt("Año (fecha de nacimiento):"));
    var mes = Number(prompt("Mes (fecha de nacimiento):"));
    var dia = Number(prompt("Día (fecha de nacimiento):"));
    var fecha = new Date(ano, mes, dia);   //Crea objeto fecha de la fecha introducida.

    //creacion de la fecha actual sacandola del sistema
    var fechaactual = new Date();



    //Crear la fecha actual, sacando sus datos del sistema por partes
    anoactual = fechaactual.getFullYear();
    mesactual = fechaactual.getMonth();
    diaactual = fechaactual.getDate();

    //Creacion de la variable que va a contener la diferencia entre fechas en milesegundos para pasarlo a medidas de tiempo mayores(horas,...)
    var diff = fechaactual.getTime() - fecha.getTime();

    //SALE LA FECHA INTRODUCIDA POR PANTALLA
    document.write("Tu fecha de nacimiento: ");

    //SOLUCIÓN A LOS ERRORES DE INTRODUCCIÓN (TE AÑADE AUTOMÁTICAMENTE LOS 0 Y / QUE FALTAN)=> PARA LA FECHA INTRODUCIDA
    //dia
    if (fecha.getDate() < 10) { //Añadir un cero cuando el dia es menor que diez.
        document.write("0" + fecha.getDate());
    } else {
        document.write(fecha.getDate());
    }
    document.write("/"); //separacion entre mes y dia

    //mes
    if (fecha.getMonth() < 10) {    //Añadir un cero cuando el mes es menor que 9+1.
        document.write("0" + (fecha.getMonth())); //Para mostrar el mes sumarle 1.
    } else {
        document.write(fecha.getMonth());   //Sumamos 1 para que ponga el mes correcto.
    }
    document.write("/");//separacion entre mes y año

    //año
    document.write(fecha.getFullYear() + ".<br>");

    //FECHA ACTUAL
    document.write("Fecha actual: ");
    //dia        
    if (diaactual < 10) { //Añadir un cero cuando el dia es menor que diez.
        document.write("0" + diaactual);
    } else {
        document.write(diaactual);
    }
    document.write("/"); //separacion entre mes y dia

    //mes
    if (mesactual < 10) {
        document.write("0" + mesactual);
    } else {
        document.write(mesactual);
    }
    document.write("/");//separacion entre mes y año

    //año
    document.write(anoactual + ".<br>");

    //DIFERENCIA DE FECHAS
    //document.write("MILISEGUNDOS FECHA NACIMIENTO: "+fecha.getTime()+".<br>");
    //document.write("MILISEGUNDOS FECHA ACTUAL: "+fechaactual.getTime()+".<br>");
    document.write("Diferencia entre la fecha actual y la de nacimiento: <br>");
    const diasS = 24 * 3600;
    const mesS = diasS * 30;
    const anyoS = mesS * 12;


    //años
    document.write("Años: " + parseInt((diff / 1000) / anyoS) + ".<br>");
    //meses
    document.write("Meses: " + parseInt((diff / 1000) % anyoS / mesS) + ".<br>");
    //dias
    document.write("Dias: " + parseInt((diff / 1000) % anyoS % mesS / diasS) + ".<br>");
}