/*
if(condición){
    instrucciones
}

if(condición){
    instrucciones
}else{
    instrucciones
}

if(condición){
    if(condición){
        instrucciones
    }else{
        instrucciones
    }
}else{
    instrucciones
}


if(condición){
    instrucciones
}else if(condición){
    instrucciones
}else if(condición){
    instrucciones
}else{
    instrucciones
}
*/
// var a = 20;
// if (a < 10) {
//     console.log(a + " es mayor que 10");
// } else {
//     console.log(a + " no es mayor que 10");
// }

/*
boliche de 18 años hasta los 25
verificar si puedo acceder, en caso positivo
verificar si tengo 21 para bebida gratis
en caso que no pueda acceder al boliche
indicar la razón
*/
// var edad = parseInt(window.prompt("Escribe tu edad"));
// if (edad >= 18 && edad <= 25) {
//     document.write("Bienvenid@ a Black Jagger 😜");
//     if(edad == 21){
//         document.write("...pasa pibe en la barra hay trago gratis para vos");
//     }
// }else{
//     document.write("No puede pasar ☹️");
//     if(edad < 18){
//         document.write("...por bebito");
//     }else{
//         document.write("...por viejito");
//     }
// }

/*
solicitar desde teclado un número
verificar si tiene 1,2,3,4 o más cifras
*/
// var num = parseInt(window.prompt("Escribe un número"));
// if (num > 0 && num < 10) {
//     document.write("El número " + num + " tiene una cifra");
// } else if (num >= 10 && num < 100) {
//     document.write("El número " + num + " tiene dos cifra");
// } else if (num >= 100 && num < 1000) {
//     document.write("El número " + num + " tiene tres cifra");
// } else if (num >= 1000 && num < 10000) {
//     document.write("El número " + num + " tiene cuatro cifra");
// } else if (num >= 10000) {
//     document.write("El número " + num + " tiene más de cuatro  cifra");
// } else {
//     document.write("Dato incorrecto para el sistema");
// }

/*
switch(variable){
    case valor:
        instrucciones
        break;
    case valor:
        instrucciones
        break;
    case valor:
        instrucciones
        break;
    default:
        instrucciones
        break;
}
*/
// var color = "azul";
// switch(color){
//     case "amarillo":
//         console.log("Color amarillo");
//         break;
//     case "verde":
//         console.log("color verde");
//         break;
//     case "azul":
//     case "AZUL":
//     case "Azul":
//         console.log("color azul");
//         break;
//     case "negro":
//         console.log("color negro");
//         break;
//     default:
//         console.log("No existe en el sistema");
//         break;
// }

//MANEJO DEL DOM (document object models)
//var h1 = document.querySelector("h1");
//var h1 = document.querySelector("#titulo");
//var h1 = document.querySelector(".titulo");
// var h1 = document.getElementById("titulo");
//var h1 = document.getElementsByClassName("titulo")[0]
var h1 = document.querySelector("h1");
console.log(h1);
//alert(h1.innerHTML);
h1.innerText = "Hola html desde Js";
var p = document.querySelector("p");
p.innerHTML = " Lorem ipsum dolor <strong> sit amet </strong> consectetur adipisicing elit. Dicta ullam consectetur ea animi cupiditate, facere sed nulla dolore esse qui a excepturi obcaecati eaque id, nam necessitatibus ducimus praesentium explicabo";
console.log(h1.id);
h1.style.color = "red";
h1.style.backgroundColor = "lightpink";
h1.style.padding = "50px";
h1.style.border = "1px solid blue";
/*
Desarrollar un sistemita de cajero automático, 
utilizar prompt verificar la clave corre correcta
para mostrar un menu:
1 consulta 2 depósito 3 retiro 4 transferencia
utilizar el dom para colocar los mensajes
variables a usar:
clave, saldo, opción, monto
*/
