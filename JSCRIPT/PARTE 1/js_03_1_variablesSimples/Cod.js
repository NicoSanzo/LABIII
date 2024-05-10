

var Z
var A=5
var B= "6"
var C= 2

document.getElementById("boton1").addEventListener("click",escribirZ)
document.getElementById("boton2").addEventListener("click",escribirA)
document.getElementById("boton3").addEventListener("click",escribirB)
document.getElementById("boton4").addEventListener("click",escribirC)
document.getElementById("boton5").addEventListener("click",SUMA1)
document.getElementById("boton6").addEventListener("click",SUMA2)

function escribirZ()
{
    document.getElementById("Visualizador").innerHTML= '<h2>El valor de Z es: '+ Z +'<h2><h2> Tipo De Z: '+ typeof(Z) +'<h2>';
}

function escribirA()
{
    document.getElementById("Visualizador").innerHTML= '<h2>El valor de A es: '+ A +'<h2><h2> Tipo De A: '+ typeof(A) +'<h2>';
}

function escribirB()
{
    document.getElementById("Visualizador").innerHTML= '<h2>El valor de B es: '+ B +'<h2><h2> Tipo De B: '+ typeof(B) +'<h2>';
}

function escribirC()
{
    document.getElementById("Visualizador").innerHTML= '<h2>El valor de C es: '+ C +'<h2><h2> Tipo De C: '+ typeof(C) +'<h2>';
}

function SUMA1()
{

    document.getElementById("Visualizador").innerHTML= '<h2>El valor de A+B es: '+ Suma(A,B) +'<h2><h2> Tipo De SUMA: '+ typeof(Suma(A,B)) +'<h2>';

}

function SUMA2()
{

    document.getElementById("Visualizador").innerHTML= '<h2>El valor de A+C es: '+ Suma(A,C) +'<h2><h2> Tipo De SUMA2: '+ typeof(Suma(A,C)) +'<h2>';

}

function Suma(x1, x2)
{
    return x1+x2;
}


