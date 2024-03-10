
function cambiarColor(){
    variable_album = document.getElementById("album");
    variable_album.style.backgroundColor  = "blue";
}

function cambiarTamano(){
    const clase_imagen  = document.getElementsByClassName("imagen")
    const clase_imagen1 = clase_imagen[0];
    clase_imagen1.style.width = "250px";
    clase_imagen1.style.height = "auto"; 
    console.log(clase_imagen1);

}