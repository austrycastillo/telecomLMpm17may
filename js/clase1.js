//alert("Hola Js Externo ;)");
/*
variables: var, let, const
var identificador;//declarando
identidicador = valor;//inicializando
--
var identificador = valor;
// */
// var nombre = "Austry";//string
// var edad = 16;//number: int, float, double
// var resultado = true;//boolean (true, false)
// var X;//undefined
// var arreglo = [];
// var obj = {};
// //alert(nombre);
// nombre = "Juan";
// //alert(nombre);
// console.log(nombre);//escribe en la consola
// //document.write("Hola <strong>fuerte</strong> html");//escribe en el dom
// document.write("Mi nombre es " + nombre);
// //operadores aritmeticos: + - * / %(modulo: resto de división)
// //document.write(2 + 2);
// var a = 4;
// var b = 10;
// var d = "4";
// var c = a + b;
// console.log(a);
// //operadores comparación < > <= >= == === !=
// //console.log(a < b);
// console.log(a == d);
// console.log(a === d);
//operadores lógicos: &&(and) ||(or)
/*
TRUE && TRUE =   TRUE
TRUE && FALSE =  FALSE
FALSE && TRUE =  FALSE
FALSE && FALSE = FALSE 

FALSE || FALSE = FALSE
TRUE || FALSE =  TRUE
FALSE || TRUE =  TRUE
TRUE || TRUE =   TRUE
*/

var dia = window.prompt("Escribe tu día favorito");
document.write("Escribiste " + dia + " como día favorito");
var num1 = parseInt(window.prompt("Escribe un número"));
var num2 = parseInt(window.prompt("Escribe otro número"));
console.log("La suma de los números son " + (num1 + num2));