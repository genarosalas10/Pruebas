/*Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad). 
Busca el algoritmo en Internet.*/
/* ejercicio5.js
  autor: Genaro Salas <gsalasgalingo.guadalupe@fundacionloyola.net
  Licencia: GPL V3 o superior
  Año 2021
*/
'use strict'
let dni=80096793;
let letra;
let caracteres='TRWAGMYFPDXBNJZSQVHLCKE';
letra = caracteres.charAt(calcular(dni))
document.write('Su letra es '+letra)
function calcular(dni)
{
    let numero=Math.trunc(dni%23)
    console.log(numero)
     return numero;
}