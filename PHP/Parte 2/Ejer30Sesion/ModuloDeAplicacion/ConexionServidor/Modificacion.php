


<?php


         //PROTECCION EN SESION, SI NO ESTA ESTABLECIDA LA SESION REDIRECCIONA AL FORM LOGIN // SE UTILIZA EL REQUIRE YA QUE SI FALLA NO SIGUE CARGANDO Y EVITA QUE SE EJECUTE EL SCRIPT POSTERIOR

         require_once ('../../ControldeSesion/SesionCheck.php');

        /////////////////////////////////////////////////////////////////////////////////////////




        $Codigo= $_POST['CodigoFormModi'];
        $Legajo= $_POST['legajoFormModi'];     
        $Nombre= $_POST['NombreFormModi'];
        $Apellido= $_POST['ApellidoFormModi'];
        $Cuota= $_POST['CuotaFormModi'];
        $MateriasAprobadas= $_POST['MateriasFormModi'];
        $FechaInscripcion= $_POST['FechaFormModi'];
        $Carrera= $_POST['Carrera'];
        $LegajoKey=$_POST['KeyLegajo'];
        
    
        include("./Conexion.php");    //////////INCLUYE LOS DATOS Y METODOS DEL ARCHIVO QUE RECIBE COMO ARGUMENTO////////////
        

        if($Estado_de_respuesta=="Conexion Exitosa Con Base De Datos")
        {
        
            try
            {
                if(!isset($_FILES['ArchivoFormModi']))
                {
                    $Estado_de_respuesta= "No se encontro el Campo del Formulario HTML";
                }
                elseif(empty($_FILES['ArchivoFormModi']['name']))
                {
                    

                    $sql = "UPDATE alumnos SET CodCarrera=:Codigo, Legajo=:Legajo, Nombre=:Nombre, Apellido=:Apellido, Cuota=:Cuota, MateriasAprobadas=:MateriasAprobadas, FechaInscripcion=:FechaInscripcion, Carrera=:Carrera WHERE Legajo=:LegajoKey";

                    $stmt=$dbh->prepare($sql);
                    $Estado_de_respuesta= "PREPARACION de Sentencia para MODIFICACIONES realizada con EXITO";
                    GuardarEnArchivologsExitosos( $Estado_de_respuesta);
                    $stmt->setfetchMode(PDO::FETCH_ASSOC);

                    $stmt->bindParam(':Legajo', $Legajo);
                    $stmt->bindParam(':Nombre', $Nombre);
                    $stmt->bindParam(':Apellido', $Apellido);
                    $stmt->bindParam(':Cuota', $Cuota);
                    $stmt->bindParam(':MateriasAprobadas', $MateriasAprobadas);
                    $stmt->bindParam(':FechaInscripcion', $FechaInscripcion);
                    $stmt->bindParam(':Codigo', $Codigo);
                    $stmt->bindParam(':Carrera',$Carrera); 
                    $stmt->bindParam(':LegajoKey', $LegajoKey);

                    $Estado_de_respuesta = "BINDING de Variables para MODIFICACIONES realizada con EXITO";
                    GuardarEnArchivologsExitosos($Estado_de_respuesta);

                    $stmt->execute();
                    $Estado_de_respuesta ="EJECUCION de consulta sql MODIFIACIONES realizada con EXITO";

                    $SalidaDeRespuestaApantalla= " MODIFICACION REALIZADA CON EXITO - No se subieron Archivos";
                     echo $SalidaDeRespuestaApantalla;  // Variable que concatena todos las respuestas booleanas de las consultas, bindings y ejecuciones y lo devuelve para mostrar el estado en Pantalla // Se encuentra en archivo "./Conexiones/Conexion.php"

                }
                else
                {
                    $contenidoPdf= file_get_contents($_FILES['ArchivoFormModi']['tmp_name']);

                    $sql = "UPDATE alumnos SET CodCarrera=:Codigo, Legajo=:Legajo, Nombre=:Nombre, Apellido=:Apellido, Cuota=:Cuota, MateriasAprobadas=:MateriasAprobadas, InfoAlumno=:contenidoPdf, FechaInscripcion=:FechaInscripcion, Carrera=:Carrera WHERE Legajo=:LegajoKey";

                    $stmt=$dbh->prepare($sql);
                    $Estado_de_respuesta= "PREPARACION de Sentencia para MODIFICACIONES realizada con EXITO";
                    GuardarEnArchivologsExitosos( $Estado_de_respuesta);
                    $stmt->setfetchMode(PDO::FETCH_ASSOC);

                    $stmt->bindParam(':Legajo', $Legajo);
                    $stmt->bindParam(':Nombre', $Nombre);
                    $stmt->bindParam(':Apellido', $Apellido);
                    $stmt->bindParam(':Cuota', $Cuota);
                    $stmt->bindParam(':MateriasAprobadas', $MateriasAprobadas);
                    $stmt->bindParam(':FechaInscripcion', $FechaInscripcion);
                    $stmt->bindParam(':Codigo', $Codigo);
                    $stmt->bindParam(':Carrera',$Carrera); 
                    $stmt->bindParam(':LegajoKey', $LegajoKey);
                    $stmt->bindParam(':contenidoPdf', $contenidoPdf);

                    $Estado_de_respuesta = "BINDING de Variables para MODIFICACIONES realizada con EXITO";
                    GuardarEnArchivologsExitosos($Estado_de_respuesta);

                    $stmt->execute();
                    $Estado_de_respuesta ="EJECUCION de consulta sql MODIFIACIONES realizada con EXITO";

                    $SalidaDeRespuestaApantalla= " MODIFICACION REALIZADA CON EXITO - Se subio el Archivo: " . strval($_FILES['ArchivoFormModi']['name']);
                    echo $SalidaDeRespuestaApantalla;  // Variable que concatena todos las respuestas booleanas de las consultas, bindings y ejecuciones y lo devuelve para mostrar el estado en Pantalla // Se encuentra en archivo "./Conexiones/Conexion.php"
                }    
            }
            catch(PDOException $e)
            {
                $Estado_de_respuesta = $e->getMessage();
                GuardarEnArchivoErrores( $Estado_de_respuesta);
                echo $Estado_de_respuesta;
            }

            $dbh=null;          

        }
        
       

?>