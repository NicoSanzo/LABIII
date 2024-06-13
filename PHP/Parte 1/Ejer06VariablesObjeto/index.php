
<?php

$objPedido= new stdclass;

$objPedido->ID="251";
$objPedido->Descripcion="Teclado inalambrico";
$objPedido->Precio="$2652";
$objPedido->Stock="26";



echo "<h1> Variable tipo objeto en PHP; Objeto Pedido </h1>";
echo "<h1 style= 'color:blue'> \$objPedido </h1>";

foreach($objPedido as $Objetos=>$Objeto)
{
    echo  "<h3>" . $Objetos . " : " . $Objeto . "</h3>";
}

echo "<h1>". "tipo de <b style= 'color:blue' > \$objPedido </b>: " . gettype($objPedido). "</h1>";
echo "<h1> Definamos arreglo de objPedidos </h1>";
echo "<h1 style= 'color:blue'> \$Arrayobjpedidos </h1>";

$Arrayobjpedidos=[];

array_push($Arrayobjpedidos, $objPedido);
array_push($Arrayobjpedidos, $objPedido);



echo '<table border="0" cellspacing="0" cellpadding="9"';

echo "<tr style='background-color: #aaa'>";
echo '<td style="border:solid thin" align="center" > ID </td>';
echo '<td style="border:solid thin" align="center" > Descripcion </td>';
echo '<td style="border:solid thin" align="center" > Precio </td>';
echo '<td style="border:solid thin" align="center" > Stock </td>';
echo '</tr>';


foreach($Arrayobjpedidos as $objPedidos=>$Objetos)
{
    echo "<tr style='background-color: lightblue'>";
    echo '<td style="border:solid thin" align="center" >'. $Objetos->ID .'</td>';
    echo '<td style="border:solid thin" align="center" >'. $Objetos->Descripcion .'</td>';
    echo '<td style="border:solid thin" align="center" >'. $Objetos->Precio .'</td>';
    echo '<td style="border:solid thin" align="center" >'. $Objetos->Stock .'</td>';
    echo '</tr>';
}

echo '</table>';


echo "<h1>"."Cantidad de objetos del array: ". count($Arrayobjpedidos) . "</h1>";

echo "<h1>". "Produccion de un obejto <b style= 'color:blue' > \$objRenglonesPedido </b> con 2 atributos arrayobjpedidos y cantidad de Renglones " . "</h1>";

$objRenglonesPedido=new stdclass();

$objRenglonesPedido->Arreglopedidos=$Arrayobjpedidos;
$objRenglonesPedido->CantidaddeArreglos=count($Arrayobjpedidos);

echo  "<h3>" . "Cantidad de Arrays: ". $objRenglonesPedido->CantidaddeArreglos . "</h3>";

echo "<h1> Produccion de un JSON jsonRenglones </h1>";

$jsonRenglonesPedido= json_encode($objRenglonesPedido);
echo $jsonRenglonesPedido;




?>