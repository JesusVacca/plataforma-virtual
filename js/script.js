const hamburguesa = document.getElementById("hamburguesa");
console.log(hamburguesa)

hamburguesa.onclick = () =>{
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

