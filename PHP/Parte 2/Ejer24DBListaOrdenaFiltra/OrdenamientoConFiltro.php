<?php

     
  
     $orden = $_POST['ORDEN'];
     $Legajo= $_POST['Filtro_LEGAJO'];
     $Nom= $_POST['Filtro_NOMBRE'];
     $Ape= $_POST['Filtro_APELLIDO'];
     $Cuo= $_POST['Filtro_CUOTA'];
     $Mater= $_POST['Filtro_MATERIAS'];
     $fech= $_POST['Filtro_FECHA'];
     $Carre= $_POST['Filtro_CARRERAS'];
     $Cod= $_POST['Filtro_CODCARR'];
     

        include("./Conexion.php");
    

        if($Estado_de_respuesta=="Conexion Exitosa")
        {

           
            
            $sql="select * from alumnos where "; 
            $sql=$sql."Legajo LIKE CONCAT('%',:Legajo,'%') and ";
            $sql=$sql."Nombre LIKE CONCAT('%',:Nombre,'%') and ";
            $sql=$sql."Apellido LIKE CONCAT('%',:Apellido,'%') and ";
            $sql=$sql."Cuota LIKE CONCAT('%',:Cuota,'%') and ";
            $sql=$sql."MateriasAprobadas LIKE CONCAT('%',:MateriasAprobadas,'%') and ";
            $sql=$sql."FechaInscripcion LIKE CONCAT('%',:FechaInscripcion,'%') and ";
            $sql=$sql."CodCarrera LIKE CONCAT('%',:CodCarrera,'%') and ";
            $sql=$sql."Carrera LIKE CONCAT('%',:Carrera,'%')";
            $sql=$sql." ORDER BY $orden";

            
            $stmt=$dbh->prepare($sql);
            
            $stmt->bindParam(':Legajo',$Legajo);
            $stmt->bindParam(':Nombre',$Nom);
            $stmt->bindParam(':Apellido',$Ape);
            $stmt->bindParam(':Cuota',$Cuo);
            $stmt->bindParam(':MateriasAprobadas',$Mater);
            $stmt->bindParam(':FechaInscripcion',$fech);
            $stmt->bindParam(':CodCarrera',$Cod);
            $stmt->bindParam(':Carrera',$Carre);

            $stmt->setfetchMode(PDO::FETCH_ASSOC);
            $stmt->execute();


             $Alumnos=[];

            while($fila=$stmt->fetch())
                {
                     $Objalumno=new stdClass();
                     $Objalumno->CODCARRERA=$fila['CodCarrera'];
                     $Objalumno->LEGAJO=$fila['Legajo'];
                     $Objalumno->NOMBRE=$fila['Nombre'];
                     $Objalumno->APELLIDO=$fila['Apellido'];
                     $Objalumno->CUOTA=$fila['Cuota'];
                     $Objalumno->MATERIASAPROBADAS=$fila['MateriasAprobadas'];
                     $Objalumno->FECHADEINSCRIPCION=$fila['FechaInscripcion'];
                     $Objalumno->CARRERA=$fila['Carrera'];

                     array_push($Alumnos,$Objalumno);
                }

            
            $objAlumnos=new stdclass();
            $objAlumnos->ALUMNOS= $Alumnos;
            $objAlumnos->CANTIDADALUMNOS=count($Alumnos);

             $JsonAlumnos=json_encode($objAlumnos);

             echo $JsonAlumnos;
             $Estado_de_sentencia="Sentencia Ejecutada con exito";

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