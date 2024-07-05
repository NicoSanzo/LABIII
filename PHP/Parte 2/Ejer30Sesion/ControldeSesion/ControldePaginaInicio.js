



$(document).ready(function()
{
    var objAjax = $.ajax
    ({
        method: "post",
        url: "./DarDatosDeSesion.php",       
        success: function (respuestadelServer) 
        {
         let Datos= JSON.parse(respuestadelServer);
            $("#USUARIO").val(Datos.USER);
            $("#HASH").val(Datos.ID);
            $("#INGRESOS").val(Datos.CONTADOR); 

         
        },
    }) 
})




$("#IrATabla").click(function(){

    location.href="../ModuloDeAplicacion/index.php"; 
   
})



$('#LogOut').click(function(){
   
    location.href="./DestruirSesion.php";

}) 



