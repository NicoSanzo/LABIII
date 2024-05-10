

var VariableGlobal;


if(VariableGlobal==undefined)
    {
        alert("Una VariableGlobal fue declarada pero no asignada: var variableGlobal");
        alert("la variableglobal es: " + VariableGlobal);
        alert("El tipo de Variableglobal es: " + VariableGlobal);
    }     
    else
    {
        alert("El resultado de la variable local asignada es: " + VariableGlobal) 
    }  




document.getElementById("boton1").addEventListener("click",Asignacion)
document.getElementById("boton2").addEventListener("click",Asignacion2)
document.getElementById("boton3").addEventListener("click",VerVariableGlobal)

function Asignacion()
{
    var VariableGlobal

    VariableGlobal=prompt("Ingrese Un valor:")
    alert("El resultado de la variable local asignada es: " + VariableGlobal)
    alert("El tipo de la variable local es: " + typeof(VariableGlobal))
}

function Asignacion2()
{
    VariableGlobal
    VariableGlobal=prompt("Ingrese Un valor:")
    alert("El resultado de la variable local asignada es: " + VariableGlobal)
    alert("El tipo de la variable local es: " + typeof(VariableGlobal))
}

function VerVariableGlobal()
{
    if(VariableGlobal==undefined)
    {
        alert("La Variable No ha sido asignada")
    }     
    else
    {
        alert("El resultado de la variable local asignada es: " + VariableGlobal) 
    }  

}