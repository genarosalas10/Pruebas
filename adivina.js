//Genaro Salas
'use strict'
let aleatorio = Math.floor((Math.random() * 100) + 1);
console.log(aleatorio);
let num;
let c=0;
do
{
	num = prompt('Elija numero al azar');
	if(aleatorio!=num)
	{
		if(aleatorio>num)
		{
			alert('el numero es mayor a '+num);
		}
		else
		{
			alert('el numero es menor a '+num);
		}
	}
	c++;
} while (aleatorio!=num);
alert('Has acertado. Has necesitado '+c +' intentos.');
	

