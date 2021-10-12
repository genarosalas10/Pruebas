//Genaro Salas
// 17. Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)
'user strict';
let num = prompt('Introduzca numero ');
let i=2;
for(i=2;i<num;i++)
{
  if(num%i==0)
  {
    i=num+1;
  }
}
if(num==i)
{
    document.write(num +' es primo ');
}
else
{
      document.write(num +' no es primo ');
}
