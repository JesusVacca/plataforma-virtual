const hamburguesa = document.getElementById("hamburguesa");

// Este es el div que contiene las pantallas 
const pantallas = document.getElementById("pantallasH");



function creadorPantalla() {
    eliminarHijos()
    const selectorPantallas = document.getElementById("numeroPantallaH");
    const pantallaContenedor = document.createElement("div");
    pantallaContenedor.classList.add("pantallas-content");
    for (let index = 0; index <selectorPantallas.value; index++) {
        const inputPantalla = document.createElement("input");
        const inputPin = document.createElement("input");
        inputPantalla.type = "text";
        inputPantalla.placeholder = "Pantalla "+(index+1);
        inputPin.type = "text";
        inputPin.placeholder = "Pin "+(index+1);
        inputPantalla.id =  "Pantalla"+(index+1);
        inputPin.id =  "Pin"+(index+1);
        pantallaContenedor.append(inputPantalla,inputPin);
    }
    pantallas.append(pantallaContenedor);
}
function eliminarHijos() {
    if(pantallas.hasChildNodes()){
        for (let index = 0; index < pantallas.children.length; index++) {
            const element = pantallas.children[index];
            pantallas.removeChild(element);
            
        }
    }
}




hamburguesa.onclick = () =>{
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    hamburguesa.classList.toggle("active");
}
window.addEventListener("scroll",function(){
    const boton = document.getElementById("return");
    const alturaPagina = document.documentElement.scrollHeight;
    const alturaVentana = window.innerHeight;
    var porcentajeScroll = (window.scrollY / (alturaPagina - alturaVentana)) * 100;
    if(porcentajeScroll >= 30){
        boton.style.display="block";
        const nav = document.getElementById("nav");
        if(nav.classList.contains("active")&& hamburguesa.classList.contains("active")){
            nav.classList.remove("active");
            hamburguesa.classList.remove("active");
        }

    }else boton.style.display="none";

})

// Funcion que me permite hacer filtros

function fillterTable(table,input_buscar) {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById(input_buscar);
    filter = input.value.toUpperCase();
    table = document.getElementById(table);
    tr = table.getElementsByClassName("row");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByClassName("cell")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}

// Vamos a darle funcionalidad a los enlaces de la tabla
function tableLink(enlaces) {
    const allLinks = document.getElementsByClassName(enlaces);
    const formProduct = document.getElementById("form-pruduct");
    for (let index = 0; index < allLinks.length; index++) {
        const cadaLink = allLinks[index];
        cadaLink.onclick=()=>{
            formProduct.style.display="none";
        }
        
    }
}