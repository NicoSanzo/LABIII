


<?php

/////////////VARIAIBLES DEL SERVIDOR////////////////////

echo "<h1> Variables de SERVIDOR <h1>";

echo '<table border="0" cellspacing="0" cellpadding="9"';

echo "<tr style='background-color: #aaa'>";
echo '<td style="border:solid thin" align="center" > SERVER_ADDR </td>';
echo '<td style="border:solid thin" align="center" >' . $_SERVER['SERVER_ADDR'] . "</td>";
echo '</tr>';

echo "<tr style='background-color: #aaa'>";
echo '<td style="border:solid thin" align="center" > SERVER_PORT </td>';
echo '<td style="border:solid thin" align="center" >' . $_SERVER['SERVER_PORT'] . "</td>";
echo '</tr>';

echo "<tr style='background-color: #aaa'>";
echo '<td style="border:solid thin" align="center" > SERVER_NAME </td>';
echo '<td style="border:solid thin" align="center" >' . $_SERVER['SERVER_NAME'] . "</td>";
echo '</tr>';

echo "<tr style='background-color: #aaa'>";
echo '<td style="border:solid thin" align="center" > DOCUMENT_ROOT </td>';
echo '<td style="border:solid thin" align="center" >' . $_SERVER['DOCUMENT_ROOT'] . "</td>";
echo '</tr>';

echo '</table>';

/////////////VARIAIBLES DEL SERVIDOR////////////////////

echo "<h1> Variables de CLIENTE <h1>";

echo '<table border="0" cellspacing="0" cellpadding="9"';

echo "<tr style='background-color: #aaa'>";
echo '<td style="border:solid thin" align="center" > REMOTE_ADDR</td>';
echo '<td style="border:solid thin" align="center" >' . $_SERVER['REMOTE_ADDR'] . "</td>";
echo '</tr>';

echo "<tr style='background-color: #aaa'>";
echo '<td style="border:solid thin" align="center" > REMOTE_PORT</td>';
echo '<td style="border:solid thin" align="center" >' . $_SERVER['REMOTE_PORT'] . "</td>";
echo '</tr>';


echo '</table>';

/////////////VARIAIBLES DE REQUERIMIENTO ////////////////////

echo "<h1> Variables de REQUERIMIENTO <h1>";

echo '<table border="0" cellspacing="0" cellpadding="9"';

echo "<tr style='background-color: #aaa'>";
echo '<td style="border:solid thin" align="center" > SCRIPT_NAME</td>';
echo '<td style="border:solid thin" align="center" >' . $_SERVER['SCRIPT_NAME'] . "</td>";
echo '</tr>';

echo "<tr style='background-color: #aaa'>";
echo '<td style="border:solid thin" align="center" >REQUEST_METHOD</td>';
echo '<td style="border:solid thin" align="center" >' . $_SERVER['REQUEST_METHOD'] . "</td>";
echo '</tr>';


echo '</table>';

/////////////TODAS ////////////////////

echo "<h1> TODAS <h1>";

foreach($_SERVER as $key_name=> $key_value)
{
    echo "<h3>" .$key_name. " : " . $key_value.  "</h3>";
}


?>