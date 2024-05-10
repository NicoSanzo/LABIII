

var Form= document.getElementById("my-form");
var Apellido= document.getElementById("APELLIDO");
var Nombre= document.getElementById("NOMBRE");

Form.method="get";
Form.action="./RESPUESTA A FORMULARIO/index.html"



var ENVIAR= document.getElementById("ENVIAR").addEventListener("click", (ENVIAR)=>{
  var confirmacion=confirm("¿DESEA ENVIAR EL FORMULARIO?");
  if(confirmacion==true && Valid_Form()==true)
    {
      Form.submit();
    }
});

var RESET= document.getElementById("BLANQUEAR").addEventListener("click",(reset)=>{
  Form.reset();
});

function Valid_Form()
{

if (Apellido.value=="" || Nombre.value=="" )
  {
  alert("FALTAN DATOS");
  return false;
  }
else
{
  return true;
}

}