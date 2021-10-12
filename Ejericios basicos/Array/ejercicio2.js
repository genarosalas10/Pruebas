/*2. Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen
notas mayores o iguales a 7 y cuántos menores. */
/* ejercicio2.js
  autor: Genaro Salas <gsalasgalingo.guadalupe@fundacionloyola.net
  Licencia: GPL V3 o superior
  Año 2021
*/
'use strict'
let notas=[]
let cmas7=0
let cmenos7=0
for (let i = 0; i < 10; i++) 
{
    notas[i]=parseFloat(prompt('introduce nota ' +(i+1)))
    
}
for(let i=0;i<notas.length; i++)
{
    console.log(notas[i])
    if(notas[i]>=7)
    {
        cmas7++
    }
    else
    {
        cmenos7++
    }
}
document.write('Las notas mayores que 7 son '+cmas7)
document.write('Las notas menores que 7 son '+cmenos7)