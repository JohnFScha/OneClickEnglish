//DOM:
let searchBar = document.querySelector("#searchBar")
let cartList = document.getElementById("cartList")
let addToCart = document.querySelector("#addCart")
let courses = document.getElementById("courses")
let coursesInd = document.getElementById("coursesInd")
let coursesSp = document.getElementById("coursesSp")
let coursesCh = document.getElementById("coursesCh")
let searchHeader = document.getElementById("searchTitle")
let coincidencia = document.getElementById("coincidencia")
let deleteCart = document.getElementById("delete")
let checkoutCart = document.getElementById("checkoutCart")
let itemsInCart = document.getElementById("quantity")
let checkoutBtn = document.getElementById("checkout-btn")
let message = document.getElementById("form")
let deleteMessage = document.getElementById("deleteStudent")
let darken = document.getElementById("dark")

//FORM
let firstName = document.getElementById("first-name")
let lastName = document.getElementById("last-name")
let city = document.getElementById("city")
let info = document.getElementById("floatingTextarea")
let submitBtn = document.getElementById("createStudent")

//OBJETO ESTUDIANTE:

class Student {
  constructor(pNombre, sNombre, ciudad, sobreMi) {
    this.pNombre = pNombre,
    this.sNombre = sNombre,
    this.ciudad = ciudad,
    this.sobreMi = sobreMi
  }
}

//ALUMNOS:
let alumnos

//SETEAR ALUMNOS EN EL STORAGE:
if(localStorage.getItem("alumnos")){
  alumnos = JSON.parse(localStorage.getItem("alumnos"))
} else {
  alumnos = []
  localStorage.setItem("alumnos", alumnos)
}

//CURSOS: 
let cursos = []

//ASYNC DESDE CURSOS.JSON:
const cargarCursos = async () => {
  const response = await fetch("cursos.json")
  const data = await response.json()
  for(let curso of data) {
    cursos.push(curso)
  }
  localStorage.setItem("cursos", JSON.stringify(cursos))
}


//SETEAR CURSOS EN EL STORAGE:
if(localStorage.getItem("cursos")){
  for(let curso of JSON.parse(localStorage.getItem("cursos"))){
    cursos.push(curso)
  }
} else {
  cargarCursos()
}

console.log(cursos)