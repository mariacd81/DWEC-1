/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*$(function(){
    $.ajax((url:'fecha.php',type:'POST',async:true,data:'numero=4',success: function(respuesta){
            alert(respuesta);
    });
});*/

$(function(){
    //$('respuesta').load("fecha.php",{numero:5});
    
    $.get('fecha_1.php?numero=5',function(respuesta){
        alert(respuesta);
    });
});
