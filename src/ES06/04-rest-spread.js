//a desestructuración (destructuring) consiste en extraer los valores de arrays o propiedades de objetos en distintas variables.

//Desestructuración de objetos
//La desestructuración de objetos implica extraer las propiedades de un objeto en variables. Mediante el mismo nombre de la propiedad del objeto con la siguiente sintaxis:

const objeto1 = { 
    prop1: "valor1",
    prop2: "valor2",
    ... 
} 

// Desestructuración
const { prop1, prop2 } = objeto
//Antes de ES6, necesitabas acceder al objeto con la notación punto o corchetes por cada propiedad que se necesita y asignar ese valor a una variable diferente.

var usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

var nombre = usuario.nombre
var edad = usuario.edad
var plataforma = usuario["plataforma"]

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'
//Con la desestructuración puedes realizar lo mismo, pero en una sola línea, provocando que el código seas más legible y mantenible.

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre, edad, plataforma } = usuario

console.log(nombre)  // 'Andres' 
console.log(edad)  // 23
console.log(plataforma)  // 'Platzi'
//Cambiar el nombre de las variables con desestructuración
//Si no te agrada el nombre de la propiedad del objeto, puedes cambiarlo utilizando la siguiente sintaxis:

const objeto2 = { prop1: "valor1", prop2: "valor2", ... } 

// Desestructuración
const { prop1: newProp1, prop2: newProp2 } = objeto
//Por ejemplo:

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

const { nombre: name, edad: age, plataforma: platform } = usuario

console.log(name)  // 'Andres' 
console.log(age)  // 23
console.log(platform)  // 'Platzi'

console.log(nombre)   // Uncaught ReferenceError: nombre is not defined
//Desestructuración en parámetros de una función
//Si envías un objeto como argumento en la invocación a la declaración de una función, puedes utilizar la desestructuración en los parámetros para obtener los valores directamente. Ten en cuenta que el nombre debe ser igual a la propiedad del objeto.

const usuario = { nombre: "Andres", edad: 23, plataforma: "Platzi" }

function mostrarDatos( { nombre, edad, plataforma } ){
    console.log(nombre, edad, plataforma) 
}

mostrarDatos(usuario) // 'Andres', 23, 'Platzi'
//Desestructuración de arrays
//La desestructuración de arrays consiste en extraer los valores de un array en variables, utilizando la misma posición del array con una sintaxis similar a la desestructuración de objetos.

//const array = [ 1, 2, 3, 4, 5 ]

// Desestructuración
const [uno, dos, tres ] = array

console.log(uno) // 1
console.log(dos) // 2
console.log(tres) // 3
//Desestructuración para valores retornados de una función
//Cuando una función retorna un array, puedes guardarlo en una variable. Por ende, puedes utilizar la desestructuración para utilizar esos valores por separado de manera legible.

//En el siguiente ejemplo, la función useState retorna un array con dos elementos: un valor y otra función actualizadora.

function useState(value){
    return [value, updateValue()]
}

//Sin desestructuración 
const estado = useState(3)
const valor2 = estado[0]
const actualizador1 = estado[1]

//Con desestructuración 
const [valor, actualizador] = useState(3)
//Lo que puedes hacer con desestructuración, pero no es recomendable
//Si necesitas un elemento en cierta posición, puedes utilizar la separación por comas para identificar la variable que necesitas.

const array3 = [ 1, 2, 3, 4, 5 ]

const [ ,,,,  cinco ] = array

console.log(cinco) // 5
//Como los arrays son un tipo de objeto, puedes utilizar la desestructuración de objetos mediante el índice y utilizando un nombre para la variable.

const array4 = [ 1, 2, 3, 4, 5 ]

const {4: cinco1} = array

console.log(cinco) // 5
//El operador de propagación (spread operator), como su nombre lo dice,
// consiste en propagar los elementos de un iterable, ya sea un array o string utilizando
// tres puntos (...) dentro de un array.
// DESEMPAQUETADOR
// Para strings
const array5 = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otherArray2 = [ ...array]   //[ 'H', 'o', 'l', 'a' ]
//También se utiliza para objetos, pero esta característica fue añadida en versiones posteriores de ECMAScript y es denominada propiedades de propagación.
const originalArray3 = [1,2,3,4,5]
const copyArray = originalArray
copyArray[0] = 0

originalArray // [0,2,3,4,5]
originalArray === copyArray  // true
//Para evitar este comportamiento, puedes utilizar el operador de propagación para crear una copia del array.
const originalArray = [1,2,3,4,5]
const copyArray = [...originalArray]
copyArray[0] = 0

originalArray // [1,2,3,4,5]
originalArray === copyArray  // false
copyArray // [0,2,3,4,5]
//También puedes utilizarlo para concatenar arrays.
const array1 = [1,2,3]
const number = 4
const array2 = [5,6,7]

const otherArray = [ ...array1, number, ...array2 ]

otherArray // [1,2,3,4,5,6,7]

Parámetro rest
//El parámetro rest consiste en agrupar el residuo de elementos mediante la sintaxis 
//de tres puntos (...) seguido de una variable que contendrá los elementos en un array.

//Esta característica sirve para crear funciones que acepten cualquier número de argumentos 
//para agruparlos en un array.
function hola (primero, segundo, ...resto) {
    console.log(primero, segundo)  // 1 2
    console.log(resto) // [3,4,5,6]
  }
  
  hola(1,2,3,4,5)
//  También sirve para obtener los elementos restantes de un array u objeto usando desestructuración.
const objeto = {
    nombre: "Andres",
    age: 23,
    plataforma: "Platzi"
  }
  const array6 = [0,1,2,3,4,5]
  
  const {plataforma, ...usuario} = objeto
  cons [cero, ...positivos] = array
  
  usuario // { nombre: 'Andres', age: 23 }
  positivos // [ 1, 2, 3, 4, 5 ]

//Diferencias entre el parámetro rest y el operador de propagación
//Aunque el parámetro rest y el operador de propagación utilicen la misma sintaxis, son diferentes.

//El parámetro rest agrupa el residuo de elementos y siempre debe estar en la última posición,
// mientras que el operador de propagación expande los elementos de un iterable en un array 
//y no importa en que lugar esté situado.
const array = [1,2,3,4,5]

function hola (primero, segundo, ...resto) { // <- Parámetro Rest
  console.log(primero, segundo)  // 1 2
  console.log(resto) // [3,4,5, "final"]
}

hola(...array, "final") //<- Operador de propagación
//Lo mismo que hacer -> hola(1,2,3,4,5, "final")