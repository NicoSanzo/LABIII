

$("Enter")


$("#Boton").click(function()
{

     $("#EstadodeRequerimiento").removeClass("EstadoResultado");
     $("#EstadodeRequerimiento").addClass("Estado");
     $("#Resultado").removeClass("ResultadoDevuelto");
     $("#Resultado").empty();
     $("#Resultado").addClass("ResultadoEspera");
     $("#Resultado").append("<h3>Esperando respuesta... </h3>");
     $("#EstadodeRequerimiento").empty();
     

     $.ajax({

        type:"post",
        url: "./respuesta.php",
        data:{clave:$("#Enter").val()},
        success:function(respuestaDelServer,estado){

            
            $("#Resultado").removeClass("ResultadoEspera");
            $("#Resultado").addClass("ResultadoDevuelto");
            $("#Resultado").empty();
            $("#Resultado").html( "<h2>RESULTADO:</h2>" +"<h3>" + respuestaDelServer + "</h3>");
            $("#EstadodeRequerimiento").append("<h2>ESTADO DE REQUERIMIENTO:</h2>"+"<h1>" + estado + "</h1>");
            $("#EstadodeRequerimiento").removeClass("Estado");
            $("#EstadodeRequerimiento").addClass("EstadoResultado");

        }

     });
    
    });
    

