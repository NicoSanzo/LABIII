



<?php



$dbname="laboratorio";
$host="localhost";
$user="root";
$password="Rocky.2012";
$dbh;
$Estado_de_respuesta="";
$SalidaDeRespuestaApantalla=""; // Variable que concatena todos las respuestas booleanas de las consultas, bindings y ejecuciones y lo devuelve para mostrar el estado en Pantalla



//////// CONEXION CON LA BASE DE DATOS ///////////////

   try{
       $dsn="mysql:host=$host;dbname=$dbname";
       $dbh = new PDO($dsn,$user);
       $Estado_de_respuesta= $Estado_de_respuesta."Conexion Exitosa Con Base De Datos";
       $SalidaDeRespuestaApantalla="";
      }
   catch(PDOException $e)
   {
       $Estado_de_respuesta= $Estado_de_respuesta.$e->getMessage();
       GuardarEnArchivoErrores($Estado_de_respuesta);
       $dbh=null;
   }


 /// FUNCION QUE GUARDA LAS EXCEPCIONES EN UN ARCHIVO////////

   function GuardarEnArchivoErrores($Estado)
   {

      date_default_timezone_set('America/Argentina/Buenos_Aires');
       $puntero = fopen("./erroresDeLogs.log","a");
       fwrite($puntero,date("Y-m-d  H:i:s ")."ERROR: ". $Estado);
       fwrite($puntero,"\n\n");
       fclose($puntero);
   }

 /// FUNCION QUE GUARDA LAS EJECUCIONES EXITOSAS EN UN ARCHIVO////////
   function GuardarEnArchivologsExitosos($Estado)
   {
       date_default_timezone_set('America/Argentina/Buenos_Aires');
       $puntero = fopen("./ConexioneExitosasLogs.log","a");
       fwrite($puntero,date("Y-m-d  H:i:s "). $Estado);
       fwrite($puntero,"\n\n");
       fclose($puntero);
   }


?>
