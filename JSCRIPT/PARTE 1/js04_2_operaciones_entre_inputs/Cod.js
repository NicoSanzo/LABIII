

var ingreso_1 = document.getElementById("Ingreso-1");
var ingreso_2=document.getElementById("Ingreso-2");
var ingreso_3=document.getElementById("Ingreso-3");
var Resultado=document.getElementById("Resultado");

var Boton_Suma=document.getElementById("Suma").addEventListener("click", Suma);
var Boton_Promedio=document.getElementById("Promedio").addEventListener("click",Promedio );
var Boton_Mayor = document.getElementById("Mayor").addEventListener("click", Mayor);



function Promedio()
{
Mostrar_en_input(Suma()/3);
}

function Suma()
{
  var resu = parseInt(ingreso_1.value) + parseInt(ingreso_1.value) + parseInt(ingreso_3.value);
  Mostrar_en_input(resu);
  return resu;
}

function Mostrar_en_input(valor)
{
  Resultado.value=valor;
}

function Mayor() 
{
  var A=parseInt(ingreso_1.value);
  var B= parseInt(ingreso_2.value);
  var C= parseInt(ingreso_3.value);
  
  if (A > B &&  A > C)
  {
    Mostrar_en_input(A);
  }
  else if (B> A &&  B > C)
  {
    Mostrar_en_input(B);
  }
  else
  {
    Mostrar_en_input(C);
  }

}





