<?php
    /*sleep(5);
    echo date('j/n/Y G:i:s.');*/
    
    $array = ["Lunes","Martes","Miércoles","Jueves","Viernes"];
    $get = $_POST["numero"];
    echo $array[$get-1];
