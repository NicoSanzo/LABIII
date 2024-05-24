var CAT= JSON.parse(CATEGORIAS);
var input_CAT= document.getElementById("CATEGORIA");
var FORM= document.getElementById("Formulario");
var input_ingreso= document.getElementById("Ingreso");
var Principal= document.getElementById("prince");
var Moda=document.getElementById("Modal");
var input_cerrar= document.getElementById("Cerrar");
var input_enviar= document.getElementById("Enviar");

input_enviar.addEventListener("click",()=>{

    if(FORM.checkValidity()==true)
        {
            FORM.submit();
        }
    else
        {
            alert("Ingrese los datos Faltantes");
        }
});


input_ingreso.addEventListener("click",()=>{

    Principal.className="principalPasivo";
    Moda.className="ModalPrendido"  ;
});

input_cerrar.addEventListener("click",()=>{

    Principal.className="principal";
    Moda.className="Moda"  ;
});


    CAT.CATEG.forEach(function(categoria)
    {
        var opciones = document.createElement("option");
        opciones.setAttribute("value",categoria.CATEGORIA);
        opciones.innerHTML=categoria.CATEGORIA;
        input_CAT.appendChild(opciones);
        
    })
    

   input_CAT.value="";