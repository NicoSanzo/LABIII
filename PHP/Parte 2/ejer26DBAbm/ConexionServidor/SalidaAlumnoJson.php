

<?php


$Legajo= $_POST['Legajo'];



include("./Conexion.php");


if($Estado_de_respuesta=="Conexion Exitosa Con Base De Datos")
{

   
    $sql= "SELECT * FROM alumnos WHERE Legajo = :Legajo"; 
       
 
    
    
    $Estado_de_respuesta=""; // Variable que bien del archivo de conexion que se blanquea para actualizar el estado de la sentencia
    try
    {
        $stmt=$dbh->prepare($sql);
        $Estado_de_respuesta= $Estado_de_respuesta. "PREPARACION de consulta sql de para cargar FORMULARIO DE MODIFICACION realizada con EXITO";
        GuardarEnArchivologsExitosos($Estado_de_respuesta);
    }
    catch(PDOException $e)
    {
        $Estado_de_respuesta =  $Estado_de_respuesta . "\n" . $e->getMessage();
        GuardarEnArchivoErrores( $Estado_de_respuesta);
    }

    

    $stmt->setfetchMode(PDO::FETCH_ASSOC);
   
    $Estado_de_respuesta=""; // Variable que bien del archivo de conexion que se blanquea para actualizar el estado de la sentencia
    try
    {
        $stmt->bindParam(':Legajo',$Legajo);
        $Estado_de_respuesta= $Estado_de_respuesta. "BINDING de consulta sql de para cargar FORMULARIO DE MODIFICACION realizada con EXITO";
        GuardarEnArchivologsExitosos($Estado_de_respuesta);
    }
    catch(PDOException $e)
    {
        $Estado_de_respuesta =  $Estado_de_respuesta . "\n" . $e->getMessage();
        GuardarEnArchivoErrores($Estado_de_respuesta);
    }
    
    
    


    $Estado_de_respuesta=""; // Variable que bien del archivo de conexion que se blanquea para actualizar el estado de la sentencia
    try
    {
        $stmt->execute();
        $Estado_de_respuesta= $Estado_de_respuesta. "BINDING de consulta sql de para cargar FORMULARIO DE MODIFICACION realizada con EXITO";
        GuardarEnArchivologsExitosos($Estado_de_respuesta);
    }
    catch(PDOException $e)
    {
        $Estado_de_respuesta =  $Estado_de_respuesta . "\n" . $e->getMessage();
        GuardarEnArchivoErrores($Estado_de_respuesta);
    }
   


     $Alumnos=[];

    while($fila=$stmt->fetch())
        {
        $ObjAlumno = new stdClass();
        $ObjAlumno->CODCARRERA = $fila['CodCarrera'];
        $ObjAlumno->LEGAJO = $fila['Legajo'];
        $ObjAlumno->NOMBRE = $fila['Nombre'];
        $ObjAlumno->APELLIDO = $fila['Apellido'];
        $ObjAlumno->CUOTA = $fila['Cuota'];
        $ObjAlumno->MATERIASAPROBADAS = $fila['MateriasAprobadas'];
        $ObjAlumno->FECHADEINSCRIPCION = $fila['FechaInscripcion'];
        $ObjAlumno->CARRERA = $fila['Carrera'];
        $Alumnos[]=$ObjAlumno;
        }

    
    $objAlumnos=new stdclass();
    $objAlumnos->ALUMNOS= $Alumnos;
    $objAlumnos->CANTIDADALUMNOS=count($Alumnos);

     $JsonAlumnos=json_encode($objAlumnos);

     echo $JsonAlumnos;
     $Estado_de_sentencia="Sentencia Ejecutada con exito";

     $dbh=null;    
   
}










?>