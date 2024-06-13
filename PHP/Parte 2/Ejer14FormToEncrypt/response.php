<?php

$Clave = $_GET['clave'];
$ClaveEncriptadaMD5= md5($Clave);
$ClaveEncriptadaSHA1= sha1($Clave);

echo "<br>";
echo "Clave: " . $Clave ;
echo "<br>";
echo "Clave encriptada por MD5 (128 bits o 16 pares hexadecimales) " . $ClaveEncriptadaMD5; 
echo "<br>";
echo "Clave: " . $Clave ;
echo "<br>";
echo "Clave encriptada en sha1 (160 bits o 20 pares hexadecimales) " . $ClaveEncriptadaSHA1; 
?>