<?php

if (!isset($_SESSION['USERSESSION'])) {
    
    AutenticacionYCreacion();
}



function AutenticacionYCreacion()
{

    include("./Conexion.php");

    if($Estado_de_respuesta=="Conexion Exitosa Con Base De Datos")
    {
    

        $username = $_POST['User'];
        $password = $_POST['Password'];

        try
        {
            $sql = "SELECT * FROM login WHERE Usuario = :username";
            $stmt = $dbh->prepare($sql);

            $Estado_de_respuesta= "PREPARACION de Sentencia para INGRESO AL SISTEMA realizada con EXITO";
            GuardarEnArchivologsExitosos( $Estado_de_respuesta);

            $stmt->setfetchMode(PDO::FETCH_ASSOC);
            $stmt->bindParam(':username', $username);

            $Estado_de_respuesta= "Binding de Sentencia para INGRESO AL SISTEMA realizada con EXITO";
            GuardarEnArchivologsExitosos( $Estado_de_respuesta);

            $stmt->execute();

            $Estado_de_respuesta= "EJECUCION de Sentencia para INGRESO AL SISTEMA realizada con EXITO";
            GuardarEnArchivologsExitosos( $Estado_de_respuesta);

            $user = $stmt->fetch(); // Obtengo los valores que volvieron de la base de datos

            if ($user) // Si volvio un usuario de la base de dato Compruebo: ((En Caso de que de la base de datos no venga nada retornara NULL ))
            {
                if (sha1($password) == $user['Contraseña']) 
                {
                    
                    $ContadorActualizado=$user['ContadorSesiones'] + 1;

                    //ACTUALIZA EL CONTADOR DE SESIONES DE LA BASE DE DATOS//

                    $sqlUpdate= "UPDATE login SET ContadorSesiones = :contador WHERE Usuario = :username";
                    $stmtUpdate = $dbh->prepare($sqlUpdate);
                    $stmtUpdate->setfetchMode(PDO::FETCH_ASSOC);
                    $stmtUpdate->bindParam(':username',$username);
                    $stmtUpdate->bindParam(':contador',$ContadorActualizado);
                    $stmtUpdate->execute();

                    session_start();
                    $_SESSION['IDSESSION'] = session_create_id();
                    $_SESSION['USERSESSION'] = $user['Usuario'];
                    $_SESSION['SESSIONCOUNT'] = $user['ContadorSesiones'];

                
                    
                    header("Location: ./PaginaDeIngreso.php");

                    exit(); // Asegura que el script se detenga después de redirigir
                }
                else 
                {
                    header("location: ../FormularioLogin.php?falloPass=true&Usuario= ". $username);      ///// Le Paso Como Parametro a traves de la url (GET) una Variable fallo y el usuario incorrecto que se ingreso para cargarlo en el input de Usuario. Ademas en caso de que no haya encontrado un usuario se ejecute un script en en FormularioLogin.php y muestre un error,
                    exit();   
                }
            } 
            else  //////////////////////Se ejecuta si de la base de datos vuelve NULL al intentar encontrar un Usuario
            {
                header("location: ../FormularioLogin.php?falloUser=true&Usuario= ". $username);   ///// Le Paso Como Parametro a traves de la url (GET) una Variable fallo y el usuario incorrecto que se ingreso para cargarlo en el input de Usuario. Ademas en caso de que no haya encontrado un usuario se ejecute un script en en FormularioLogin.php y muestre un error,
                exit();   
            }

        }
        catch(PDOException $e)
         {
             $Estado_de_respuesta =  $e->getMessage();
             GuardarEnArchivoErrores($Estado_de_respuesta);
        }
 
    }

    $dbh=null;
}


?>