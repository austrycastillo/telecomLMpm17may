/*
Desarrollar un sistemita de cajero automático,
utilizar prompt verificar la clave corre correcta
para mostrar un menu:
1 consulta 2 depósito 3 retiro 4 transferencia
utilizar el dom para colocar los mensajes
variables a usar:
clave, saldo, opción, monto
*/
// var clave, saldo = 300, opcion, monto, claveCo = 123;
// var div = document.querySelector("div");
// clave = parseInt(window.prompt("Escribe la clave de cajero"));
// if (clave == claveCo) {
//     opcion = parseInt(window.prompt("Escriba un número opción:\n1 saldo\n2 depósito\n3 retiro"));
//     switch (opcion) {
//         case 1:
//             div.innerHTML = "Tu saldo actual es " + saldo;
//             break;
//         case 2:
//             monto = parseInt(window.prompt("Escribe el monto a depositar"));
//             saldo += monto;//saldo = saldo + monto
//             div.innerHTML = "Depósito realizado correctamente, Tu saldo actual es " + saldo;
//             break;
//         case 3:
//             monto = parseInt(window.prompt("Escribe el monto a retirar"));
//             if (monto < saldo) {
//                 saldo -= monto;//saldo = saldo - monto
//                 div.innerHTML = "Retiro realizado correctamente, su saldo actual es " + saldo;
//             } else {
//                 div.innerHTML = "Saldo insuficiente";
//             }
//             break;
//         default:
//             div.innerHTML = "Opción inválida";
//             break;
//     }

// } else {
//     div.innerHTML = "Datos de acceso incorrecto!";
//     div.style.color = "red";
// }


/*
while(condición){
  instrucciones
  ajuste
}
*/
// var a = 1;
// while(a <= 10){

//     console.log("Hola");
//     a++;//a = a + 1
// }
//a = 11
//impr = Hola Hola Hola

/*
do{
    instrucciones
    ajuste
}while(condición)
*/
// var a = 1;
// do {
//     document.write(a + " - ");
//     a++;
// } while (a <= 10);

// var texto = "";
// do {
//     var palabra = window.prompt("Escribe una palabra");
//     texto += palabra;//texto = texto + palabra
//     texto += "";
//     //texto = texto + " " + palabra;
// } while (window.confirm("Sigues jugando????"));
// document.write("Escribiste: " + texto);

/*
for(inicio;condición;ajuste){
    instrucciones
}
*/
// for (var i = 1; i <= 10; i++) {
//     document.write("X" + i + " - ");
// }


/*
var--> redeclarable, redefinible, scope global
let--> no redeclarable, redefinible, no scope global
const-->no redeclarable, no redefinible, no scope global
*/
// var x = 2;
// console.log(x)
//                     if(true){
//                         var x = 4;
//                         console.log(x)
//                     }
// console.log(x)
// var x = 6;
// console.log(x)

// let x = 2;
// console.log(x);
//                 if(true){
//                     let x = 4;
//                     console.log(x); 
//                 }
// console.log(x);
// //let x = 6;//no puedo volver a declarar
// x = 6;
// console.log(x);

// const x = 2;
// console.log(x)
//                 if (true) {
//                     const x = 4;
//                     console.log(x)
//                 }
// console.log(x)
// //const x = 6;//no puedo volver a declarar
// //x = 6;//no podemos modificar su valor
// console.log(x)

// let f = new Date();
// //let g = f.getFullYear()
// let g = f.getDay();//3 día de la semana
// g= f.getDate();//26 fecha por día
// g = f.getMonth()//4
// console.log(g);

let edad = [20, 5, 4, 10, 80, 52];
let datos = ["Juan", 2, 80.2, true];
let nombre = new Array('Carlos', 'Ricardo', 'Ana');
console.log(nombre[2])
nombre[2] = "Teresa";
console.log(nombre[2])
console.log(edad.length)
var tam = edad.length;
for (var i = 0; i < tam; i++) {
    document.write(edad[i] + "<br>");
}
/*
atletas
crear un arreglo para guardar los nombres
otro para su tiempo
determinar el ganador
*/
let atletas = []
let tiempo = []
let cantidad = parseInt(window.prompt("Escribe la cantidad de atletas"));
for (var i = 0; i < cantidad; i++) {
    atletas[i] = window.prompt("Escribe el nombre del atleta " + i);
    tiempo[i] = parseInt(window.prompt("Escribe el tiempo que tardó" + i));
}