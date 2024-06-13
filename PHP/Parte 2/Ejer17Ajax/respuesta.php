<?php

    
sleep(2);
$Clave= $_POST['clave'];


$ClaveEncriptadaMD5= md5($Clave);
$ClaveEncriptadaSHA1= sha1($Clave);

    echo "<br>";
    echo "CLAVE: " . $Clave ;
    echo "<br>";
    echo "<br>";
    echo "Clave encriptada por MD5 (128 bits o 16 pares hexadecimales): ";
    echo "<br>";
    echo "<br>";
    echo $ClaveEncriptadaMD5; 
    echo "<br>";
    echo "<br>";
    echo "Clave encriptada en sha1 (160 bits o 20 pares hexadecimales): "; 
    echo "<br>";
    echo "<br>";
    echo $ClaveEncriptadaSHA1; 



?>