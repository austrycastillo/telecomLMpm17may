console.log("Hola Js de vuelta");
var a;
let b;
function saludar() {
    // console.log("hola función")
    return "hola return";
}
const c = () => {
    console.log(`hola fechita`);
}
console.log(saludar());
c();
//arreglo
let datos = ["lunes", "martes", "miércoles", "jueves", "viernes"]
datos.forEach(dia => {
    console.log(dia);
})
console.log("****con for of*****")
for (dia of datos) {
    console.log(dia);
}
console.log("*****objetos*****")
//objetos
var comida = {
    nombre: 'bondiola',
    precio: 20,
    descripcion: 'rico'
}
for (key in comida) {
    console.log(key + ": " + comida[key]);
}
/*REVISAR MAPA
console.log("****MAPAS****")
comida.map(dato=>{
    console.log(dato)
})*/
function editar() {
    let h1 = document.getElementById("datis");
    console.log(h1)
    h1.innerHTML = "Hola Js con primera opción"
}
let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    let h1 = document.getElementById("datis");
    console.log(h1)
    h1.innerHTML = "Hola Js con segunda opción"
})