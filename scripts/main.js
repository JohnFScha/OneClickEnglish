//CARGAR PAGINA...
let timerInterval
Swal.fire({
  title: 'Loading courses...',
  color: '#87189d',
  timer: 3000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    timerInterval = setInterval(() => {
      Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    searchHeader.innerText = ""
    printInd(cursos)
    printSp(cursos)
    printCh(cursos) 
  }
})

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

//BUSCADOR
searchBar.addEventListener("input", () => {
  search(searchBar.value, cursos)
})