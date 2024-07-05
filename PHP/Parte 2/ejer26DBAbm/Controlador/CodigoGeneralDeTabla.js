




var body= $("#tbody");
var buttonCarga= $("#Cargar");
var buttonvaciar= $("#Vaciar");
var DesplegableCarreras= $("#Carreras"); //CORRESPONDE AL ID DEL DESPLEGABLE DE LA TABLA
var CarrerasFormModi= $("#CarrerasFormModi");  //CORRESPONDE AL ID DEL DESPLEGABLE DEL FORMULARIO DE MODIFICACION
var ButtonLimpiarFiltros=$("#Limpiar");
var Orden= $("#Filtro");
var Registros=$("#REGISTROS");
var LegajoDeFormMod=$("#legajoFormModi");
var FormularioMod=$("#FormularioModificacion");


///////////ESTABLECE EN EL FOOTER LA CANTIDAD DE REGISTROS QUE SE LEYERON/////////





$(document).ready(function(){
    Registros.empty();
    var Registro=document.createElement("h2");
    Registro.innerHTML= "NUMERO DE REGISTROS: " + "0" ;
    Registros.append(Registro);
    RequerimientoDesplegable(DesplegableCarreras);
    CarrerasFormModi.empty();
    
})

//////////////////VACIA TODA LA TABLA /////////////////

buttonvaciar.click(function(){
   body.empty();
   Registros.empty();
   var Registro=document.createElement("h2");
   Registro.innerHTML= "NUMERO DE REGISTROS: " + "0" ;
   Registros.append(Registro);
})



/////////////////////LIMPIA LOS FILTROS DE BUSQUEDA/////////

ButtonLimpiarFiltros.click(LimpiarFiltros);
    

function LimpiarFiltros()
{
   $("#CodCarrera").val("");
   $("#Legajo").val("");;
   $("#Nombre").val("");
   $("#Apellido").val("");
   $("#Cuota").val("");
   $("#Materias").val("");
   $("#Fecha").val("");
   $("#Carreras").val("");
}



////////////////////////REALIZA EL REQUERMIENTO AJAX PARA TRAER LOS DATOS DEL DESPLEGABLE DE LA TABLA/////////////////////////////

function RequerimientoDesplegable(Desplegable)
{

var RequireAjax = $.ajax
    ({
         type:"post",
         url:"./ConexionServidor/Desplegable.php",
         success:function(respuestadelServer,Estado)
         {
            //alert( Estado + "\n\n" + respuestadelServer);
                var descCarreras= JSON.parse(respuestadelServer); 
                    descCarreras.CARRERAS.forEach(function(carrera)
                    {
                     var opciones = document.createElement("option");
                     opciones.setAttribute("value",carrera.Carrera);
                     opciones.innerHTML=carrera.Carrera;
                     Desplegable.append(opciones);
                     
                    });               
                   DesplegableCarreras.val("");   
                    
                    
         }, 
         error: function(){      

            Desplegable.html("<h2>No se pudo procesar El Requerimiento</h2>");
         }           
    })    
} 



