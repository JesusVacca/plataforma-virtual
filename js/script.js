const hamburguesa = document.getElementById("hamburguesa");
const cart = document.getElementById("cart");
const listaBotonesAdd = document.getElementsByClassName("add-cart");
const tbody = document.getElementById("tbody");



cart.onclick = () =>{
    document.getElementById("carrito").classList.toggle("mostrar-carrito");
}


 
