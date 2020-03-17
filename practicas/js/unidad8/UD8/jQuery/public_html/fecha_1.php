<?php
    /*sleep(5);
    echo date('j/n/Y G:i:s.');*/
    
    $array = ["Lunes","Martes","Miércoles","Jueves","Viernes"];
    $get = $_GET["numero"];
    echo $array[$get-1];
