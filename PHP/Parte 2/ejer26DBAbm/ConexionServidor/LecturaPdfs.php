

<?php


       
        $Legajo= $_POST['Legajo'];     

       
    
    
        include("./Conexion.php");    //////////INCLUYE LOS DATOS Y METODOS DEL ARCHIVO QUE RECIBE COMO ARGUMENTO////////////
        
        

        if($Estado_de_respuesta=="Conexion Exitosa Con Base De Datos")
        {
            
            try
            {
                
                $sql = "SELECT InfoAlumno FROM alumnos WHERE Legajo = :Legajo";

                $stmt=$dbh->prepare($sql);
                $Estado_de_respuesta= "PREPARACION de Sentencia para LECTURA DE PDF realizada con EXITO";
                GuardarEnArchivologsExitosos( $Estado_de_respuesta);
               
                $stmt->bindParam(':Legajo', $Legajo); 
                $Estado_de_respuesta = "BINDING de Sentencia para LECTURA DE PDF realizada con EXITO";
                GuardarEnArchivologsExitosos($Estado_de_respuesta);
    
                $stmt->execute();
                $Estado_de_respuesta ="EJECUCION de Sentencia para LECTURA DE PDF realizada con EXITO";
                GuardarEnArchivologsExitosos($Estado_de_respuesta);

                $file= $stmt->fetch(PDO::FETCH_ASSOC);


                $objPFD= new stdClass();
                $objPFD->DocumentoPdf = base64_encode($file['InfoAlumno']);
                $SalidaPDF = json_encode($objPFD);
                echo $SalidaPDF;
                $dbh=null;  

                
            }
            catch(PDOException $e)
            {
                $Estado_de_respuesta = $e->getMessage();
                GuardarEnArchivoErrores( $Estado_de_respuesta);
                $dbh=null;  
                
            }

                   
           


        }
        
       

?>