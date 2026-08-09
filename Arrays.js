

// .at() Devuelve el elemento ubicado en el indice indicado. Acepta indices negativos
//Ejemplo
const ciudades = ["Cali", "Bogotá", "Medellín", "Barranquilla", "Cartagena"];
console.log(ciudades.at(0)); // "Cali"
console.log(ciudades.at(-1)); // "Cartagena"

//.concat() Une dos o más arrays y devuelve uno nuevo.

const frutas = ["Manzana", "Pera", "Banano"];
const verduras = ["Lechuga", "Tomate", "Zanahoria"];

console.log(frutas.concat(verduras));

// .copyWithin()  Copia una parte del mismo array sobre otra posición del mismo array. Modifica el array original.
const numeros1 = [10, 20, 30, 40, 50, 60];
numeros1.copyWithin(0,2);
console.log(numeros1);

// .entries() Devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice del array.
const estudiantes = ["Juan", "Ana", "Pedro", "Laura"];
const iterator = estudiantes.entries();
for (const [indice, valor] of iterator) {
    console.log(indice, valor);
}

// .every() Devuelve un booleano en base a si todos los elementos cumplen una condición
const edades = [22, 35, 19, 28, 41];
console.log(edades.every(n => n >= 18));

// .fill() Rellena todo o parte del array con el valor indicado
const numeros2 = [1, 2, 3, 4, 5];
numeros2.fill(100)
console.log(numeros2);

//.filter() Devuelve un nuevo array con los elementos que cumplen una condición
const numeros3 = [12, 7, 18, 5, 24, 9, 30];
const resultado = numeros3.filter(n => n % 2 == 0)
console.log(resultado);

//.find() Devuelve el primer elemento que cumple una condición
const notas = [45, 60, 72, 88, 91, 67];
console.log(notas.find(n => n  > 80));


//.findIndex() Devuelve el indice del primer elemento que cumpla la condición
const temperaturas = [25, 28, -2, 30, -5];
console.log(temperaturas.findIndex(n => n < 0));

//.findLast() Devuelve el último elemento que cumple una condición.
const numeros4 = [12, 15, 18, 21, 24, 27];
console.log(numeros4.findLast (n => n % 2 === 1) );

// .findLastIndex() Devuelve el índice del último elemento que cumple una condición.
const numeros5 = [8, 12, 15, 4, 9, 18];
console.log(numeros5.findLastIndex(n => n < 10));

// .flat() Aplana un array con subarreglos hasta la profundidad indicada
const numeros6 = [[1, 2], [3, 4], [5, 6]];
var arregloPlano = numeros6.flat();
console.log(arregloPlano);

//.flatMap() Mapea cada elementto y luego aplana el resultado en un nuevo array
const numeros6 = [1, 2, 3, 4];
console.log(numeros6.flatMap(n => [n, n*n]));

// .forEach() Ejecuta una función para cada elemento del Array. no devuelve un array nuevo
const nombres = ["Miguel", "Laura", "Carlos", "Andrea"];
nombres.forEach( n => console.log(n));

//.includes() Devuelve true si el valor que indiquemos está en el array
const lenguajes = ["Java", "Python", "JavaScript", "C#"];
console.log(lenguajes.includes("JavaScript"));

// .indexOf() Devuelve el indice de la primera aparición de un valor
const paises = ["Perú", "Chile", "Colombia", "Argentina"];
console.log(paises.indexOf("Colombia"));

// .join() Une todos los elementos del array en un string
const palabras = ["Hola", "Mundo", "JavaScript"];
console.log(palabras.join("-"));

// .keys() Devuelve un nuevo objeto Array Iterator que contiene las claves de cada índice del array
const colores = ["Rojo", "Verde", "Azul"];
const iterator2 = colores.keys();
for (const indice of iterator2) {
    console.log(indice);
}

// .lastIndexOf() Devuelve el indice en el cual el valor que damos hace su última aparición
const numeros7 = [5, 8, 3, 8, 2, 8];
console.log(numeros7.lastIndexOf(8));

// .map() Aplica una operación a todos los elementos del array, no  modifica el array original, devuelve uno nuevo
const temperaturas = [18, 22, 27, 31];
console.log(temperaturas.map(n => n * (9/5) + 32));

// .pop() Elimina el último elemento del array y lo devuelve
const productos = ["Laptop", "Mouse", "Teclado", "Monitor"];
var eliminado = productos.pop();
console.log(eliminado);

// .push() Agrega uno o más elementos al final del array, devuelve la nueva longitud
const videojuegos = [];
videojuegos.push("FIFA", "Mario" , "Smash Bros")
console.log(videojuegos);

// .reduce() Reduce el array a un solo valor acumulando el resultado
const ventas = [150, 220, 90, 340, 180];
total = ventas.reduce((acc,n) => acc + n, 0);
console.log(total);

// .reduceRight() Lo mismo que reduce pero desde la derecha
const letras = ["J", "S", "!"];
const resultado = letras.reduceRight((acc, letra) => acc + letra, "");
console.log(resultado);

// .reverse() revierte el orden de los elementos del array, modifica el array original
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
meses.reverse();
console.log(meses);

//.shift() Elimina el primer elemento del array y lo devuelve
const estudiantes2 = ["Ana", "Luis", "Pedro", "Laura"];
var estudianteEliminado = estudiantes2.shift();
console.log(estudianteEliminado);

//.slice(inicio,fin) devuelve una copia de la sección elegida del  array
const numeros8 = [10,20,30,40,50,60,70,80,90,100];
var primeros4 = numeros8.slice(0,4);
console.log(primeros4);

// .some() Devuelve true si al menos un elemento cumple la condición
const numeros9 = [10, 14, 18, 25, 30];
console.log(numeros9.some(n => n % 7 === 0));

// .sort() ordena el array, se le puede dar una función entre los parentesis para la comparación
const edades = [35, 18, 27, 42, 20, 31];
edades.sort((a, b) => a - b);
console.log(edades);

// .splice() Agrega, elimina o reemplaza elementos en cualquier posición del array, modifica el array original
const lenguajes = ["HTML", "CSS", "Python"];
lenguajes.splice(2,1,"Javascript");
console.log(lenguajes);

// .toLocaleString() convierte los elementos del array
// a un string y aplica el formato regional correspondiente.
const datos = [1500000, new Date()];
console.log(datos.toLocaleString());

// .toString() convierte todo el array a un string separado por ,
const colores = ["Rojo", "Azul", "Verde"];
console.log(colores.toString());

// .unshift() Agrega uno o más elementos al inicio del array, devuelve la nueva longitud
const roles = ["Usuario", "Moderador"];
roles.unshift("Administrador");
console.log(roles);

// .values() Devuelve un nuevo objeto Array Iterator que contiene los valores de cada índice del array
const mascotas = ["Perro", "Gato", "Conejo", "Loro"];
const iterator3 = mascotas.values();
for (const valor of iterator3) {
    console.log(valor);
}