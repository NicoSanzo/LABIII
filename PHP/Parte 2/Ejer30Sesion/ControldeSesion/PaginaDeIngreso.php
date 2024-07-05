

<?php

    require_once("./SesionCheck.php");
    
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pagina De Inicio</title>
    <link rel="stylesheet" href="./PaginaIngresoStyle.css">
</head>
<body>


    <header>
        <h2>BIENVENIDO</h2>
        <button id="LogOut"> Cerrar Sesion</button>
    </header>

        <div id="Data">
            <label for="USUARIO">USUARIO</label>
            <input type="text" id="USUARIO" readonly>
            <label for="HASH">HASH ID </label>
            <input type="text" id="HASH" readonly>
            <label for="INGRESOS">INGRESOS</label>
            <input type="text" id="INGRESOS" readonly>

            <button id="IrATabla">TABLA</button>
        </div>


      
     
   <footer></footer>
   
   <script src="../ModuloDeAplicacion/Jquery/jquery-3.7.1.min.js"></script>
   <script src="./ControldePaginaInicio.js"></script>
    
</body>
</html>