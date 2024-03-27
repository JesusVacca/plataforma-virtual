const cart = document.getElementById("cart");
const cart_content = document.getElementById("cartContent");
const closeCart = document.getElementById("closeCart");
const listaImg = document.getElementsByClassName("img-movil");
const bannerMovil = document.getElementById("banner-content");
var contador = 0;
var porcentajeBanner = 100 / listaImg.length;




const botonLeft = document.getElementById("left");
const botonRigth = document.getElementById("rigth");

botonLeft.onclick =()=>{
    contador--;
    if(contador >= 0 && contador < listaImg.length){
        const move = (porcentajeBanner * contador) * -1;
        bannerMovil.style.transform = "translateX("+move+"%)";
    }if(contador < 0) contador = 0;

    
}
botonRigth.onclick =()=>{
    contador++;
    if(contador>=0 && contador < listaImg.length){
        const move = (porcentajeBanner * contador)*-1;
        bannerMovil.style.transform = "translateX("+move+"%)";
    }if(contador >= listaImg.length) contador = listaImg.length-1;
}

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
        const nav = document.getElementById("nav");
        if(nav.classList.contains("active")&& hamburguesa.classList.contains("active")){
            nav.classList.remove("active");
            hamburguesa.classList.remove("active");
        }

    }else boton.style.display="none";

})
const hamburguesa = document.getElementById("hamburguesa");

hamburguesa.onclick = () =>{
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    hamburguesa.classList.toggle("active");
}

