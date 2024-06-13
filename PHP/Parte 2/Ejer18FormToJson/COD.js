
var FORM= document.getElementById("Formulario");
var input_ingreso= document.getElementById("Ingreso");
var Principal= document.getElementById("prince");
var Moda=document.getElementById("Modal");
var input_cerrar= document.getElementById("Cerrar");

$("#Enviar").click(function()
{
    Confirmar = confirm("¿Seguro que quiere enviar los datos?")

    
    if(Confirmar)
    {
    if(FORM.checkValidity()==true)
        {


            $("#Resultado").empty();
            $("#Resultado").removeClass("EstadoReqProcesado");
            $("#Resultado").removeClass("EstadoReq");
            $("#Resultado").addClass("EstadoReqProcesando");
            $("#Resultado").append("<h3>Esperando respuesta... </h3>");

            
            $.ajax({

                type:"post",
                url: "./respuesta.php",
                data:{USUARIO:$("#User").val(), MAIL:$("#Mail").val(),NOMBRE:$("#Nombre").val(),APELLIDO:$("#Apellido").val(), NACIMIENTO:$("#NACIMIENTO").val() },
                success:function(respuestaDelServer,estado){

                        $("#Resultado").empty();
                        $("#Resultado").removeClass("EstadoReq");
                        $("#Resultado").addClass("EstadoReqProcesado");
                        $("#Resultado").append( "<h2> RESPUESTA </h2>" + "<p>" +  respuestaDelServer + "</p>"  );    
                    }

            });
        }
            
    else
        { alert("Ingrese los datos Faltantes");}
    }
    else
    {
    return
    }
    

});


input_ingreso.addEventListener("click",()=>{

    Principal.className="principalPasivo";
    Moda.className="ModalPrendido"  ;
});

input_cerrar.addEventListener("click",()=>{

    Principal.className="principal";
    Moda.className="Moda"  ;
    $("#Resultado").empty();
    $("#Resultado").removeClass("EstadoReqProcesado");
    $("#Resultado").removeClass("EstadoReqProcesando");
});



/*
$("#Boton").click(function()
{

    
     $("#Resultado").removeClass("ResultadoDevuelto");
     
     $("#Resultado").addClass("ResultadoEspera");
     
     $("#EstadodeRequerimiento").empty();
     

     $.ajax({

        type:"post",
        url: "./Respuesta/Cod.Php",
        data:{clave:$("#Enter").val()},
        success:function(respuestaDelServer,estado){

            
            $("#Resultado").removeClass("ResultadoEspera");
            $("#Resultado").addClass("ResultadoDevuelto");
            $("#Resultado").empty()
            $("#Resultado").append( "<h2>RESULTADO:</h2>" +"<h3>" + respuestaDelServer + "</h3>");
            $("#EstadodeRequerimiento").append("<h2>ESTADO DE REQUERIMIENTO:</h2>"+"<h1>" + estado + "</h1>");
            $("#EstadodeRequerimiento").removeClass("Estado");
            $("#EstadodeRequerimiento").addClass("EstadoResultado");

        }

     });
    
    });*/