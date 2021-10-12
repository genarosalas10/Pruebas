/*9. Realizar el siguiente ejercicio utilizando Arrays asociativo.
En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta
corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de
datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta
según su saldo, sabiendo que:
Estado de la cuenta 'Acreedor' si el saldo es >0.
'Deudor' si el saldo es <0.
'Nulo' si el saldo es =0.
b) La suma total de los saldos acreedores.*/
/* ejercicio9.js
  autor: Genaro Salas <gsalasgalingo.guadalupe@fundacionloyola.net
  Licencia: GPL V3 o superior
  Año 2021
*/
'use strict'




let banco={'numero':['123456789'],'nombre':['Phil Lesh'],'saldo':[1234]}
let i=1
// banco[numero].push('123456789')
// banco [nombre].push('Phil Lesh')
// banco[saldo].push(1234)
/*banco[numero][1] = '123456711'
banco [nombre][1] = 'Juan Messi'
banco[saldo][1] = -1234
banco[numero][2] = '123456123'
banco [nombre][2] = 'Huevo Acuña'
banco[saldo][2] = 6789*/


do{
    banco['numero'][i]=parseInt(prompt('introduce numero de cuenta'))
   if( banco['numero'][i]>0)
   {
    console.log('hola')
    banco['nombre'][i]=prompt('introduce nombre de cuenta')
    banco['saldo'][i]=parseFloat(prompt('introduce saldo de cuenta'))
    
   }  
   i++
}while(banco['numero'][i-1]>0);
banco['numero'].splice(i-1)
console.log(banco['numero'].length )
for (let i = 0;i<banco['numero'].length ; i++) {
    console.log( banco['numero'][i] +banco['nombre'][i] +banco['saldo'][i] )
}