
    <h1>
    Este texto fue escrito en HTML:
    </h1>
    <p style = "font-size:20px">
    La neumonía es una infección que inflama los sacos aéreos de uno o ambos pulmones. Los sacos aéreos se pueden llenar de líquido o pus (material purulento), lo que provoca tos con flema o pus, fiebre, escalofríos y dificultad para respirar. Diversos microrganismos, como bacterias, virus y hongos, pueden provocar neumonía.
    </p>

<hr>

    <?php
    echo "<h1> Texto escrito por el procesador PHP: <h1>";
    ?>
    
    <?php
    echo "<h1> Sintomas <h1>
    <ul style='color:lightblue'>
        <li> Dolor en el pecho al respirar o toser </li>
        <li> Desorientación o cambios de percepción mental (en adultos  de 65 años o más) </li>
        <li> Tos que puede producir flema </li>
        <li> Fatiga </li>
        <li> Fiebre, transpiración y escalofríos con temblor </li>
        <li> Temperatura corporal más baja de lo normal (en adultos mayores de 65 años y personas con un sistema inmunitario débil) </li>
        <li> Náuseas, vómitos o diarrea </li>
        <li>Dificultad para respirar </li>
    </ul>" ;
    ?>
<hr>
    <?php
     $A= "5";

    echo "<h2> el valor de la Variable <b style='color:red'>\$A </b> es:  $A </h2>" ;
    echo "<h2>Concatenando " . "<b style='color:red'>\$A </b>" . "es:". $A ."</h2>" ;

    ?>

<hr>
    <?php
     $V= true;
     $F=false;
    
    echo "<h2> el valor de la booleana (verdadera) <b style='color:red'>\$V </b> es:  $V </h2>" ;
    echo "<h2>Concatenando " . "<b style='color:red'>\$F </b>" . "es:". $F ."</h2>" ;
    ?>

<hr>
    <?php
     define("CONSTT","UNO");
    
    echo "<h2>" . "<b style='color:red'>CONSTT </b> es: " . CONSTT . "</h2>" ;
    echo "<h2>" . "Tipo de <b style='color:red'>CONSTT </b> : " . gettype(CONSTT) . "</h2>" ;
    ?>

<hr>
    <?php
     
     $Palabras=[];
     $Palabras=["auto","Car"];
     

     echo "<h2>Arreglos:</h2>";

     echo "<h2>" . " <b style='color:red'>\$Palabras[0] </b> : " . $Palabras[0] . "</h2>" ;
     echo "<h2>" . " <b style='color:red'>\$Palabras[1] </b> : " . $Palabras[1] . "</h2>" ;
     echo "<h2>" . "Tipo de <b style='color:red'>\$Palabras </b> : " . gettype($Palabras) . "</h2>" ;

     echo "<h2>Agrego elementos por Progama:</h2>";

     array_push($Palabras,"voiture");
     array_push($Palabras,"auto");
     
     echo "<h2>Elemetos originales y agreados :</h2>";


     echo "<ul> 
                <li> $Palabras[0] </li>  
                <li> $Palabras[1] </li> 
                <li> $Palabras[2] </li> 
                <li> $Palabras[3] </li> 
            </ul>";

     ////////////////////////////// ARREGLO 2 DIMENSIONES/////////////////////////////////////////

    echo "<h2> Arreglo de 2 Dimensiones (Diccionario):</h2>";

    
    $palabra1=["auto","car","auto","voiture"];
    $palabra2=["teclado","keyboard","tastiera","clavier"];
    $palabra3=["guitarra","guitar","chitarra","guitare"];
    $diccionario=[];

    array_push($diccionario,$palabra1);
    array_push($diccionario,$palabra2);
    array_push($diccionario,$palabra3);


    echo "<h2>". "El tipo del arreglo Diccionario es: " . gettype($diccionario) . "</h2>";

     ?>

       
          
     <?php

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


    echo "<h2>" . "Valor del Arreglo \$diccionario expresado por indicie numerico [1][3]: ". $diccionario[1][3] . "</h2>";
    echo "<h2>" ."Cantidad de elementos de \$diccionario: ". count($diccionario) . "</h2>";
    echo "<br>";
    echo "<br>";

    
    $articulosML= ["CodART"=>"12","Descripcion"=>"teclado inalmbrico logitech", "stock"=> "65" ,"Precio"=>"$6512"];

    echo "<h3>" . "Codigo de articulo: " . $articulosML['CodART'] . "</h3";
    echo "<br>";
    echo "<h3>" ."Descripcion: " . $articulosML['Descripcion']. "</h3";
    echo "<br>";
    echo "<h3>" ."Stock: " . $articulosML['stock']. "</h3";
    echo "<br>";
    echo "<h3>" . "Precio: " . $articulosML['Precio']. "</h3";

    echo "<br>";
    echo "<br>";
    echo "<br>";

    echo "<h2>" ."Cantidad de elementos de \$articulosML: ". count($articulosML) . "</h2>";
    echo "<h2>". "El tipo del arreglo articulosML es: " . gettype($articulosML) . "</h2>";

    ?>
    
<hr>

    <?php

    $X=6;
    $Y=5;


    echo "<h1>Expresiones Aritmeticas <h1>";

    echo "<h2>" ."La variable \$X tiene el valor: " . $X . "</h2>";
    echo "<h2>" ."La variable \$Y tiene el valor: " . $Y . "</h2>";
    echo "<h2>" ."La variable \$X tiene es de tipo: " . gettype($X) . "</h2>";
    echo "<h2>" ."La variable \$Y tiene es de tipo: " . gettype($Y) . "</h2>";
    echo "<h2>" ."Asi se obtiene una expresion aritmetica de suma (\$X + \$Y)= " . $X+$Y . "</h2>";
    echo "<h2>" ."Asi se obtiene una expresion aritmetica de Multiplicación (\$X * \$Y)= " . $X*$Y . "</h2>";
    echo "<h2>" ."Asi se obtiene una expresion aritmetica de División (\$X / \$Y)= " . $X/$Y . "</h2>";
    

    ?>
     
<hr>