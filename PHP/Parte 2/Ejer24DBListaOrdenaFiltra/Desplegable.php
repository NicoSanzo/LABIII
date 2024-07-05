
<?php




        include("./Conexion.php");
     

        
        if($Estado_de_respuesta=="Conexion Exitosa")
        {

            $sql="select * from carreras";
            $stmt=$dbh->prepare($sql);
            $stmt->setfetchMode(PDO::FETCH_ASSOC);
            $stmt->execute();

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
        
      
        
        function GuardarEnArchivo($Estado)
        {
            $puntero = fopen("./errores.log","a");
            fwrite($puntero,date("Y-m-d  H:i:s ")."ERROR: ". $Estado);
            fwrite($puntero,"\n\n");
            fclose($puntero);
        }

      
        
        

?>