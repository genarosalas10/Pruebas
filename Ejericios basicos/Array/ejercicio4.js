/*4. Realizar un programa que pida la carga de dos vectores numéricos. Obtener la
suma de los dos vectores, dicho resultado guardarlo en un tercer vector del
mismo tamaño. Sumar componente a componente.*/
/* ejercicio4.js
  autor: Genaro Salas <gsalasgalingo.guadalupe@fundacionloyola.net
  Licencia: GPL V3 o superior
  Año 2021
*/
let vector1=[]
let vector2=[]
let vector3=[]
for (let i = 0; i < 2; i++) {
    for (let j= 0; j < 2; j++) {
        //vector1[i][j]=parseInt(prompt('introduce numero'))
        vector1[i][j]=j
    }  
}
for (let i = 0; i < 2; i++) {
    for (let j= 0; j < 2; j++) {
        vector2[i][j]=parseInt(prompt('introduce numero'))
    }  
}

for (let i = 0; i < 2; i++) {
    for (let j= 0; j < 2; j++) {
        vector3[i][j]=vector1[i][j]+vector2[i][j]
    }  
}
for (let i = 0; i < 2; i++) {
    for (let j= 0; j < 2; j++) {
        document.write(vector3[i][j])
    }  
}