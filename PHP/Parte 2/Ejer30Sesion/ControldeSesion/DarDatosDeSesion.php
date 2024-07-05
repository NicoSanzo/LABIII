
 
<?php

require_once("./SesionCheck.php");


$Datos= ["USER"=>$_SESSION['USERSESSION'], "ID"=>$_SESSION['IDSESSION'], "CONTADOR"=>$_SESSION['SESSIONCOUNT']];



echo json_encode($Datos);


?>

