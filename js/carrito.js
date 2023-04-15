//creacion de modal para mostrar el carrito con los productos elegidos por el usuario
const pintarCarrito = () => {
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
        <p>$${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>Total: $${producto.cantidad * producto.precio}</p>
    `
    modalContainer.append(carritoContent)

    //creacion boton para eliminar producto del carrito
    let eliminar = document.createElement("span")
    eliminar.innerText = "X"
    eliminar.className = "delete-product"
    carritoContent.append(eliminar)

    eliminar.addEventListener("click", eliminarProducto)
    })

    //obtener el total de la compra
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
    //cracion footer modal
    const totalCompra = document.createElement("div")
    totalCompra.className = "total-content"
    totalCompra.innerHTML = `total a pagar: $${total}`
    modalContainer.append(totalCompra)
}

verCarrito.addEventListener("click", pintarCarrito)


//eliminar producto
const eliminarProducto = () => {
    const foundId = carrito.find((producto) => producto.id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId
    })

    contadorCarrito()
    pintarCarrito()
}



//mostrar cantidad de productos dentro del carrito
const contadorCarrito = () => {
    cantidadCarrito.style.display = "block"
    cantidadCarrito.innerText = carrito.length
}