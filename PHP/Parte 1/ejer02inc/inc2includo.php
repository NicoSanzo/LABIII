<?php
    echo "<h1>En este ejemplo utilizamos la funcion include() que ubica codigo en el archivo ejemplo2.inc :</h1>";
    echo "<h2>Antes de insertar el include las variables declaradas en el mismo no existen</h2>";
    echo "<h2>Las variables son:</h2>";
    
   
        foreach ($diccionario[$i] as $palabra)
        {  
        echo  '<td style="border:solid thin" align="center" >'. $palabra . "</td>";
        }
    


    
    echo "<h2>La longitud de los arreglos son 0</h2>";
    include("./inc/inc.php");
    echo "<h2>Ya se ejecuto la funcion include, si el archivo no existe, se visualiza warning y el scrip sigue ejectandose, hasta el final</h2>";
    echo "<h2>La ".count($diccionario). " variables de tipo array asociativos en el inc son:</h2>";

    echo '<table border="0" cellspacing="0" cellpadding="9" >';
        echo "<tr style='background-color: #aaa'>";
        echo "<th>ESPAÑOL</th>";
        echo "<th>INGLES</th>";
        echo " <th>ITALIANO</th> ";
        echo "<th>FRANCES</th>";
        echo '</tr>';


        for($i=0; $i< count($diccionario) ; $i++)
        {
            echo "<tr style='background-color: lightblue'>" ;
            foreach ($diccionario[$i] as $palabra)
            {  
            echo  '<td style="border:solid thin" align="center" >'. $palabra . "</td>";
            }
        }

        echo "</tr>" ;

    echo "</table>" ;

    
    echo "<h2>La cantidad de arreglos es: " . count($diccionario)."</h2>";
    
    
    
    
    
   
    



    ?>