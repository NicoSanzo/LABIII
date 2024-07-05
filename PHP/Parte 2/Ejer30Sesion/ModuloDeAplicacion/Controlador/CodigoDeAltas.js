 


 var BotonAltas=$("#BotonAlta");
 var FormularioAltas= $("#RespuestasDeAltas");
 
$("#CodigoFormAlta").attr('placeholder',"----");
$("#legajoFormAlta").attr('placeholder',"10000 - 25000");
$("#CuotaFormAlta").attr('placeholder',"$15000 - $150000");
$("#MateriasFormAlta").attr('placeholder',"0 - 120");
$("#NombreFormAlta").attr('placeholder',"ej:. Pepe");
$("#ApellidoFormAlta").attr('placeholder',"ej:. Monzon");



$(document).ready(function() {

    $("#CarrerasFormAlta").change(function() {
        rellenarCodCarrera(); 
    });
    
});


 BotonAltas.click(function(){

     
 var Legajo=$("#legajoFormAlta").val();
 var Nombre=$("#NombreFormAlta").val();
 var Apellido=$("#ApellidoFormAlta").val();
 var Cuota=$("#CuotaFormAlta").val();
 var Materias=$("#MateriasFormAlta").val();
 var Fecha=$("#FechaFormAlta").val();
 var Carrera=$("#CarrerasFormAlta").val();
    

   
    if (Legajo > 25000 || Legajo < 10000 || Legajo == "") 
        {window.FuncionGlobalRespuestaIncorrecta("Ingrese el Legajo Correctamente",FormularioAltas); } // Funcion Global del archivo ./Controlador/Comportamientos Ventanas Modales que recibe como argumento un string y el div de respuesta del formulario donde se va a mostrar
    else if (Nombre == "" || Nombre.length > 60) 
        { window.FuncionGlobalRespuestaIncorrecta("Ingrese un Nombre",FormularioAltas);} 
    else if (Apellido == "" || Apellido.length > 60) 
        { window.FuncionGlobalRespuestaIncorrecta("Ingrese un Apellido");} 
    else if (Cuota == "" || Cuota < 15000 || Cuota > 150000) 
        { window.FuncionGlobalRespuestaIncorrecta("Ingrese la Cuota Correctamente",FormularioAltas);} 
    else if (Materias == "" || Materias > 120) 
        { window.FuncionGlobalRespuestaIncorrecta("Ingrese la Cantidad de Materias Correctamente",FormularioAltas);} 
    else if (Fecha == "") 
        { window.FuncionGlobalRespuestaIncorrecta("Ingrese una Fecha",FormularioAltas);} 
     else if (Carrera == "") 
        { window.FuncionGlobalRespuestaIncorrecta("Seleccione una Carrera",FormularioAltas);} 
     else 
     {
        var formdatos = new FormData($("#FormularioAlta")[0]);
        formdatos.append("Carrera", $("#CarrerasFormAlta").val());
        var objAjax = $.ajax({
            method: "post",
            type: "post",
            enctype: 'multipart/form-data',
            url: "./ConexionServidor/Altas.php",
            processData: false,
            contentType: false,
            cache: false,
            data: formdatos,
            success: function (respuestadelServer, Estado) {
                console.log(respuestadelServer);
                window.FuncionGlobalRespuestaCorrecta(respuestadelServer,FormularioAltas);
                $("#FormularioAlta").trigger("reset");
                cargaDatos();
            },
            error: function () {
                alert("<h2>No se pudo procesar El Requerimiento</h2>");
            }
        });
    }
    
   
 });


    
function rellenarCodCarrera() {
    if ($("#CarrerasFormAlta").val() == "Ingenieria Quimica")
        { $("#CodigoFormAlta").val("ING-QMC");}
     else if ($("#CarrerasFormAlta").val() == "Ingenieria Aeronautica") 
        {$("#CodigoFormAlta").val("ING-AER");}
     else if ($("#CarrerasFormAlta").val() == "Ingenieria Bioquimica") 
        {$("#CodigoFormAlta").val("ING-BIO");}
     else if ($("#CarrerasFormAlta").val() == "Ingenieria en Sistemas") 
        {$("#CodigoFormAlta").val("ING-SIS");} 
    else if ($("#CarrerasFormAlta").val() == "Ingenieria Electronica") 
        {$("#CodigoFormAlta").val("ING-ELC");}
     else if ($("#CarrerasFormAlta").val() == "Tecnicatura Ferroviaria") 
        { $("#CodigoFormAlta").val("TEC-FER");}
     else if ($("#CarrerasFormAlta").val() == "Tecnicatura En Programacion") 
        {$("#CodigoFormAlta").val("TEC-PRO");}
    
}














    