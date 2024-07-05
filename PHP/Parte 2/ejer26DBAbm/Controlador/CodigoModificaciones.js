
var BotonModi=$("#BotonMod");
var FormularioModif= $("#RespuestasModif");
 
$("#CodigoFormModi").attr('placeholder',"----");
$("#legajoFormModi").attr('placeholder',"10000 - 25000");
$("#CuotaFormModi").attr('placeholder',"$15000 - $150000");
$("#MateriasFormModi").attr('placeholder',"0 - 120");
$("#NombreFormModi").attr('placeholder',"ej:. Pepe");
$("#ApellidoFormModi").attr('placeholder',"ej:. Monzon");


$(document).ready(function() {

    $("#CarrerasFormModi").change(function() {
        rellenarCod();
    });
});



 BotonModi.click(function(){

    var KeyLegajoLocal= window.KeyLegajo; // ESTA VARIABLE ACTUA COMO IDENTIFICADOR EN CASO DE QUERER MODIFICAR EL LEGAJO, CONSERVA EL DATO DEL LEGAJO ORIGINAL (QUE SE ESTABLECE EN UNA VARIABLE GLOBAL) PARA PODER ENCONTRARLO EN LA TABLA SQL Y ESTABLECER EL NUEVO
    

 var Legajo=$("#legajoFormModi").val();
 var Nombre=$("#NombreFormModi").val();
 var Apellido=$("#ApellidoFormModi").val();
 var Cuota=$("#CuotaFormModi").val();
 var Materias=$("#MateriasFormModi").val();
 var Fecha=$("#FechaFormModi").val();
 var Carrera=$("#CarrerasFormModi").val();

    
    if (Legajo > 25000 || Legajo < 10000 || Legajo == "") 
        {window.FuncionGlobalRespuestaIncorrecta("Ingrese el Legajo Correctamente",FormularioModif); } // Funcion Global del archivo ./Controlador/Comportamientos Ventanas Modales que recibe como argumento un string y el div de respuesta del formulario donde se va a mostrar
    else if (Nombre == "" || Nombre.length > 60) 
        { window.FuncionGlobalRespuestaIncorrecta("Ingrese un Nombre",FormularioModif);} 
    else if (Apellido == "" || Apellido.length > 60) 
        { window.FuncionGlobalRespuestaIncorrecta("Ingrese un Apellido");} 
    else if (Cuota == "" || Cuota < 15000 || Cuota > 150000) 
        { window.FuncionGlobalRespuestaIncorrecta("Ingrese la Cuota Correctamente",FormularioModif);} 
    else if (Materias == "" || Materias > 120) 
        { window.FuncionGlobalRespuestaIncorrecta("Ingrese la Cantidad de Materias Correctamente",FormularioModif);} 
    else if (Fecha == "") 
        { window.FuncionGlobalRespuestaIncorrecta("Ingrese una Fecha",FormularioModif);} 
    else if (Carrera == "") 
        { window.FuncionGlobalRespuestaIncorrecta("Seleccione una Carrera",FormularioModif);} 
    else 
    {    


        var confirmar=confirm("¿DESEA REALIZAR LOS CAMBIOS?");
        if(confirmar)
        {
            var formdatos = new FormData($("#FormularioModificacion")[0]);
            formdatos.append("Carrera",$("#CarrerasFormModi").val());
            formdatos.append("KeyLegajo",KeyLegajoLocal); // LE PASO LA LLAVE IDENTIFICATORIA AL ARRAY DEL FORM, COMO UN OBJETO.

            var objAjax= $.ajax({

                method:"post",
                type:"post",
                enctype: 'multipart/form-data',
                url: "./ConexionServidor/Modificacion.php",
                processData:false,
                contentType:false,
                cache:false,
                data: formdatos,
                
                success:function(respuestadelServer,Estado){
                    console.log(respuestadelServer);
                    window.FuncionGlobalRespuestaCorrecta(respuestadelServer,FormularioModif);
                    cargaDatos();       
        
                },
                error: function(){       
                    alert("<h2>No se pudo procesar El Requerimiento</h2>");
                }           
            }) 
         }
    } 
});


    
function rellenarCod()
{

    if ($("#CarrerasFormModi").val() == "Ingenieria Quimica")
        { $("#CodigoFormModi").val("ING-QMC");}
     else if ($("#CarrerasFormModi").val() == "Ingenieria Aeronautica") 
        {$("#CodigoFormModi").val("ING-AER");}
     else if ($("#CarrerasFormModi").val() == "Ingenieria Bioquimica") 
        {$("#CodigoFormModi").val("ING-BIO");}
     else if ($("#CarrerasFormModi").val() == "Ingenieria en Sistemas") 
        {$("#CodigoFormModi").val("ING-SIS");} 
    else if ($("#CarrerasFormModi").val() == "Ingenieria Electronica") 
        {$("#CodigoFormModi").val("ING-ELC");}
     else if ($("#CarrerasFormModi").val() == "Tecnicatura Ferroviaria") 
        { $("#CodigoFormModi").val("TEC-FER");}
     else if ($("#CarrerasFormModi").val() == "Tecnicatura En Programacion") 
        {$("#CodigoFormModi").val("TEC-PRO");}

}