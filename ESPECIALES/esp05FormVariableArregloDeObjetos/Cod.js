var CAT= JSON.parse(CATEGORIAS);
var input_CAT= document.getElementById("CATEGORIA");
var FORM= document.getElementById("Formulario");



    CAT.CATEG.forEach(function(categoria)
    {
        var opciones = document.createElement("option");
        opciones.setAttribute("value",categoria.CATEGORIA);
        opciones.innerHTML=categoria.CATEGORIA;
        input_CAT.appendChild(opciones);
        
    })
    

   input_CAT.value="";