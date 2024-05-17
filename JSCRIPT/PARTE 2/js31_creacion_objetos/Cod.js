var Create_button= document.getElementById("Crear");
var Limpiar_button= document.getElementById("Limpiar");
var Info_button= document.getElementById("Info");

var contcent= document.getElementById("Contenedor-Central");


Create_button.addEventListener("click", Agregar);




Info_button.addEventListener("click", (Informar)=>{

    alert("longitud de childnodes: "+  contcent.childNodes.length);

    for(var i=0;i< contcent.childNodes.length;i++)
        { 
            var Texto= contcent.childNodes[i].textContent;

            alert("indice: " + i + " // " + Texto);
        }

});


Limpiar_button.addEventListener("click", (Borrar)=>{
    
    while( contcent.childNodes.length>0)
        {
            contcent.removeChild(contcent.childNodes[0]);
        }

});



function Agregar()
{

    var Texto= "<h2> Elemento Creado: ";
    var ObjDiv=document.createElement("div");
    Texto=Texto + contcent.childNodes.length;
    Texto=Texto + "<h2>"
    ObjDiv.className="Contenedores";
    ObjDiv.innerHTML= Texto;
    contcent.appendChild(ObjDiv);
}

