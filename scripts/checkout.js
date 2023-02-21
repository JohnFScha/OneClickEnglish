//DOM
let checkoutCart = document.getElementById("checkoutCart")
let quantity = document.getElementById("itemQuantity")
let total = document.getElementById("total")
let checkoutForm = document.getElementById("pre-checkout")
let btnEnd = document.getElementById("btnEnd")

//RECIBO
let recibo = document.getElementById("receipt")
let horaActual = document.getElementById("current-time")
let resumen = document.getElementById("resumen")
let nombre = document.getElementById("invoiceName")
let ciudad = document.getElementById("invoiceCity")
let pais = document.getElementById("invoiceCountry")
let subtotal = document.getElementById("subtotal")
let tax = document.getElementById("tax")
let totalFinal = document.getElementById("totalFinal")

//INPUTS
let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let eMail = document.getElementById("email")
let city = document.getElementById("city")
let address = document.getElementById("address")
let country = document.getElementById("country")

//SETEO LA HORA Y EL DIA ACTUAL PARA EL RECIBO EN UNA VARIABLE:
const DateTime = luxon.DateTime
const fechaHoy = DateTime.now()
let fechaActual = fechaHoy.toLocaleString(DateTime.DATE_FULL)

//RECUPERANDO EL CARRITO DEL STORAGE
let productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
console.log(productosEnCarrito)
itemizedCart(productosEnCarrito)


//SETEAR EL TEXTO A LA CANTIDAD TOTAL DE ITEMS
quantity.innerText = `${productosEnCarrito.reduce((acc, cant) => acc + cant.quantity, 0)}`
calcularTotal(productosEnCarrito)

//FUNCION PARA IMPRIMIR EL STORAGE A LA LISTA
function itemizedCart (array) {
  for (let curso of array) {
    let newCurso = document.createElement("li")
    newCurso.className = "list-group-item d-flex justify-content-between lh-sm"
    newCurso.innerHTML = 
    `<div>
      <h6 class="my-0">${curso.id} - x${curso.quantity}</h6>
      <small>${curso.duration}</small>
    </div>
    <span><strong>€${curso.price}</strong></span>`
    checkoutCart.appendChild(newCurso)
  }
}

//CALCULAR TOTAL
function calcularTotal (array) {
  if(array.length == 1) {
    total.innerHTML = `
    <span>Total (EUR)</span>
    <strong>€${array[0].price * array[0].quantity}</strong>`
  } else if(array.length === 0) {
    total.className = "d-none"
  } else {
    let sum = array.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    total.innerHTML = `
    <span>Total (EUR)</span>
    <strong>€${sum}</strong>`
  }
}


//FUNCION PARA IMPRIMIR EL CARRITO AL RECIBO
function printReceipt (array) {
  let cant = 1
  for (let producto of array) {
    let newProducto = document.createElement("tr")
    newProducto.innerHTML = `
    <th scope="row">${cant++}</th>
    <td>${producto.id}</td>
    <td>${producto.quantity}</td>
    <td>€${producto.price}</td>
    <td>%${producto.discount}</td>
    <td>€${((producto.price * producto.quantity) - (producto.price * producto.quantity) * producto.discount)}</td>`
    resumen.appendChild(newProducto)
  }
}

//FUNCION PARA CALCULAR TOTAL/SUBTOTAL
function totalSubtotal (array) {
  let subTotal 
  if(array.length === 1) {
    subTotal = (array[0].price * array[0].quantity) * array[0].discount
  } else {
    subTotal = array.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  }
  return subTotal
}

//FINALIZAR COMPRA
btnEnd.addEventListener("click", ()=> {
  //Opcion de cerrar el ciclo o no
  Swal.fire({
    title: `End purchase?`,
    showDenyButton: true,
    showCloseButton: true,
    color: '#87189d',
    denyButtonColor: 'gray',
    confirmButtonColor: '#87189d',
    confirmButtonText: 'Yes',
    denyButtonText: `No`,
  }).then((result) => {
    //Si confirma, establezco un timeOut() para procesar los datos
    if (result.isConfirmed) {
      let timerInterval
      Swal.fire({
      title: 'Processing puchase...',
      timer: 3000,
      timerProgressBar: true,
      color: '#87189d',
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
      //Al finalizar el timeOut() imprimo al HTML el recibo
      if (result.dismiss === Swal.DismissReason.timer) {

        //Ocultamos desde CSS el formulario y mostramos el Recibo
        checkoutForm.className = "d-none"
        recibo.className = "animate__animated animate__zoomIn"

        //Llenamos el recibo con la informacion del formulario:
        nombre.innerText = `${firstName.value + ' ' + lastName.value}`
        ciudad.innerText = `${address.value + ' ' + city.value}`
        pais.innerText = `${country.value}`
        horaActual.innerHTML = `<i class="bi bi-check-circle-fill"></i> <span class="fw-bold">Creation Date: </span>${fechaActual}`

        //Llenamos la tabla con lo que haya en el carrito:
        printReceipt(productosEnCarrito)

        //Calculamos el subtotal:
        subtotal.innerHTML = `<span class="text-black me-4">SubTotal   </span>€${totalSubtotal(productosEnCarrito)}`

        //Los impuestos (15% del subtotal)
        tax.innerHTML = `<span class="text-black me-4">Tax (15%)   </span>€${(totalSubtotal(productosEnCarrito) * 0.15)}`

        //Total final (subtotal + impuestos)
        totalFinal.innerText = `€${((totalSubtotal(productosEnCarrito) * 0.15) + totalSubtotal(productosEnCarrito)).toFixed(2)}`

        //Finalmente borramos el Carrito y borramos el storage:
        productosEnCarrito = []
        localStorage.clear()
      }
    }) 
    //Llevo el vieport de nuevo al top para visualizar el recibo
    window.scrollTo({ top: 200, behavior: 'smooth' })
    } else if (result.isDenied) {
      //Si rechaza cerrar el ciclo, anuncio que revise el carrito.
      Swal.fire({
        title:`Please check cart!`, 
        icon: 'info',
        showConfirmButton: true,
        confirmButtonColor: '#87189d'
      })
    }
  })
})