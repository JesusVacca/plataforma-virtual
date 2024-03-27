const listClose = document.getElementsByClassName("close");
const botonIcon = document.getElementsByClassName("icon");


for (let index = 0; index < botonIcon.length; index++) {
    const boton = botonIcon[index];
    boton.onclick=()=>{
        const close = listClose[index];
        close.onclick=()=>{
            document.getElementsByClassName("section")[index].style.display="none";
        }
        document.getElementsByClassName("section")[index].style.display="flex";

    }
    
    
}

function getImg() {
    const listFile = document.getElementsByClassName("file");
    for (let index = 0; index < listFile.length; index++) {
        const element = listFile[index];
        element.onchange=()=>{
            const reader = new FileReader();
            const file = element.files[0];
            if(file){
                reader.readAsDataURL(file);
                reader.onload=()=>{
                    document.getElementsByClassName("img")[index].src = reader.result;
                }
            }
        }
    }
}
