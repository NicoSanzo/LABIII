
var PRODUCTOS= JSON.parse(json);


var button_Cargar= $("#Cargar").click(Crear);
var button_borrar= $("#Vaciar").click(Vaciar);
var tbody= document.getElementById("tbody");


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






