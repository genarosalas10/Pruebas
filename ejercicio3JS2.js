/*Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.*/
'use strict'
let cadena=''
let palabra
do {
  let palabra=prompt('introduce palabras')
  if(palabra!=null)
  {
    cadena=cadena+' -'+palabra
  }

  console.log(palabra)
} while (palabra!=null);
document.write(cadena)
