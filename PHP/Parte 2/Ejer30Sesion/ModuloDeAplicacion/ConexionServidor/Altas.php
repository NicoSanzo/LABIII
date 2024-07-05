


<?php
  

 //PROTECCION EN SESION, SI NO ESTA ESTABLECIDA LA SESION REDIRECCIONA AL FORM LOGIN // SE UTILIZA EL REQUIRE YA QUE SI FALLA NO SIGUE CARGANDO Y EVITA QUE SE EJECUTE EL SCRIPT POSTERIOR
 require_once ('../../ControldeSesion/SesionCheck.php');
/////////////////////////////////////////////////////////////////////////////////////////



        $Codigo= $_POST['CodigoA'];
        $Legajo= $_POST['legajoA'];     
        $Nombre= $_POST['NombreA'];
        $Apellido= $_POST['ApellidoA'];
        $Cuota= $_POST['CuotaA'];
        $MateriasAprobadas= $_POST['MateriasA'];
        $FechaInscripcion= $_POST['FechaA'];
        $Carrera= $_POST['Carrera'];
        
        
  include("./Conexion.php");    //////////INCLUYE LOS DATOS Y METODOS DEL ARCHIVO QUE RECIBE COMO ARGUMENTO////////////
        

       

    
        if($Estado_de_respuesta=="Conexion Exitosa Con Base De Datos")
        {   
            try
            {

                if(!isset($_FILES['ArchivoFormAlta'])) // Verifica si el indice ArchivoFormAlta Existe en el Formulario, Es el "name Del Campo HTML"

                  {$Estado_de_respuesta= "No existe el campo establecido en el formulario";}

                else if(empty($_FILES['ArchivoFormAlta']['name']))//Verifica que no este vacio el input del Archivo Subido
                  {
                    

                    $sql= "INSERT INTO alumnos (Legajo, Nombre, Apellido, Cuota, MateriasAprobadas, FechaInscripcion, CodCarrera, Carrera)
                    VALUES (:Legajo, :Nombre, :Apellido, :Cuota, :MateriasAprobadas, :FechaInscripcion, :Codigo, :Carrera)";

                     $stmt=$dbh->prepare($sql);
                     $Estado_de_respuesta= "PREPARACION de Sentencia para ALTAS realizada con EXITO";
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

                     $Estado_de_respuesta = "BINDING de Variables para ALTAS realizada con EXITO";
                     GuardarEnArchivologsExitosos($Estado_de_respuesta);

                     $stmt->execute();
                     $Estado_de_respuesta ="EJECUCION de consulta sql ALTAS realizada con EXITO";

                     $SalidaDeRespuestaApantalla= "ALTA REALIZADA CON EXITO - No se subieron Archivos";

                     echo $SalidaDeRespuestaApantalla;  // Variable que concatena todos las respuestas booleanas de las consultas, bindings y ejecuciones y lo devuelve para mostrar el estado en Pantalla // Se encuentra en archivo "./Conexiones/Conexion.php"

                 }
                else
                {
                    $contenidoPdf= file_get_contents($_FILES['ArchivoFormAlta']['tmp_name']);  // se utiliza para obtener el contenido del archivo PDF, Crea una ruta temporal donde PHP guarda el archivo

                    $sql= "INSERT INTO alumnos (Legajo, Nombre, Apellido, Cuota, MateriasAprobadas, InfoAlumno, FechaInscripcion, CodCarrera, Carrera)
                    VALUES (:Legajo, :Nombre, :Apellido, :Cuota, :MateriasAprobadas, :contenidoPdf, :FechaInscripcion, :Codigo, :Carrera)";

                     $stmt=$dbh->prepare($sql);
                     $Estado_de_respuesta= "PREPARACION de Sentencia para ALTAS realizada con EXITO";

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
                     $stmt->bindParam(':contenidoPdf',$contenidoPdf); 

                     $Estado_de_respuesta = "BINDING de Variables para ALTAS realizada con EXITO";
                     GuardarEnArchivologsExitosos($Estado_de_respuesta);

                     $stmt->execute();
                     $Estado_de_respuesta ="EJECUCION de consulta sql ALTAS realizada con EXITO";
                     GuardarEnArchivologsExitosos($Estado_de_respuesta);

                     $SalidaDeRespuestaApantalla= "ALTA REALIZADA CON EXITO - Se subio el Archivo:" . strval($_FILES['ArchivoFormAlta']['name']);

                     echo $SalidaDeRespuestaApantalla;

                }  
            }
            catch(PDOException $e)
            {
                $Estado_de_respuesta =  $Estado_de_respuesta . "\n" . $e->getMessage();
                GuardarEnArchivoErrores( $Estado_de_respuesta);
                echo $Estado_de_respuesta;
            }

                       
        }

        
        $dbh=null;  

?>