////////////////////////REALIZA EL REQUERMIENTO AJAX PARA TRAER LOS DATOS DE LA TABLA/////////////////////////////

 function cargaDatos()
 {

    body.empty();
    body.html("<h2>ESPERANDO RESPUESTA...</h2>");
    $.ajax
    ({
         type:"post",
         url:"./ConexionServidor/OrdenamientoConFiltro.php",
         data:
         {
            ORDEN:$("#Filtro").val(),
            Filtro_CODCARR: $("#CodCarrera").val(),
            Filtro_LEGAJO: $("#Legajo").val(),
            Filtro_NOMBRE: $("#Nombre").val(),
            Filtro_APELLIDO: $("#Apellido").val(),
            Filtro_CUOTA: $("#Cuota").val(),
            Filtro_MATERIAS: $("#Materias").val(),
            Filtro_FECHA: $("#Fecha").val(),
            Filtro_CARRERAS: $("#Carreras").val(),
         },
         success:function(respuestadelServer,Estado)
         {
            //alert( Estado + "\n\n" + respuestadelServer);
            body.empty();
            objJson=JSON.parse(respuestadelServer);
            objJson.ALUMNOS.forEach(function(Alumno)
            {


                var fila= document.createElement("tr");      
                var CODCARRERA= document.createElement("td");
                var LEGAJO= document.createElement("td");
                var NOMBRE= document.createElement("td");
                var APELLIDO= document.createElement("td");
                var CUOTA= document.createElement("td");
                var MATERIASAPROBADAS= document.createElement("td");
                var FECHA= document.createElement("td");
                var CARRERA=document.createElement("td");
                var botPdf=document.createElement("button");
                var CeldaPdfs=document.createElement("td");
                var CeldaMODIFICACIONES=document.createElement("td");
                var botMod=document.createElement("button");
                var botEli=document.createElement("button");
                var CeldaELIMINACIONES=document.createElement("td");
            
                CODCARRERA.innerHTML= Alumno.CODCARRERA;
                CODCARRERA.className="Cod";
                LEGAJO.innerHTML= Alumno.LEGAJO;
                LEGAJO.className="Legajo";
                NOMBRE.innerHTML= Alumno.NOMBRE;
                NOMBRE.className="Nombre";
                APELLIDO.innerHTML= Alumno.APELLIDO;
                APELLIDO.className="Apellido";
                CUOTA.innerHTML= Alumno.CUOTA;
                CUOTA.className="Cuota";
                MATERIASAPROBADAS.innerHTML= Alumno.MATERIASAPROBADAS;
                MATERIASAPROBADAS.className="Materias";
                FECHA.innerHTML= Alumno.FECHADEINSCRIPCION;
                FECHA.className="Fecha";
                CARRERA.innerHTML= Alumno.CARRERA;
                CARRERA.className="Carrera";
                botPdf.innerHTML= "PDF";
                botPdf.className="btpdf";
                CeldaPdfs.className="PDF";
                botMod.innerHTML= "MODIFICAR";
                botMod.className="btMod";
                CeldaMODIFICACIONES.className="Modificaciones";
                botEli.innerHTML="ELIMINAR"
                botEli.className="bteli";
                CeldaELIMINACIONES.className="Eliminar";
                
            
                fila.append(CODCARRERA);
                fila.append(LEGAJO);
                fila.append(NOMBRE);
                fila.append(APELLIDO);
                fila.append(CUOTA);
                fila.append(MATERIASAPROBADAS);
                fila.append(FECHA);
                fila.append(CARRERA);
                fila.append(CeldaPdfs);
                fila.append(CeldaMODIFICACIONES);
                fila.append(CeldaELIMINACIONES);
         
                CeldaMODIFICACIONES.append(botMod);
                CeldaELIMINACIONES.append(botEli);
                CeldaPdfs.append(botPdf);
                body.append(fila);

                AsignacionDeBotonMod(botMod,Alumno);
                AsignacionDeBotonEli(botEli,Alumno);
                AsignacionDeBotonPDF(botPdf,Alumno);

            } )
            
            Registros.empty();
            var Registro=document.createElement("h2");
            Registro.innerHTML= "NUMERO DE REGISTROS: " + objJson.CANTIDADALUMNOS ;
            Registros.append(Registro);
            
         } ,   
         error: function(){      

            body.html("<h2>ERROR, No se pudo Procesar el requerimiento</h2>");
         }

    });
 }


function AsignacionDeBotonPDF(botPdf,Alumno)
{
   
    botPdf.onclick=function(){

         MuestraPdf(Alumno.LEGAJO);
         $("#LecturaPDF").addClass("LecturaPdfs");
         $("#LecturaPDF").removeClass("LecturaPdfs-Apagada");
         ContenedorPrincipal.addClass("Principal-Pasivo");
         
         
    }

}



