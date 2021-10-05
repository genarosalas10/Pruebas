//En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500,
//realizar un programa que lea los sueldos que cobra cada empleado e informe
//cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300.
//Además el programa deberá informar el importe que gasta la empresa en sueldos
//al personal.
'use strict'
let sueldo=[];
let cm300=0;
let cm100=0;
let total=0;
alert('Introduzca sueldo de los empleados')
for (let i=0; i<5;i++)
{
  do {
    sueldo[i] = parseInt(prompt('sueldo trabajador '+i));
    //sueldo[i]= '100'
    document.write(typeof sueldo[i])
  } while (   sueldo[i]>500 ||   sueldo[i]<100) ;
}
//typeof sueldo[i]!=='number' ||
document.write('<br /> <br />')
for (let i=0; i<sueldo.length;i++)
{
  if(sueldo[i]>300)
  {
    cm300++;
  }
  else {
    cm100++;
  }
}
document.write('<br />Hay '+cm300+' que cobran mas de 300 y '+cm100 +' que cobran entre 100 y 300')

for (let i=0; i<sueldo.length;i++)
{
  total=total+sueldo[i];
  console.log(total)
}

document.write('<br /> El gasto total en sueldo es'+total)
