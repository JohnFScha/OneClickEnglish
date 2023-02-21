//FUNCIONES:

//IMPRIMIR CURSOS:
function printInd (array) {
  array.forEach((curso) => {
    if (curso.clase.includes("individual")) {
      let newCoursesInd = document.createElement("div")
      newCoursesInd.className = "col"
      newCoursesInd.innerHTML = 
      `<div id="${curso.id}" class="card animate__animated animate__zoomIn">
        <div class="card-body d-flex flex-column align-items-center">
          <p class="card-text">${curso.id}</p>
          <h2 class="card-title">${curso.duration}</h2>
          <h1 class="card-text display-1">€${curso.price}</h1>
          <button type="button" class="btn btn-outline-primary" id="addCart${curso.clase}">Add to cart</button>
        </div>
      </div>`
      coursesInd.appendChild(newCoursesInd)
      
      //AGREGAR AL CARRITO
      let agregarBtn = document.getElementById(`addCart${curso.clase}`)
      agregarBtn.addEventListener("click", () => {
        Swal.fire({
          title: `Do you want to add ${curso.id} to the cart?`,
          showDenyButton: true,
          showCloseButton: true,
          color: '#87189d',
          denyButtonColor: 'gray',
          confirmButtonColor: '#87189d',
          confirmButtonText: 'Add',
          denyButtonText: `Don't add`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title:`¡Added ${curso.id} to the cart!`, 
              icon: 'success',
              showConfirmButton: true,
              confirmButtonColor: '#87189d'
            })
            addCart(curso)
          } else if (result.isDenied) {
            Swal.fire({
              title:`${curso.id} not added`, 
              icon: 'info',
              showConfirmButton: true,
              confirmButtonColor: '#87189d'
            })
          }
        })
      })
    }
  });
}

function printSp (array) {
  array.forEach(curso => {
    if (curso.clase.includes("special")) {
      let newCoursesSp = document.createElement("div")
      newCoursesSp.className = "col"
      newCoursesSp.innerHTML = 
      `<div id="${curso.id}" class="card animate__animated animate__zoomIn">
        <div class="card-body d-flex flex-column align-items-center">
          <p class="card-text">${curso.id}</p>
          <h2 class="card-title">${curso.duration}</h2>
          <h1 class="card-text display-1">€${curso.price}</h1>
          <button type="button" class="btn btn-outline-primary" id="addCart${curso.clase}">Add to cart</button>
        </div>
      </div>`
      coursesSp.appendChild(newCoursesSp)

      //AGREGAR AL CARRITO
      let agregarBtn = document.getElementById(`addCart${curso.clase}`)
      agregarBtn.addEventListener("click", () => {
        Swal.fire({
          title: `Do you want to add ${curso.id} to the cart?`,
          showDenyButton: true,
          showCloseButton: true,
          color: '#87189d',
          denyButtonColor: '#87189d',
          confirmButtonColor: '#87189d',
          confirmButtonText: 'Add',
          denyButtonText: `Don't add`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title:`¡Added ${curso.id} to the cart!`, 
              icon: 'success',
              showConfirmButton: true,
              confirmButtonColor: '#87189d'
            })
            addCart(curso)
          } else if (result.isDenied) {
            Swal.fire({
              title:`${curso.id} not added`, 
              icon: 'info',
              showConfirmButton: true,
              confirmButtonColor: '#87189d'
            })
          }
        })
      })
    }
  });
}

function printCh (array) {
  array.forEach(curso => {
    if (curso.clase.includes("coaching")) {
      let newCoursesCh = document.createElement("div")
      newCoursesCh.className = "col"
      newCoursesCh.innerHTML = 
      `<div id="${curso.id}" class="card animate__animated animate__zoomIn">
        <div class="card-body d-flex flex-column align-items-center">
          <p class="card-text">${curso.id}</p>
          <h2 class="card-title">${curso.duration}</h2>
          <h1 class="card-text display-1">€${curso.price}</h1>
          <button type="button" class="btn btn-outline-primary" id="addCart${curso.clase}">Add to cart</button>
        </div>
      </div>`
      coursesCh.appendChild(newCoursesCh)

      //AGREGAR AL CARRITO
      let agregarBtn = document.getElementById(`addCart${curso.clase}`)
      agregarBtn.addEventListener("click", () => {
        Swal.fire({
          title: `Do you want to add ${curso.id} to the cart?`,
          showDenyButton: true,
          showCloseButton: true,
          color: '#87189d',
          denyButtonColor: '#87189d',
          confirmButtonColor: '#87189d',
          confirmButtonText: 'Add',
          denyButtonText: `Don't add`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title:`¡Added ${curso.id} to the cart!`, 
              icon: 'success',
              showConfirmButton: true,
              confirmButtonColor: '#87189d'
            })
            addCart(curso)
          } else if (result.isDenied) {
            Swal.fire({
              title:`${curso.id} not added`, 
              icon: 'info',
              showConfirmButton: true,
              confirmButtonColor: '#87189d'
            })
          }
        })
      })
    }
  });
}


