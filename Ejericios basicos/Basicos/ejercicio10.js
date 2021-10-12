//Genaro Salas
//10.Escribe un programa que pida una frase y escriba las vocales que aparecen
'user strict';
alert('ejercicio10');
let frase = prompt('Introduzca jugadores del betis');
let contador=0;
frase = frase.toLowerCase();
  document.write('Vocales: ')
for(let i=0; i<frase.length; i++)
{
  if(frase.charAt(i)=='a' || frase.charAt(i)=='e' || frase.charAt(i)=='i' || frase.charAt(i)=='o' || frase.charAt(i)=='u')
  {
    document.write(frase.charAt(i)+' ');
    contador++
  }

}
document.write('<br>El total de vocales es= '+contador);
