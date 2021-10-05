//Objetos del Sistema (Ref. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
//Date, String, Math, Number, parseInt, Set, Map, Symbol, JSON, Promise...
'user strict'
console.log('Cargando...')
//Date: proporciona una fecha// Enero es el mes 0
let fecha= new Date(); //para la fecha actual en el formato del ordnenador
console.log(fecha);

//Fecha concreta
let fecha2= new Date(2021,8,29)
console.log(fecha2);


//Leer fecha
const meses=['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio','Agosto', 'septiembre',' octubre', 'noviembre', 'diciembre']
const semana=['Domingo','Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
let hoy=`Hoy es ${semana[fecha.getDay()]} del mes ${meses[fecha.getMonth()+1]}`;
console.log(hoy);
//fecha.getDay() da el dia de la semana empieza el domingo
//fecha.getMonth() da el mes empezando en 0
//fecha.getFullYear() coger el año
 let ms1= fecha.getTime() //muestra los milisegundos desde 1970
 console.log(`Desde los beatles han pasado ${ms1} ms`)

 let dentro5Dias=ms1+5*24*60*60*100
 //5 dias, 24 horas al dia, 60 minutos en cada hora, 60 segundos en cada minuto, 100 milisegundos en cada segundo
 dentro5Dias=new Date(dentro5Dias) //sial new date(milisengudos), te lo devuelve en formato normal
 console.log(dentro5Dias);

 //Objeto String
 let nombre1='Ana'
 let nombre2='Angel'
 let nombre3='Abel'
 if(nombre1>nombre3 )
 {
   console.log(nombre1 +'es mayor que ' +nombre3);
 }
 else {
   console.log('NO')
 }

 //debemos saber-> string.charAt()
 let texto='En un lugar de la mancha, de cuyo nombre no quiero acordarme...'
 console.log(texto.charAt(6))//me dice elcaracter que hay en la posicion 6 del String
 console.log(texto.indexOf('l')) //muestra la posicion de la primera l
 //Buscar la posicion de la primera e despues de la coma
 console.log(texto.indexOf('e',texto.indexOf(','))) //muestrala posicion de la primera e desde el lugar que pongamos
 console.log(texto.includes('la mancha')) // saber si esta dentro de nuestro string devuelve true o false
 console.log(texto.toUpperCase())//A minusculas
 console.log(texto.toLowerCase())//A mayusculas
  console.log(texto.substr(4,10))//Se coge desde el elcaracter 4 10caracteres

//objeto Math
console.log(Math.floor(Math.PI)) //trucar los decimales
//raiz cuadrada, random, max, min, sqrt, round, floor

//objeto Number
let entrada='Zapato'
console.log(isNaN(entrada))//Comprueba si es un numero y debuelve true o false
let entrada2='42Zapato'
console.log(Number.parseInt(entrada2));//Coge la parte numerica hasta que haya caracteres
let entrada3='42.4555Zapato'
console.log(Number.parseFloat(entrada3));//Coge la parte numerica hasta que haya caracteres

//Estructuras avanzadas de datos
//-set (conjunto) no se puede repetir ni estan ordenados
let amigos= new Set()
amigos.add('Ana') //Añadir objetos al conjunto
amigos.add('Juan')
amigos.add('Conde Dracula')
amigos.add('Conde Dracula')
console.log(amigos.size)//muestra el tamaño
//Clear vacia entero, delete borra uno en concreto,
//Recorrer set
for(let amigo of amigos)
{
  console.log(amigo)
}

//en el array si se puede repetir
amigos=[]
amigos.push('Ana')
amigos.push('Ana')


//Mapas
let coches= new Map()
coches.set('BA-9282-ZT', 'Porsche')
coches.set('TO-666-JO', 'Seat ibiza')
coches.set('ABC-DEF', 'Tesla Turbo Volador')


//objeto Symbol
//Para identificar constantes que no pueden cambiar
class Usuario
{
  Usuario.ADMIN= Symbol();
  Usuario.PRINGUI= Symbol();
  Usuario.GESTOR= Symbol();
}
