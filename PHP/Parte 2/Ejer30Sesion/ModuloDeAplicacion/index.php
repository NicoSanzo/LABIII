

<?php
 require_once("../ControldeSesion/SesionCheck.php");
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./Interfaz/StyleVentanasModales.css">
    <link rel="stylesheet" href="./Interfaz/StyleGeneral.css">
    
    <title>Ejer30Sesion</title>
</head>
<body>




    <div id="LecturaPDF" class="LecturaPdfs-Apagada">
        <button id="CerrarPdf"  class="BotonCerrar" >X</button>
    </div>


    
<!-- FORMULARIO DE ALTA--->
     <div id="Ventana-Modal-Alta" class="Ventana-Modal-Altas-Apagada">

        
       
        <header>FORMULARIO DE ALTA
            <button id="Cerrar"  class="BotonCerrar" >X</button>
        </header>
        <form id="FormularioAlta" class="Form" enctype='multipart/form-data' method="post">
            <div>
                <label for="CodigoFormAlta">COD-CARRERA</label> 
                <input type="text" id="CodigoFormAlta" name="CodigoA" readonly required>
            </div>
            <div>
                <label for="legajoFormAlta">LEGAJO</label> 
                <input type="number" id="legajoFormAlta" name="legajoA"  required>
            </div>
            <div>
                <label for="NombreFormAlta">NOMBRE</label> 
                <input type="text" id="NombreFormAlta" name="NombreA"  required>
            </div>
            <div>
                <label for="ApellidoFormAlta">APELLIDO</label> 
                <input type="text" id="ApellidoFormAlta" name="ApellidoA"  required>
            </div>
            <div>
                <label for="CuotaFormAlta">CUOTA</label> 
                <input type="number"  id="CuotaFormAlta" name="CuotaA" required>
            </div>
            <div>
                <label for="MateriasFormAlta">MATERIAS APROBADAS</label> 
                <input type="number" id="MateriasFormAlta" name="MateriasA" required>
            </div>
            <div>
                <label for="FechaFormAlta">FECHA</label> 
                <input type="date" id="FechaFormAlta" name="FechaA"  required>
            </div>
            <div>
                <label for="CarrerasFormAlta">CARRERAS</label> 
                <select  id="CarrerasFormAlta" name="CarreraA" required >
                    <option selected hidden value=''></option>  <!--Crea una opcion en Blanco oculto para poder validarla luego en el javascript antesd e enviarla-->
                </select>
               
             </div>
            <div>
                <label for="ArchivoA">ARCHIVO</label> 
                <input type="file" name="ArchivoFormAlta" id="ArchivoA">
            </div>  
            
            <div class="Respuesta-oculta" id="RespuestasDeAltas">  </div>
        </form>

        <footer><button id="BotonAlta" class="BotonModal"> ALTA REGISTRO </button></footer>
     
    </div>



