

var frutas=[];
frutas=["banana","pera"];

frutas.push(prompt("el Arreglo Frutas ya tiene dos elementos asignados por programa (banana y pera), agregue un elemento mas"));

document.write("<h3>Tipo de Arreglo Frutas: "+ typeof(frutas)+" <h3>");
document.write("<h3>Primer elemento cargado desde programa: "+ frutas[0] +" <h3>");
document.write("<h3>Segundo elemento cargado desde programa: "+ frutas[1] +" <h3>");
document.write("<h3>Tercer elemento cargado desde teclado: "+ frutas[2] +" <h3>");
document.write("<h3>Cantidad de elementos: "+ frutas.length +" <h3>");

