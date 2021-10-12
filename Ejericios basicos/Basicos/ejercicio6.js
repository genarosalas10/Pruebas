//Genaro Salas
//6. Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
'user strict';
let num1 = prompt('Introduzca primer ');
let num2 = prompt('Introduzca segundo ');
let num3 = prompt('Introduzca tercer');
if(num1>num2)
{
  if(num1>num3)
  {
    document.write('El mayor es '+num1);
  }
  else {
    document.write('El resultado es '+ num3);
  }

}
else {
  if(num2>num3)
  {
    document.write('El mayor es '+num2);
  }
  else {
    document.write('El resultado es '+ num3);
  }
}
