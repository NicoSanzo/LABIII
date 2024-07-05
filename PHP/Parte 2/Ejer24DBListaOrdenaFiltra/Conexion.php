<?php



$dbname="laboratorio";
$host="localhost";
$user="root";
$password="Rocky.2012";
$dbh=null;
$Estado_de_respuesta="";





   try{
       $dsn="mysql:host=$host;dbname=$dbname";
       $dbh = new PDO($dsn,$user);
       $Estado_de_respuesta= $Estado_de_respuesta."Conexion Exitosa";
      }
   catch(PDOException $e)
   {
       $Estado_de_respuesta= $Estado_de_respuesta.$e->getMessage();
       GuardarEnArchivo($Estado_de_respuesta);
       $dbh=null;

   }






?>