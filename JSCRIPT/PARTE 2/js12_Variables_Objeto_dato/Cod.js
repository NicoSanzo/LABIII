


 var button_mostrar=document.getElementById('Lista').addEventListener("click",mostrar_lista);
 var button_Ocultar=document.getElementById("Ocultar").addEventListener ("click",Ocultar);
 var button_Crear=document.getElementById("Crea-persona").addEventListener ("click",AddPersona);

 var Input_Nombre=document.getElementById("Name");
 var Input_Apellido=document.getElementById("Apellido");
 var Input_FechaDeNac=document.getElementById("date");

 var objtable=document.createElement("table");
 objtable.className= "tabla";
 document.getElementById("Presentacion").appendChild(objtable);

var div=document.createElement("div");
div.className= "Arreglos";
document.getElementById("Presentacion").appendChild(div);

var ObjetoPersona={
nombre:"Carlos",
Apellido:"zeta",
FechaDeNac:"14/12/1956"};

var arrayPersonas=[ObjetoPersona];


arrayPersonas.push({nombre:"Nicolas",Apellido:"Sanzo",FechaDeNac:"04/08/1999"})


window.onload= create()

function create()
{

    document.getElementById("Presentacion").style.display="none";
    
    arrayPersonas.forEach(function(item)
    {
    var ObjtrName=document.createElement("tr");
    var ObjtrApe=document.createElement("tr");
    var Objtrfecha=document.createElement("tr");
    var objth=document.createElement("th");
    objth.className="th";
    objtable.appendChild(objth);
    
    ObjtrName.className= "tr";
    objth.appendChild(ObjtrName);
    ObjtrName.innerHTML=item.nombre;

    ObjtrApe.className= "tr";
    objth.appendChild(ObjtrApe);
    ObjtrApe.innerHTML=item.Apellido;

    Objtrfecha.className= "tr";
    objth.appendChild(Objtrfecha);
    Objtrfecha.innerHTML=item.FechaDeNac;
     
    });

    div.innerHTML= "<h2>La longitud del array es: <h2>" + arrayPersonas.length ;
}



function Ocultar()
{

  document.getElementById("Presentacion").style.display="none";
  
  document.getElementById("Presentacion").removeChild(document.getElementById("Presentacion"));

}

function mostrar_lista()
{
    document.getElementById("Presentacion").style.display="block";
}

function AddPersona ()
{
   if (Input_Nombre.value!="" || Input_Apellido.value!="", Input_FechaDeNac.value!="")
    {
    arrayPersonas.push({nombre: Input_Nombre.value,Apellido:Input_Apellido.value,FechaDeNac:Input_FechaDeNac.value});
    Agregar_a_Tabla();
    Resetear();

    }
    else
    {
        alert("Campos Vacios");
    }
    div.innerHTML= "<h2>La longitud del array es: <h2>" + arrayPersonas.length ;
}

function Agregar_a_Tabla()
{

    var ObjtrName=document.createElement("tr");
    var ObjtrApe=document.createElement("tr");
    var Objtrfecha=document.createElement("tr");
    var objth=document.createElement("th");
    objth.className="th";
    objtable.appendChild(objth);
    
    ObjtrName.className= "tr";
    objth.appendChild(ObjtrName);
    ObjtrName.innerHTML=Input_Nombre.value;

    ObjtrApe.className= "tr";
    objth.appendChild(ObjtrApe);
    ObjtrApe.innerHTML=Input_Apellido.value;

    Objtrfecha.className= "tr";
    objth.appendChild(Objtrfecha);
    Objtrfecha.innerHTML=Input_FechaDeNac.value;

}
function Resetear()
{
Input_Apellido.value="";
Input_Nombre.value="";
Input_FechaDeNac.value="";
}



