

var Ingresado = document.getElementById("Ingreso");
var input=document.getElementById("Ingreso");
var Boton_Resultado=document.getElementById("valor");
var Boton_Suma= document.getElementById("suma1");
var Boton_pot=document.getElementById("Potencia");
var Boton_Mult=document.getElementById("Multiplicacion");
var Boton_doseleva=document.getElementById("doseleva");

Boton_Resultado.addEventListener("click",Mostrar);
Boton_Suma.addEventListener("click",Suma1);
Boton_pot.addEventListener("click", Pot);
Boton_Mult.addEventListener("click", multiplicar);
Boton_doseleva.addEventListener("click",Elevara2)

function Mostrar()
{
alert(Ingresado.value);
}

function Suma1()
{
  input.value= (parseInt(Ingresado.value))+1;
}

function Pot()
{
input.value=Math.pow(parseInt(Ingresado.value),2);
}

function multiplicar()
{
input.value=(parseInt(Ingresado.value))*2;
}

function Elevara2()
{
input.value=Math.pow(2 , parseInt(Ingresado.value));
}