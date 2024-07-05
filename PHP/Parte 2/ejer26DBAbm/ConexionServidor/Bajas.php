



<?php

    $LegajoDelRegistroEliminado= $_POST['Legajo'];
    $NombreDelRegistroEliminado= $_POST['Nombre'];
    $ApellidoDelRegistroEliminado= $_POST['Apellido'];

    include("./Conexion.php");


    if($Estado_de_respuesta=="Conexion Exitosa Con Base De Datos")
    {

       
        try 
        {

            $sql = "DELETE FROM alumnos WHERE Legajo=:LegajoDelRegistroEliminado";
            $stmt=$dbh->prepare($sql);
            $Estado_de_respuesta= "PREPARACION de consulta sql de para ELIMINAR REGISTRO realizada con EXITO";
            GuardarEnArchivologsExitosos($Estado_de_respuesta);

            $stmt->setfetchMode(PDO::FETCH_ASSOC);
            $stmt->bindParam(':LegajoDelRegistroEliminado',$LegajoDelRegistroEliminado);
            $Estado_de_respuesta= "BINDING de consulta sql de para ELIMINAR REGISTRO realizada con EXITO";
            GuardarEnArchivologsExitosos($Estado_de_respuesta);

            $stmt->execute();
            $Estado_de_respuesta="EJECUCION de consulta sql de para ELIMINAR REGISTRO realizada con EXITO";
            GuardarEnArchivologsExitosos($Estado_de_respuesta);


        }
        catch(PDOException $e)
        {
                $Estado_de_respuesta = $e->getMessage();
                GuardarEnArchivoErrores($Estado_de_respuesta);
                echo "NO SE PUDO ELIMINAR EL REGISTRO"; 
        }

          
        echo "Se Elimino El Registro De ". strtoupper($NombreDelRegistroEliminado) . " " . strtoupper($ApellidoDelRegistroEliminado) . " (LEGAJO: " . strtoupper($LegajoDelRegistroEliminado) . ")";


    }

    


    $dbh= null;





?>