//BUSCADOR:
function coincidencias (array) {
  coincidencia.innerHTML = ""
  
  for (let curso of array) {
    let newCoincidencia = document.createElement("div")
    newCoincidencia.className = "card p-3 m-3"
    newCoincidencia.id = `${curso.id}`
    newCoincidencia.innerHTML = 
    `<div class="card-body d-flex flex-column align-items-center p-3">
    <p class="card-text">${curso.id}</p>
    <h2 class="card-title">${curso.duration}</h2>
    <h1 class="card-text display-1">€${curso.price}</h1>
    <button type="button" class="btn btn-outline-primary" id="addCart${curso.clase}">Add to cart</button>
    </div>`
    coincidencia.appendChild(newCoincidencia)
    
    //AGREGAR AL CARRITO
    let agregarBtn = document.getElementById(`addCart${curso.clase}`)
    agregarBtn.addEventListener("click", () => {
      Swal.fire({
        title: `Do you want to add ${curso.id} to the cart?`,
        showDenyButton: true,
        showCloseButton: true,
        color: '#87189d',
        denyButtonColor: '#87189d',
        confirmButtonColor: '#87189d',
        confirmButtonText: 'Add',
        denyButtonText: `Don't add`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title:`¡Added ${curso.id} to the cart!`, 
            icon: 'success',
            showConfirmButton: true,
            confirmButtonColor: '#87189d'
          })
          addCart(curso)
        } else if (result.isDenied) {
          Swal.fire({
            title:`${curso.id} not added`, 
            icon: 'info',
            showConfirmButton: true,
            confirmButtonColor: '#87189d'
          })
        }
      })
    })
  }
}

//FUNCION BUSCADORA:
function search (cursoBuscado, array) {
  let busqueda = array.filter(
    curso => curso.id.toLowerCase().includes(cursoBuscado.toLowerCase()) || curso.duration.toLowerCase().includes(cursoBuscado.toLowerCase()) || curso.clase.toLowerCase().includes(cursoBuscado.toLowerCase())
    )
    if (busqueda.length == 0) {
      coincidencia.innerHTML = `<h1 class="text-center display-5 m-auto">This product is not in our list</h1>`
      courses.className = "hidden"
      darken.className = "dark animate__animated animate__fadeIn"
      coincidencia.className = "container d-flex flex-row flex-nowrap justify-content-center mb-5 animate__animated animate__bounceIn"
    } else if (cursoBuscado.length === 0) {
      coincidencia.innerHTML = ""
      searchHeader.innerText = ""
      darken.className = ""
      courses.className = ""
      coincidencia.className = "container d-flex flex-row flex-nowrap justify-content-center mb-5"
    } else {
      coincidencia.innerHTML = ""
      courses.className = "hidden"
      darken.className = "dark animate__animated animate__fadeIn"
      coincidencia.className = "container d-flex flex-row flex-nowrap justify-content-center mb-5 animate__animated animate__bounceIn"
      searchHeader.innerText = "Search Results:"
      coincidencias(busqueda)
    }
  }
  
//AÑADIR AL CARRITO:
function addCart(curso) {
  let cursoAgregado = productosEnCarrito.find((elem) => elem.clase == curso.clase)
  if (cursoAgregado == undefined) {
    productosEnCarrito.push(curso)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    cart
  } else {
    cursoAgregado.quantity++
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
  }
  console.log(productosEnCarrito)
  cartHTML(productosEnCarrito)
  
}
  
//IMPRIMIR AL CARRITO:

