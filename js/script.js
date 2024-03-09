const hamburguesa = document.getElementById("hamburguesa");
const cart = document.getElementById("cart");


cart.onclick = () =>{
    document.getElementById("carrito").classList.toggle("mostrar-carrito");
}