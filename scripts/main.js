//INICIALIZACIÓN CARRITO:
let productosEnCarrito

//SETEAR CARRITO AL STORAGE
if(localStorage.getItem("carrito")) {
  productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
  initCartHTML(productosEnCarrito)
  itemsInCart.innerText = productosEnCarrito.reduce((acc, cant) => acc + cant.quantity, 0)
}else{
  productosEnCarrito = []
  localStorage.setItem("carrito", productosEnCarrito)
}

console.log(productosEnCarrito)

//INICIALIZACIÓN MAIN:
searchHeader.innerText = ""

printInd(cursos)
printSp(cursos)
printCh(cursos)

//BUSCADOR
searchBar.addEventListener("input", () => {
  search(searchBar.value, cursos)
})