
var ACUM=0;
var display= document.getElementById('display');

/*************************BOTONES NUMERICOS********************/

var UNO = document.getElementById('UNO').addEventListener("click",(one)=>{
  in_display(1)
});
var DOS = document.getElementById('DOS').addEventListener("click",(two)=>{
  in_display(2)
});
var TRES = document.getElementById('TRES').addEventListener("click",(three)=>{
  in_display(3)
});
var CUATRO = document.getElementById('CUATRO').addEventListener("click",(four)=>{
  in_display(4)
});
var CINCO = document.getElementById('CINCO').addEventListener("click",(five)=>{
  in_display(5)
});
var SEIS = document.getElementById('SEIS').addEventListener("click",(six)=>{
  in_display(6)
});
var SIETE = document.getElementById('SIETE').addEventListener("click",(seven)=>{
  in_display(7)
});
var OCHO = document.getElementById('OCHO').addEventListener("click",(eight)=>{
  in_display(8)
});
var NUEVE = document.getElementById('NUEVE').addEventListener("click",(nine)=>{
  in_display(9)
});

/*************************BOTONES DE CALCULO********************/

var MAS = document.getElementById("MAS").addEventListener("click", (Suma)=>{
  if(!display.value)
    {
      ACUM += 0;
    }
    else
    {
    ACUM += parseInt(display.value);
    resetear()
    }
});


var Del_Acum_Bottom = document.getElementById('delete-acum').addEventListener("click",(borrar_acum)=>{
  ACUM=0;
});

var Mos_Acum_Bottom = document.getElementById('Resul').addEventListener("click", (Mostrar_Acum)=>{
 alert("El Valor del Acumulador es: " + ACUM)
});

var Res_Display=document.getElementById('delete-display').addEventListener("click",resetear);

function in_display(val)
{
  display.value=display.value + val;
};


function resetear()
{
 display.value=null;
}






