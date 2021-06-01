let nombres = ["Alberto", "María", "Diego"]
let num1 = [4, 5, 6]
let num2 = [7, 8, 9]
//nombres.push("Juan")//agregar al final
//nombres.pop()//eliminal un dato al final
//nombres.unshift("Juan")//agrega al principio
//nombres.shift()//elimina al principio
//nombres.splice(1, 0,"Juan")
//let nums = num1.concat(num2)
// let nums = [...num1,...num2]
// console.log(nums)

// let alumno = {
//     "nombre": "Filomena",
//     "edad": 20,
//     "curso": "Js"
// }
// // console.log(alumno.nombre)
// // console.log(alumno.edad)
// let alumnos = [
//     {
//         "nombre": "Cleopatra",
//         "edad": 80
//     },
//     {
//         "nombre": "Juan",
//         "edad": 5
//     },

// ]
// console.log(alumnos[0].nombre)
// let tabla = document.querySelector("table")
// let tr = document.createElement("tr")
// let td = document.createElement("td")
// td.innerHTML = "Nombre"
// tr.appendChild(td)
// td = document.createElement("td")
// td.innerHTML = "Edad"
// tr.appendChild(td)
// tabla.appendChild(tr)
// for (var i = 0; i < alumnos.length; i++) {
//     tr = document.createElement("tr")//creamos el tag html
//     td = document.createElement("td")
//     td.innerHTML = alumnos[i].nombre//agregamos o modificamos info
//     tr.appendChild(td)//confirmar o agregar dentro de un tag
//     td = document.createElement("td")
//     td.innerHTML = alumnos[i].edad
//     tr.appendChild(td)
//     tabla.appendChild(tr)
// }


// let p = document.getElementById("parrafo")
// let a = document.createElement("a")
// a.innerText = "Ir a Buenas Caras ;)"
// a.href = "https://youtu.be/bmGUZ-R7SvI"
// a.target = "blank"
// p.appendChild(a)

//FUNCIONES
function saludar() {
    console.log("Holaaaaa función")
}

saludar()

function saludar2() {
    let mensaje = "Hola retornando"
    return mensaje;
}
console.log(saludar2())

function ganador(nombre) {
    console.log("Llegó el ganador " + nombre);
}
ganador("Fulano")
function ganador2(nombre = "Cleo") {
    console.log("Llegó el ganador " + nombre);
}
ganador2("Juan")
function sumar(a, b, c) {
    return a + b + c;
}
let x = 10;
let y = 25;
let d = 5;
document.write("La suma es " + sumar(x, y, d))

let m = function () {
    console.log("soy función anónima")
}
m()

let j = () => {
    console.log("soy flecha, lambda, arrow")
}
j()
let c = dato => console.log(dato)

c("lunes")
