const hamburguesa = document.getElementById("hamburguesa");
const nav = document.getElementById("nav");
hamburguesa.onclick = () =>{
    nav.classList.toggle("active-nav");
}