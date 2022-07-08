alert("Hola Bienvenid@ a la calculadora de IMC");

let nombre = prompt("Introduce tu nombre");
let peso = prompt("Intruduce tu peso en kg");
let altura = prompt("Intruduce tu estatura en m");
let resultado = peso / (altura)**2;

alert(nombre + " Tu imc es de: " + resultado);