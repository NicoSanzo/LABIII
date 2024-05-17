var button_estilo1 = document.getElementById("button1");
var button_estilo2 = document.getElementById("button2");
var button_estilo3 = document.getElementById("button3");
var button_estilo4 = document.getElementById("button4");

var lista= document.getElementById("Lista");




button_estilo1.addEventListener("click" , (cambiar)=>{

   lista.className="Estilo1";

})

button_estilo2.addEventListener("click" , (cambiar)=>{

    lista.className="Estilo2";
 
 })

 button_estilo3.addEventListener("click" , (cambiar)=>{

    lista.className="Estilo3";
 
 })

 button_estilo4.addEventListener("click" , (cambiar)=>{

    lista.className="Estilo4";
 
 })