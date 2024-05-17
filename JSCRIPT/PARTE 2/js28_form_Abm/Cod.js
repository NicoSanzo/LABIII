var button_enviar= document.getElementById("Send");
var button_reset= document.getElementById("Reset");
var button_Baja= document.getElementById("Baja");
var button_Mod= document.getElementById("Modificar");
var Formulario= document.getElementById("Formulario");
var nombre=document.getElementById("Name");
var Apellido=document.getElementById("Apellido");
var Saldo=document.getElementById("Saldo");

Formulario.method="get";
Formulario.action="./RESPUESTA A FORMULARIO/index.html"

Saldo.placeholder="$1-$5000";



button_enviar.addEventListener("click",(enviar)=>{
 Formulario.submit();
 Formulario.reset();
});



window.onload= function Desabilitar()
{
    All_desactive();
}



Formulario.addEventListener("keyup",(validar)=>{

    if(nombre.value!="" || Apellido.value!="" || Saldo.value!="" )
        {
          button_reset.disabled=false;
        }
    else
        {
         button_reset.disabled=true;
        }
        validarCampos();
});


function validarCampos()
{
    if (nombre.value!="" && Apellido.value!="" && Saldo.value<5000 && Saldo.value>0)
        {
         button_enviar.disabled=false;
         button_Mod.disabled=false;
         button_Baja.disabled=false;
        }
    else
        {
         button_enviar.disabled=true;
         button_Mod.disabled=true;
         button_Baja.disabled=true;
        }
}




button_reset.addEventListener("click", (reset)=>{
    Formulario.reset();
    All_desactive();
   });


   function All_desactive()
   {
    button_reset.disabled=true;
    button_enviar.disabled=true;
    button_Mod.disabled=true;
    button_Baja.disabled=true;
   }