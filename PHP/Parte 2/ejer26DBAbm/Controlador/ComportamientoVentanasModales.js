
var BottonAltas= $("#Altas");
var ButtonCerrarAltas=$("#Cerrar");
var VentanaModalAltas=$("#Ventana-Modal-Alta");
var ContenedorPrincipal=$("#Contenedor-Principal");
var DesplegableModalModi=$("#CarrerasFormModi");  
var DesplegableModalAltas= $("#CarrerasFormAlta"); // CORRESPONDE AL ID DEL DESPLEGABLE DE LA VENTANA MODAL
var FormularioMod=$("#FormularioModificacion");
var ButtonCerrarVentanaMod=$("#Cerrar2");
var ButtonCerrarVentanaPdf=$("#CerrarPdf");
var VentanaModalPdfs= $("#LecturaPDF");
var FramePdf= $("#frame-pdf");




function LimpiarCampos(){
   
    $("#CodigoFormAlta").val("");
    $("#legajoFormAlta").val("");;
    $("#NombreFormAlta").val("");
    $("#ApellidoFormAlta").val("");
    $("#CuotaFormAlta").val("");
    $("#MateriasFormAlta").val("");
    $("#FechaFormAlta").val("");
    $("#CarrerasFormAlta").val("");
    $("#FechaFormAlta").val("");
}

//////////////////CIERRA LAS VENTANAS MODALES /////////////////



ButtonCerrarAltas.click(function(){

    //DesplegableModalAltas.empty();
    VentanaModalAltas.addClass("Ventana-Modal-Altas-Apagada");
    ContenedorPrincipal.removeClass("Principal-Pasivo");
    LimpiarCampos();

})



ButtonCerrarVentanaPdf.click(function(){

    //&VentanaModalPdfs.empty();
    VentanaModalPdfs.removeClass("LecturaPdfs");
    VentanaModalPdfs.addClass("LecturaPdfs-Apagada");
    ContenedorPrincipal.removeClass("Principal-Pasivo");
    $('#LecturaPDF #frame-pdf').remove(); //Esta funcion REMUEVE EL CONTENEDOR HIJO:frame-pdf DEL CONTENEDOR PADRE:LecturaPDF
    
})



ButtonCerrarVentanaMod.click(function(){

    FormularioMod.trigger("reset");
    $("#Ventana-Modal-Mod").removeClass("Ventana-Modal-Modif");
    $("#Ventana-Modal-Mod").addClass("Ventana-Modal-Modi-Apagada");
    ContenedorPrincipal.removeClass("Principal-Pasivo");
    DesplegableModalModi.empty();
    
 })



 BottonAltas.click(function(){

    
    VentanaModalAltas.addClass("Ventana-Modal-Altas");
    VentanaModalAltas.removeClass("Ventana-Modal-Altas-Apagada");
    ContenedorPrincipal.addClass("Principal-Pasivo");    
    })   


function VentanaDeRespuestaIncorrecta(Contenido,Formularioamostrar) // recibe como argumento el contenido:un string // y el div Del formulario donde lo va a a Mostrar
{
    Formularioamostrar.html(Contenido);
    Formularioamostrar.removeClass("Respuesta-oculta");
    Formularioamostrar.removeClass("Respuesta-Correcta");
    Formularioamostrar.addClass("Respuesta-Incorrecta");
    
    setTimeout(function(){
        Formularioamostrar.addClass("Respuesta-oculta")},3500)
}
window.FuncionGlobalRespuestaIncorrecta= VentanaDeRespuestaIncorrecta; // FUNCION GLOBAL QUE LE PONE FORMATO AL DIV DE RESPUESTA, (LAS FUNCIONES GLOBALES SE PUEDEN USAR ENTRE ARCHIVOS) // RECIBE UN STRING COMO ARGMUNETO



function VentanaDeRespuestaCorrecta(Contenido,Formularioamostrar) // recibe como argumento el contenido:un string // y el div Del formulario donde lo va a a Mostrar
{  
    Formularioamostrar.html(Contenido);
    Formularioamostrar.removeClass("Respuesta-oculta");
    Formularioamostrar.removeClass("Respuesta-Incorrecta");
    Formularioamostrar.addClass("Respuesta-Correcta");
    
    setTimeout(function(){
        Formularioamostrar.addClass("Respuesta-oculta")},3500)    
}
window.FuncionGlobalRespuestaCorrecta= VentanaDeRespuestaCorrecta;// FUNCION GLOBAL QUE LE PONE FORMATO AL DIV DE RESPUESTA, (LAS FUNCIONES GLOBALES SE PUEDEN USAR ENTRE ARCHIVOS) // RECIBE UN STRING COMO ARGMUNETO



////////////////////////REALIZA EL REQUERMIENTO AJAX PARA TRAER LOS DATOS DEL DESPLEGABLE DE LA TABLA MODAL/////////////////////////////
var RequireAjax = $.ajax
({
     type:"post",
     url:"./ConexionServidor/Desplegable.php",
     success:function(respuestadelServer,Estado)
     {
       
            var descCarreras= JSON.parse(respuestadelServer); 
                descCarreras.CARRERAS.forEach(function(carrera)
                {
                 var opciones = document.createElement("option");
                 opciones.setAttribute("value",carrera.Carrera);
                 opciones.innerHTML=carrera.Carrera;
                 DesplegableModalAltas.append(opciones);
                 
                });
                             
     }, 
     error: function(){      

        DesplegableModalAltas.html("<h2>No se pudo Realizar El Requerimiento</h2>");
     } 
})