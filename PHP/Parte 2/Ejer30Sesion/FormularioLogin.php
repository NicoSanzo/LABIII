

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejer30Sesion</title>
    <link rel="stylesheet" href="./StyleLogin.css">
    <script src="./ModuloDeAplicacion/Jquery/jquery-3.7.1.min.js"></script>
    
</head>
    <body>



        <header><h2>LOGIN</h2></header>
      
         <form method="post" id="Login-Form" action="./ControldeSesion/IngresoAlSistema.php"  >

             <div id="Inputs">
                <h2>INGRESO</h2>
                 <label for="User">USUARIO</label>
                 <input type="text" id="User" name="User" value= <?php echo $_GET["Usuario"]; ?> >

                 <label for="Password">CONTRASEÑA</label>
                 <input type="password" id="Password" name="Password">
             </div>

                <?php
                if(isset($_GET["falloUser"]) == 'true')
                { echo "<div id='RespuestaSesion' class='RespuestaDeSesionOculta'> Usuario Incorrecto </div>";}
                elseif(isset($_GET["falloPass"]) == 'true')
                { echo "<div id='RespuestaSesion' class='RespuestaDeSesionOculta'> Contraseña Incorrecta </div>";}       

                ?>   
               
                
             <button id="Ingreso" type="submit" >INGRESAR</button>
             
            </form>

    
    
           
          
        <footer></footer>
        <script src="./ControldeSesion/ControlDelngreso.js"></script>
        <script src="./ModuloDeAplicacion/Jquery/jquery-3.7.1.min.js"></script>
        
    </body>
</html>
