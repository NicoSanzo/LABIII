<?php session_start();
if(!isset($_SESSION['IDSESSION'])) {  
    header('Location:../FormularioLogin.php?Usuario=');
    exit();   
}
?>