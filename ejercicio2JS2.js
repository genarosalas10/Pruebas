/*Pide una nota (número). Muestra la calificación según la nota: 0-3: Muy deficiente,
3-5: Insuficiente, 5-6: Suficiente, 6-7: Bien, 7-9: Notable, 9-10: Sobresaliente*/
'use strict'
sacarNota(meterNota())

function sacarNota(nota)
{
  if(nota>=0 && nota<3)
  {
    document.write('Muy deficiente');
  }
  else
  {
    if(nota<5)
    {
        document.write('Insuficiente');
    }
    else
    {

      if(nota<6)
      {
          document.write('Suficiente');
      }
      else
      {
        if(nota<7)
        {
            document.write('Bien');
        }
        else
        {
          if(nota<9)
          {
              document.write('Notable');
          }
          else
          {
              document.write('Sobresaliente');
          }

        }
      }
    }
  }
}

function meterNota() {
  let nota
  do {
    nota=parseInt(prompt("Introduzca nota"))
  } while (nota<0 || nota>10);
  return nota;
}
