/*Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.*/
'use strict'
let cadena=''
let palabra
let palabra2
do {
  let palabra=prompt('introduce palabras')
  palabra2=palabra
  if(palabra2!=null)
  {
    cadena=cadena+' -'+palabra
  }

  console.log(palabra)
} while ( palabra2!=null);
document.write(cadena)
