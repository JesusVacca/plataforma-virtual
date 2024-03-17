const cart = document.getElementById("cart");
const cart_content = document.getElementById("cartContent");
const closeCart = document.getElementById("closeCart");

cart.onclick = () =>{
    cart_content.classList.toggle("activeCartContent");
    closeCart.onclick = () =>{
        cart_content.classList.toggle("activeCartContent");
    }
}


window.addEventListener("scroll",function(){
    const boton = document.getElementById("return");
    const alturaPagina = document.documentElement.scrollHeight;
    const alturaVentana = window.innerHeight;
    var porcentajeScroll = (window.scrollY / (alturaPagina - alturaVentana)) * 100;
    if(porcentajeScroll >= 20){
        boton.style.display="block";
    }else boton.style.display="none";

})
const hamburguesa = document.getElementById("hamburguesa");
console.log(hamburguesa)

hamburguesa.onclick = () =>{
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

