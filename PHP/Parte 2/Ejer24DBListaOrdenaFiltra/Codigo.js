
var body= $("#tbody");
var buttonCarga= $("#Cargar");
var buttonvaciar= $("#Vaciar");
var DesplegableCarreras= $("#Carreras");
var Orden= $("#Filtro");
var Registros=$("#REGISTROS");


$(document).ready(function(){
    Registros.empty();
    var Registro=document.createElement("h2");
    Registro.innerHTML= "NUMERO DE REGISTROS: " + "0" ;
    Registros.append(Registro);
})


buttonvaciar.click(function(){
   body.empty();
   Registros.empty();
   var Registro=document.createElement("h2");
   Registro.innerHTML= "NUMERO DE REGISTROS: " + "0" ;
   Registros.append(Registro);
})



var RequireAjax = $.ajax
    ({
         type:"post",
         url:"./Desplegable.php",
         success:function(respuestadelServer,Estado)
         {
                var descCarreras= JSON.parse(respuestadelServer); 
                    descCarreras.CARRERAS.forEach(function(carrera)
                    {
                     var opciones = document.createElement("option");
                     opciones.setAttribute("value",carrera.Carrera);
                     opciones.innerHTML=carrera.Carrera;
                     DesplegableCarreras.append(opciones);

                    });
                    DesplegableCarreras.val("");               
         }, 
         error: function(){      

            DesplegableCarreras.html("<h2>No se pudo Conectar con la BD</h2>");
         }  
         
    })    
  


 function cargaDatos()
 {

    body.empty();
    body.html("<h2>ESPERANDO RESPUESTA...</h2>");
    $.ajax
    ({
         type:"post",
         url:"./OrdenamientoConFiltro.php",
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
            alert( Estado + "\n\n" + respuestadelServer);
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
            
                fila.append(CODCARRERA);
                fila.append(LEGAJO);
                fila.append(NOMBRE);
                fila.append(APELLIDO);
                fila.append(CUOTA);
                fila.append(MATERIASAPROBADAS);
                fila.append(FECHA);
                fila.append(CARRERA);
                tbody.append(fila);
            
            } )
            
            Registros.empty();
            var Registro=document.createElement("h2");
            Registro.innerHTML= "NUMERO DE REGISTROS: " + objJson.CANTIDADALUMNOS ;
            Registros.append(Registro);
            DesplegableCarreras.val(""); 
         } ,   
         error: function(){      

            body.html("<h2>ERROR, No se pudo Procesar el requerimiento</h2>");
         }
         
          


    });
 }

 

 buttonCarga.click(cargaDatos);

    




 













