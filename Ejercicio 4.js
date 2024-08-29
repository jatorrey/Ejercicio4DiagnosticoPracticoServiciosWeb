// 4. Ordenamiento de un arreglo
// Torres Reyes Jaime Camil
function ordenarArreglo(arreglo) {
    return arreglo.sort((a, b) => a - b);
}

const numeros = [5, 2, 9, 1, 7];
console.log("Arreglo ordenado:", ordenarArreglo(numeros));