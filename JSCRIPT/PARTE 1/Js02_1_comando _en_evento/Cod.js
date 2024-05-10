
const button = document.getElementById("Alert")
const button2= document.getElementById("Escritura")

button.addEventListener("click",Alerta)
button2.addEventListener("click", escribir)

function Alerta()
{
    alert("Esto es una prueba")
}

function escribir()
{
 document.write("<h1>Hola! si ves esto es porque lo anterior ya no esta<h1>")
}

