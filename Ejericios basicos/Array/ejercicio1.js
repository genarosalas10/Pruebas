/*Desarrollar un programa que solicite la carga de 10 números e imprima la suma
de los últimos 5 valores ingresados.*/
/* ejercicio1.js
  autor: Genaro Salas <gsalasgalingo.guadalupe@fundacionloyola.net
  Licencia: GPL V3 o superior
  Año 2021
*/
'use strict'
let numeros=[]
let suma=0
for (let i = 0; i < 10; i++) {
    numeros[i]=parseInt(prompt('introduce numero'))
    
}
for(let i=(numeros.length-1);i>=(numeros.length-5); i--)
{
    console.log(numeros[i])
    suma=suma+numeros[i]
}
document.write('La suma es ' +suma)