var button_enviar= document.getElementById("Send");
var button_reset= document.getElementById("Reset");
var Formulario= document.getElementById("Formulario");
var nombre=document.getElementById("Name");
var Apellido=document.getElementById("Apellido");
var Mes=document.getElementById("Month");

Formulario.method="get";
Formulario.action="./RESPUESTA A FORMULARIO/index.html"

button_enviar.addEventListener("click",(enviar)=>{
    if(!Formulario.checkValidity())
    {
         alert("Debe Completar Los Campos Requeridos");
    }   
    else
    {
        Formulario.submit();
    }
});


button_reset.addEventListener("click", (reset)=>{
 Formulario.reset();
});


nombre.addEventListener("keyup",(Validar)=>{
    if(nombre.value=="")
        { alert("Complete el Nombre");}
});

Apellido.addEventListener("keyup",(Validar1)=>{
    if(Apellido.value=="")
        { alert("Complete El Apellido");}
});

Mes.addEventListener("keyup",(Validar2)=>{
    if(Mes.value > 12 && Mes.value!="" || Mes.value<=0 && Mes.value!=""  )
        {alert("DEBE INGRESAR UN NUMERO ENTRE 1-12");
           Mes.value="";
        }
});
  

