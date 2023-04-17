//getItem recupera los datos del localStorage, si no hay nada guardado carrito es un array vacio
let carrito = JSON.parse(localStorage.getItem("carritoJson")) || []

const productContainer = document.getElementById("product-container")

const verCarrito = document.getElementById("verCarrito")

const modalContainer = document.getElementById("modal-container")

const cantidadCarrito = document.getElementById("cantidadCarrito")

productos.forEach((producto) => {
    //creacion cards de productos
    let content = document.createElement("div")
    content.className = "product-item"
    content.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>${producto.desc}</p>
        <span class="price">$${producto.precio}</span>
    `
    productContainer.append(content)

    //creacion de boton comprar
    let comprar = document.createElement("button")
    comprar.innerText = "Comprar"
    comprar.className = "comprar"

    content.append(comprar)

    //detecta click sobre el boton comprar y agrega el elemento al carrito 
    comprar.addEventListener("click", () => {
    //validar cantidad de productos y si el producto existe en el carrito
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === producto.id)
        //suma un producto repetido al carrito
        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === producto.id) {
                    prod.cantidad++
                }
            })
        }else {
        //añadir los elementos que selecciona el usuario al carrito
        carrito.push({
            id : producto.id,
            img : producto.img,
            nombre : producto.nombre,
            precio : producto.precio,
            cantidad : producto.cantidad
        })            
        }
        console.log(carrito)
        contadorCarrito()
        carritoStorage()
    })
})


//localStorage del carrito
const carritoStorage = () => {
    let carritoJson = JSON.stringify(carrito)
    localStorage.setItem("carritoJson", carritoJson)
}