<!-- FORMULARIO DE MODIFICACION--->


    <div id="Ventana-Modal-Mod" class="Ventana-Modal-Modi-Apagada">
       
        <header>FORMULARIO DE MODIFICACION
            <button id="Cerrar2" class="BotonCerrar">X</button>
        </header>
        <form id="FormularioModificacion" class="Form" enctype="multipart/form-data" method="post">
            <div>
                <label for="CodigoFormModi">COD-CARRERA</label> 
                <input type="text" name="CodigoFormModi" id="CodigoFormModi" readonly required>
            </div>
            <div>
                <label for="legajoFormModi">LEGAJO</label> 
                <input type="text" name="legajoFormModi" id="legajoFormModi"  required>
            </div>
            <div>
                <label for="NombreFormModi">NOMBRE</label> 
                <input type="text" name="NombreFormModi" id= "NombreFormModi" required>
            </div>
            <div>
                <label for="ApellidoFormModi">APELLIDO</label> 
                <input type="text" name="ApellidoFormModi" id="ApellidoFormModi" required>
            </div>
            <div>
                <label for="CuotaFormModi">CUOTA</label> 
                <input type="number" name="CuotaFormModi" id="CuotaFormModi" required>
            </div>
            <div>
                <label for="MateriasFormModi">MATERIAS APROBADAS</label> 
                <input type="number" name="MateriasFormModi" id="MateriasFormModi" required>
            </div>
            <div>
                <label for="FechaFormModi">FECHA</label> 
                <input type="date" name="FechaFormModi" id="FechaFormModi" required>
            </div>
            <div>
                <label for="CarrerasFormModi">CARRERAS</label> 
                <select id="CarrerasFormModi" name="CarrerasFormModi" required></select>
             </div>
            <div>
                <label for="ArchivoFormModi">ARCHIVO</label> 
                <input type="file" id="ArchivoFormModi" name="ArchivoFormModi" >
            </div>  

            <div class="Respuesta-oculta" id="RespuestasModif">  </div>
        </form>

        <footer><button id="BotonMod" > MODIFICAR REGISTRO </button></footer>
     
    </div>
    
    

    <div id="Contenedor-Principal" class="Principal">
        <header> 
            <h2>INSCRIPTOS</h2>
            <div id="header-Input"> 
                <label for="Filtro"> ORDEN: </label> 
                <input type="text" name="Filtro" id="Filtro" readonly> 
                
            </div>
            <button id="Logout"> Cerrar Sesion </button>
            
        </header>
        
        <table>
            <thead>
                <tr id="Encabezados">
                    <td class="Columnas" id="COD-CARR">Cod-Carrera</td>
                    <td class="Columnas" id="LEG">Legajo</td>
                    <td class="Columnas" id="NOM">Nombre</td>
                    <td class="Columnas" id="APE">Apellido</td>
                    <td class="Columnas" id="CUO">Cuota</td>
                    <td class="Columnas" id="MATAPR">Materias Aprobadas</td>
                    <td class="Columnas" id="FECH">Fecha de Inscripcion</td>
                    <td class="Columnas" id="CARR">Carrera</td>
                    <td class="Columnas1" id="Pdf">PFD</td>
                    <td class="Columnas1" id="MOD">MODIFICACION</td>
                    <td class="Columnas1" id="BAJA">BAJA</td>
                    
                </tr> 
                <tr id="inputs">  
                    <td id="Entrada1"><input  type="text"  id="CodCarrera"></td>
                    <td id="Entrada2"><input  type="text"  id="Legajo"></td>
                    <td id="Entrada3"><input  type="text"  id="Nombre"></td>
                    <td id="Entrada4"><input  type="text"  id="Apellido"></td>
                    <td id="Entrada5"><input  type="text"  id="Cuota"></td>
                    <td id="Entrada6"><input  type="text" id="Materias"></td>
                    <td id="Entrada7"><input  type="text"  id="Fecha"></td>
                    <td id="Entrada8"><select   id="Carreras"></select></td> 
                    <td id="pdfsinput" class="Restante" ></td>
                    <td class="Restante" ></td>
                    <td class="Restante" ></td>
                </tr>
            </thead>

            <tbody id="tbody"></tbody>

            <tfoot>
                <tr id="PieTabla" ></tr>

                <tr id="Botones"> 
                    <td><button  class="Boton" id="Cargar"> CARGAR DATOS</button></td>
                    <td><button class="Boton" id="Vaciar"> VACIAR </button></td>
                    <td><button class="Boton" id="Limpiar"> LIMPIAR FILTROS </button></td>
                    <td><button class="Boton" id="Altas"> ALTAS </button></td>
                </tr> 
            </tfoot>
        </table>
        <footer id="REGISTROS">
        </footer>
    </div>

<script src="./Jquery/jquery-3.7.1.min.js"></script>  
<script src="./Controlador/ComportamientoVentanasModales.js"></script> 
<script src="./Controlador/CargaInputOrdenamiento.js"></script>    
<script src="./Controlador/CodigoGeneralDeTabla.js"></script>
<script src="./Controlador/CodigoDeAltas.js"></script> 
<script src="./Controlador/CodigoModificaciones.js"></script> 


</body>

</html>