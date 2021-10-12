//Realiza un script que pida números hasta que se pulse “cancelar”. 
//Si no es un número deberá indicarse con un «alert» y seguir pidiendo. 
//Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
'use strict'
let num
let num2
let suma=0
do {
    num=  prompt('introduce numero')
   
    num2=parseInt(num)
    if(!isNaN(num2) && num!="")
    {
        num2=parseInt(num)
        suma=suma+num2 
    }
    else
    {
        if(num!=null)
        {
            alert('No has introducido un numero')
        }   
    }
} while (num!=null);
document.write(suma)