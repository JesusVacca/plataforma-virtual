const cartContent = document.getElementById("cartContent");
const tbody = document.getElementById("tbody");
const precio = document.getElementById("precio");
var contadorCart = 0;



/**
 * Este metodo crea la lista de los botones que sirven para quitar
 * Los productos del carrito
 */
function botonesQuitarElementCarrito() {
    const botones = document.getElementsByClassName("cell-button");
    for (let index = 0; index < botones.length; index++) {
        const boton = botones[index];
        boton.onclick=()=>{
            tbody.removeChild(tbody.children[index]);
            botones[index] = null;
            document.getElementById("contador").textContent=calcularPrecioTotalCarrito();
        }
        
    }
}
for (let index = 0; index < botonesQuitarElementCarrito.length; index++) {
    const cadaBoton = array[index];
    console.log(cadaBoton);
    
}

/**
 * Este metodo es para calcular el precio total del carrito
 * @returns retorna el tamaño de la tabla
 */

function calcularPrecioTotalCarrito() {
    try {
        let valor = 0;
        for (let index = 0; index < tbody.children.length; index++) {
            const element = tbody.children[index];
            valor+=parseInt(element.children[element.children.length-1].textContent)
        }
        // document.getElementById("contador").innerText=contador;
        precio.innerText = valor;
        botonesQuitarElementCarrito();
        return tbody.children.length;
    } catch (error) {
        console.error("Error",error);
        return 0;
    }
}



// Funcinalidad del carrito de comprar.

const capas = document.getElementsByClassName("capa");
const botones = document.getElementsByClassName("button");

try {
    for (let index = 0; index < botones.length; index++) {
        const boton = botones[index];
        const capa = capas[index];
        boton.onclick=()=>{
            const tbody = document.getElementById("tbody");
            const row = document.createElement("div");
            const quitar = document.createElement("div");
            const codigo = document.createElement("div");
            const titulo = document.createElement("div");
            const precio = document.createElement("div");

            row.classList.add("row");
            quitar.classList.add("cell");
            codigo.classList.add("cell");
            titulo.classList.add("cell");
            precio.classList.add("cell");
            
            // Asignado los datos
            quitar.append(generateButtonCell())
            titulo.innerText = capa.children[0].textContent;
            codigo.innerText = index+1;
            precio.innerText = capa.children[1].children[1].textContent;
            
            //Agregando hijos
            row.append(quitar)
            row.append(codigo)
            row.append(titulo)
            row.append(precio)
            tbody.append(row);
            // contadorCart++;
            document.getElementById("contador").innerText= calcularPrecioTotalCarrito();
            
        }
        
    }
} catch (error) {
    console.error("Error",error);
}


/**
 * 
 * @returns retorna un boton con una img dentro la cual quitara el elemento 
 * que este es su posición actual
 */
function generateButtonCell() {
    const button = document.createElement("button")
    const img = document.createElement("img");
    button.classList.add("cell-button");
    img.src="img/svg/x-lg.svg";
    button.type = "button";
    button.append(img);
    return button;

}