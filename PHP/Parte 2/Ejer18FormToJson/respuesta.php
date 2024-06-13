<?php

sleep(2);

$objPersona = new stdclass;




$objPersona->USUARIO=$_POST['USUARIO'];
$objPersona->MAIL=$_POST['MAIL'];
$objPersona->NOMBRE=$_POST['NOMBRE'];
$objPersona->APELLIDO=$_POST['APELLIDO'];
$objPersona->NACIMIENTO=$_POST['NACIMIENTO'];


$jsonPersona=json_encode($objPersona);
 
echo $jsonPersona;

?>