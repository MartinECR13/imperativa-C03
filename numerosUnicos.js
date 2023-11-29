// Se define un arreglo 'numeros' que contiene una serie de valores, incluyendo algunos repetidos.
const numeros = [1, 2, , 2, 5, 3, 4, 3, 5, 1];

// Se declara una nueva variable 'numerosUnicos' que almacenará los elementos únicos del arreglo 'numeros'.
const numerosUnicos = numeros.filter((numero, posicion, numeros) => {
  // La función de filtrado verifica si la posición actual es igual a la primera aparición del elemento en el arreglo.
  return posicion === numeros.indexOf(numero);
});

// Se imprime en la consola el arreglo 'numerosUnicos', que contiene solo los elementos únicos de 'numeros'.
console.log(numerosUnicos);