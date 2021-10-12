/*Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura
promedio de las personas.
*/
/* ejercicio3.js
  autor: Genaro Salas <gsalasgalingo.guadalupe@fundacionloyola.net
  Licencia: GPL V3 o superior
  Año 2021
*/
let array=[]
let suma=0
let promedio

for (let i = 0; i < 5; i++) 
{
    array[i]=parseFloat(prompt('introduce altura ' +(i+1)) )
}
for (let i = 0; i < array.length; i++) {
   suma=suma+array[i] 
}

promedio=suma/array.length
document.write('el promedio de altura es '+promedio.toFixed(2))