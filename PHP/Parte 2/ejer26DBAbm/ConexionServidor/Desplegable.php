
<?php



        include("./Conexion.php");        //////////INCLUYE LOS DATOS Y METODOS DEL ARCHIVO QUE RECIBE COMO ARGUMENTO////////////
     

        if($Estado_de_respuesta=="Conexion Exitosa Con Base De Datos")
        {
            

            $sql="select * from carreras";

            $Estado_de_respuesta=""; // Variable que bien del archivo de conexion que se blanquea para actualizar el estado de la sentencia
            try
            {
                $stmt=$dbh->prepare($sql);
                 $Estado_de_respuesta= $Estado_de_respuesta. "PREPARACION de Sentencia para Carga De DESPLEGABLES realizada con EXITO";
                 GuardarEnArchivologsExitosos( $Estado_de_respuesta);
            }
            catch (PDOException $e)
            {
                 $Estado_de_respuesta =  $Estado_de_respuesta . "\n" . $e->getMessage();
                GuardarEnArchivoErrores($Estado_de_respuesta);
            }
           
            
            

            $stmt->setfetchMode(PDO::FETCH_ASSOC);



            $Estado_de_respuesta=""; // Variable que bien del archivo de conexion que se blanquea para actualizar el estado de la sentencia
            try
            {
                $stmt->execute();
                $Estado_de_respuesta= $Estado_de_respuesta. "EJECUCION de consulta sql de Carga de DESPLEGABLES realizada con EXITO";
            }
            catch(PDOException $e)
            {
                $Estado_de_respuesta =  $Estado_de_respuesta . "\n" . $e->getMessage();
                GuardarEnArchivoErrores( $Estado_de_respuesta);
            }


           

            $Carreras=[];
            while($fila=$stmt->fetch())
                {
                     $ObjCarrera=new stdClass();
                     $ObjCarrera->Carrera=$fila['DescripcionCarrera'];
                     array_push($Carreras,$ObjCarrera);
                }     

            $objcarreras=new stdclass();
            $objcarreras->CARRERAS= $Carreras;
            $JsonCarreras=json_encode($objcarreras);
            echo $JsonCarreras;
            $dbh=null;            
           
        }
        
      
        
      

      
        
        

?>