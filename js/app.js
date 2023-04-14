let carrito = []

const productContainer = document.getElementById("product-container")

const verCarrito = document.getElementById("verCarrito")

const modalContainer = document.getElementById("modal-container")

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
        carrito.push({
            id : producto.id,
            img : producto.img,
            nombre : producto.nombre,
            precio : producto.precio
        })
        console.log(carrito)
    })
})


//creacion de modal para mostrar el carrito con los productos elegidos por el usuario
verCarrito.addEventListener("click", () => {
    //limpia el html que genero y evita repetir
    modalContainer.innerHTML = ""
    //mostrar carrito despues de cerrarlo
    modalContainer.style.display = "flex"
    //creacion header modal
    const modalHeader = document.createElement("div")
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `
    modalContainer.append(modalHeader)

    const modalButton = document.createElement("h1")
    modalButton.innerText = "x"
    modalButton.className = "modal-header-button"

    //funcion de cerrar el carrito
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none"
    })

    modalHeader.append(modalButton)

    //creacion body modal y mostrar los productos del carrito
    carrito.forEach((producto) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
    `
    modalContainer.append(carritoContent)
    })

    //obtener el total de la compra
    const total = carrito.reduce((acc, el) => acc + el.precio, 0)
    //cracion footer modal
    const totalCompra = document.createElement("div")
    totalCompra.className = "total-content"
    totalCompra.innerHTML = `total a pagar: $${total}`
    modalContainer.append(totalCompra)

})