//DESDE EL STORAGE:  (no encontré la forma de reutilizar la funcion cartHTML(), por lo que modifique una sola linea para lograr imprimir correctamente lo que ya esta en el storage)
function initCartHTML (array) {
  for (let curso of array) {
    let newCurso = document.createElement("ul") // <-- linea modificada
    newCurso.className = "nav nav-tabs d-flex justify-content-between flex-nowrap"
    newCurso.innerHTML = 
      `<li class="nav-item m-2">${curso.id}</li> 
      <li class="nav-item m-2">${curso.duration}</li>
      <li class="nav-item m-2">€${curso.price}</li>
      <li class="nav-item m-2">x${curso.quantity}</li>`
    cartList.appendChild(newCurso)
  }
}

//AÑADIENDO
function cartHTML(array) {
  cartList.innerHTML = ""
  for (let curso of array) {
    let newCurso = document.createElement("ul")
    newCurso.className = "nav nav-tabs d-flex justify-content-between flex-nowrap"
    newCurso.innerHTML +=
      `<li class="nav-item m-2">${curso.id}</li> 
      <li class="nav-item m-2">${curso.duration}</li>
      <li class="nav-item m-2">€${curso.price}</li>
      <li class="nav-item m-2">x${curso.quantity}</li>`  
    cartList.appendChild(newCurso)
  }
  itemsInCart.innerText = array.reduce((acc, cant) => acc + cant.quantity, 0)
}

  
//BORRAR CARRITO / RESETAR STORAGE:
deleteCart.addEventListener("click", () => {
  if(productosEnCarrito.length == 0) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Cart empty',
      background: '#87189d',
      color: '#ffde59'
    })
  } else {
    Swal.fire({
      icon: 'info',
      title: 'Delete cart?',
      showDenyButton: true,
      showCloseButton: true,
      color: '#87189d',
      denyButtonColor: '#87189d',
      confirmButtonColor: '#87189d',
      confirmButtonText: 'Delete',
      denyButtonText: `Keep items in cart`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Cart deleted', 
          icon: 'success',
          color: '#87189d'
        })
        productosEnCarrito = []
        localStorage.removeItem("carrito")
        cartList.innerHTML = ""
        itemsInCart.innerText = productosEnCarrito.length
      } else if (result.isDenied) {
        Swal.fire({
          title: 'Cart kept as is', 
          icon: 'info',
          color: '#87189d'
        })
      }
    })
  }
})

//IR AL CHECKOUT:
checkoutBtn.addEventListener("click", ()=> {
  //Chequéo que haya algo en el carrito, si no lo hay:
  if(productosEnCarrito.length == 0) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Cart empty',
      background: '#87189d',
      color: '#ffde59'
    })
  //Si hay algo, disparo un alert con un timeOut()
  } else {
    let timerInterval
    Swal.fire({
      title: 'Redirecting to Checkout',
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
      //Al finalizar el timeOut() redirijo al checkout:
      if (result.dismiss === Swal.DismissReason.timer) {
        window.open('./pages/checkout.html', '_self');
      }
    })
  } 
})

//CREAR ESTUDIANTE DESDE EL FORM:
submitBtn.addEventListener("click", (event) => {
  event.preventDefault()
  if(firstName.value == "" || lastName.value == "" || city.value == "" || info.value == "") {
    Swal.fire ({
      icon: 'error',
      title: 'Error',
      text: 'Info missing!',
      color: '#87189d'
    })
  } else {
    const nuevoAlumno = new Student (firstName.value, lastName.value, city.value, info.value)
    Swal.fire({
      title: 'Save your info?',
      text: "We'll use this for your receipt!",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#87189d',
      cancelButtonColor: '#87189d',
      confirmButtonText: 'Save info'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Saved!',
          text: `You're info has been saved`,
          icon: 'success'
        })
        alumnos.push(nuevoAlumno)
        localStorage.setItem("alumnos", JSON.stringify(alumnos))
        firstName.value = ""
        lastName.value = ""
        city.value = ""
        info.value = ""
        console.log(alumnos)
      }
    })
  }
})

//BORRAR FORM BUTTON:
deleteMessage.addEventListener("click", ()=> {
  if(firstName.value == "" && lastName.value == "" && city.value == "" && info.value == "") {
    Swal.fire ({
      icon: 'error',
      title: 'Error',
      text: 'No info provided!',
      color: '#87189d'
    })
  } else {
    Swal.fire({
      title: 'Delete info?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#87189d',
      cancelButtonColor: '#87189d',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Deleted!',
          text: `You're info has not been saved`,
          icon: 'warning'
        })
        firstName.value = ""
        lastName.value = ""
        city.value = ""
        info.value = ""
        localStorage.removeItem("alumnos")
      }
    })
  }
})