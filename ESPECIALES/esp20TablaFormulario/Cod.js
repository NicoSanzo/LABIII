
var PRODUCTOS= JSON.parse(json);
var CAT= JSON.parse(CATEGORIAS);
var input_CAT= document.getElementById("CATEGORIA");
var FORM= document.getElementById("Formulario");
var input_cerrar= document.getElementById("Cerrar");
var input_ingreso= document.getElementById("Ingreso");
var button_Cargar= $("#Cargar").click(Crear);
var button_borrar= $("#Vaciar").click(Vaciar);
var tbody= document.getElementById("tbody");
var Principal= document.getElementById("prince");
var Moda=document.getElementById("Modal");
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


input_cerrar.addEventListener("click",()=>{

   Principal.className="principal";
   Moda.className="Moda"  ;
});


input_ingreso.addEventListener("click",()=>{

   Principal.className="principalPasivo";
   Moda.className="ModalPrendido"  ;
});


function Crear(){

   $("#tbody").empty();
 if (tbody.childNodes.length==0)
   {

      PRODUCTOS.PRODUCTO.forEach(function(Producto){

         
         var fila= document.createElement("tr");
         var CeldaID= document.createElement("td");

         var CeldaDESC= document.createElement("td");
         var CeldaSTOCK= document.createElement("td");
         var CeldaPRECIO= document.createElement("td");
         var CeldaCat= document.createElement("td");
         

         fila.className="secondary-row";
         tbody.appendChild(fila);

         CeldaID.className="cod-Product";
         CeldaID.innerHTML=Producto.ID;
         fila.appendChild(CeldaID);

         CeldaDESC.className="des-Product";
         CeldaDESC.innerHTML=Producto.DESCRIPCION
         fila.appendChild(CeldaDESC);

         CeldaSTOCK.className="stock";
         CeldaSTOCK.innerHTML=Producto.Stock
         fila.appendChild(CeldaSTOCK);
         
         CeldaPRECIO.className="price-Product";
         CeldaPRECIO.innerHTML=Producto.Precio
         fila.appendChild(CeldaPRECIO);

         CeldaPRECIO.className="price-Product";
         CeldaPRECIO.innerHTML=Producto.Precio
         fila.appendChild(CeldaPRECIO);

         CeldaCat.className="Cat-Product";
         CeldaCat.innerHTML=Producto.Categoria
         fila.appendChild(CeldaCat);
         
       
 });

}

}



function Vaciar() {

$("#tbody").empty();

}


CAT.CATEG.forEach(function(categoria)
{
    var opciones = document.createElement("option");
    opciones.setAttribute("value",categoria.CATEGORIA);
    opciones.innerHTML=categoria.CATEGORIA;
    input_CAT.appendChild(opciones);
    
})


input_CAT.value="";





