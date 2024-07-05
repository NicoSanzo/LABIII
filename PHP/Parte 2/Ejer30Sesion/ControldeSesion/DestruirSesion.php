<?php

require_once ("./SesionCheck.php");

if (isset($_SESSION['USERSESSION'])) 
{
    session_destroy();
    header('Location:../FormularioLogin.php?Usuario='); // Le paso El Usuario Vacio por url Para que se establezca en Vacio y no de error cuando quiera Ejecutar el script del FormularioLogin.php
    exit();
}