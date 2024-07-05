





MensajeDeErrorLogin();

function MensajeDeErrorLogin()

{
    $('#RespuestaSesion').removeClass("RespuestaDeSesionError")
    $('#RespuestaSesion').removeClass("RespuestaDeSesionOculta");
    $('#RespuestaSesion').addClass("RespuestaDeSesionError")
    setTimeout(function(){
        $('#RespuestaSesion').fadeOut(2000, function() {
        $('#RespuestaSesion').addClass("RespuestaDeSesionOculta");
        $('#RespuestaSesion').removeClass("RespuestaDeSesionError");
        $('#RespuestaSesion').empty();
        });

    },2500)
        

    
   
}