function MuestraPdf(ValorLegajoAlumno)
{

   var AlumnoAjax =$.ajax({

      type:"post",
      url:"./ConexionServidor/LecturaPdfs.php",
      data:{Legajo:ValorLegajoAlumno},
      success: function(respuestadelServer,estado)
      {    
         Pdfdevuelto=JSON.parse(respuestadelServer);
         $("#LecturaPDF").append("<iframe id=frame-pdf width ='100%' height='100%'src='data:application/pdf;base64,"+ Pdfdevuelto.DocumentoPdf +"'></iframe>");  
      }
   });

}

 
function AsignacionDeBotonEli(BotEli,Alumno)
{

   BotEli.onclick= function(){  

      var Confirmar= confirm("¿ESTA SEGURO QUE QUIERE ELIMINARLO?");
      if (Confirmar==true)
      {EliminaAlumnos(Alumno.LEGAJO,Alumno.NOMBRE,Alumno.APELLIDO);}
    };

}


function EliminaAlumnos(ValorLegajoAlumno,Nombre,Apellido)  // FUNCION QUE TIENE COMO ARGUMENTO EL LEGAJO DEL ALUMNO Y LE ASIGNA EL VALOR DEL LEGAJO. REALIZA EL REQUERIMIENTO CON LOS DATOS DEL MISMO.
{
   var AlumnoAjax =$.ajax({

         type:"post",
         url:"./ConexionServidor/Bajas.php",
         data:{Legajo:ValorLegajoAlumno,Nombre:Nombre,Apellido:Apellido},
         success: function(respuestadelServer,estado)
         {
            alert(estado + respuestadelServer);  
            LimpiarFiltros();  
            cargaDatos();  
                                            
         }
   });
   
}



function AsignacionDeBotonMod(BotMod,Alumno) // LE ASIGNA A CADA BOTON MODIFICAR UNA FUNCION QUE CONTIENE EL EL LEGAJO DEL ALUMNO A MODIFICAR.
{
   BotMod.onclick= function(){  

      $("#Ventana-Modal-Mod").removeClass("Ventana-Modal-Modi-Apagada");
      $("#Ventana-Modal-Mod").addClass("Ventana-Modal-Modif");
      ContenedorPrincipal.addClass("Principal-Pasivo");
      RequerimientoDesplegable(CarrerasFormModi);
      CompletaFormModAlumnos(Alumno.LEGAJO);     
      window.KeyLegajo=Alumno.LEGAJO;  // LE ASIGNO A CADA BOTON EL LEGAJO QUE VIENE DEL SERVIDOR (LEGAJO ORIGINAL), ESTO SIRVE PARA EL MOMENTO DE REALIZAR UNA MODIFICACION AL LEGAJO PODER RELACIONARLO CON EL DE LA BASE DE DATOS
    };

}



function CompletaFormModAlumnos(ValorLegajoAlumno)  // FUNCION QUE TIENE COMO ARGUMENTO EL LEGAJO DEL ALUMNO Y LE ASIGNA EL VALOR DEL LEGAJO. REALIZA EL REQUERIMIENTO CON LOS DATOS DEL MISMO.
{ 
   var AlumnoAjax =$.ajax({

         type:"post",
         url:"./ConexionServidor/SalidaAlumnoJson.php",
         data:{Legajo:ValorLegajoAlumno},
         success: function(respuestadelServer,estado)
         {        
            objAlumnos = JSON.parse(respuestadelServer);

            objAlumnos.ALUMNOS.forEach(alumno => {            
               $("#CodigoFormModi").val(alumno.CODCARRERA);
               $("#legajoFormModi").val(alumno.LEGAJO);
               $("#NombreFormModi").val(alumno.NOMBRE);
               $("#ApellidoFormModi").val(alumno.APELLIDO);
               $("#CuotaFormModi").val(alumno.CUOTA);
               $("#MateriasFormModi").val(alumno.MATERIASAPROBADAS);
               $("#FechaFormModi").val(alumno.FECHADEINSCRIPCION);
               $("#CarrerasFormModi").val(alumno.CARRERA);
               
             });                               
         }        
   });
    
}



 buttonCarga.click(cargaDatos);

    




 
 












