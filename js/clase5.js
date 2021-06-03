// // function saludar(nombre) {
// //     alert("Hola Js desde un evento" + nombre)
// //     alert(`Hola ${nombre}`)
// // }
// // let boton = document.getElementById("boton")
// // console.log(boton.id)
// // let mostrar = () => {
// //     console.log("mostrando algo")
// // }
// // //mostrar()
// // boton.onclick = mostrar

let alumnos = [
    {
        "nombre": "Cleopatra",
        "edad": 80
    },
    {
        "nombre": "Juan",
        "edad": 5
    }

]
function dibujarTabla() {
    let tabla = document.querySelector("table")
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    td.innerHTML = "Nombre"
    tr.appendChild(td)
    td = document.createElement("td")
    td.innerHTML = "Edad"
    tr.appendChild(td)
    tabla.appendChild(tr)
    for (var i = 0; i < alumnos.length; i++) {
        tr = document.createElement("tr")//creamos el tag html
        td = document.createElement("td")
        td.innerHTML = alumnos[i].nombre//agregamos o modificamos info
        tr.appendChild(td)//confirmar o agregar dentro de un tag
        td = document.createElement("td")
        td.innerHTML = alumnos[i].edad
        tr.appendChild(td)
        tabla.appendChild(tr)
    }
    document.querySelector("#nombre").value = ""
    document.querySelector("#edad").value = ""
}
dibujarTabla()
let agregar = document.querySelector("#agregar")
agregar.onclick = agregarDato

function agregarDato() {
    let tabla = document.querySelector("table")
    tabla.innerHTML = ""
    let nombre = document.querySelector("#nombre").value
    let edad = document.querySelector("#edad").value
    //console.log(nombre)
    alumnos.push({ 'nombre': nombre, 'edad': edad })
    dibujarTabla()
}

// let btnEncender = document.querySelector("#encender")
// let btnApagar = document.querySelector("#apagar")
// let imagen = document.querySelector("#imagen")
// btnEncender.onclick = encender
// btnApagar.onclick = apagar
// function encender(){
//     console.log(imagen.src)
//     imagen.src = 'on.gif'
// }
// function apagar(){
//     imagen.src = 'off.gif'
// }

//JQUERY
//$("SELECTOR").ACCIÓN()
//acciones: text, html, val, show, hide, click, remove,animate
//document.querySelector("h1") //Js puro
//let titulo = $("h1").text() //jquery
//let titulo = $("#titulo").text()
//let titulo = $(".titu").text()
//alert(titulo)
// $("#titulo").text('Hola Jquery')
// $("#d").click(desaparecer)
// function desaparecer(){
//     //$('#gato').hide()
//     $('#gato').fadeOut("slow")
// }
// $("#btn").click(function(){
//     $("#content").slideToggle("slow")
// })