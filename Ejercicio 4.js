// 4. Ordenamiento de un arreglo
// Torres Reyes Jaime Camil
function ordenarArreglo(arreglo) {
    return arreglo.sort((a, b) => a - b);
}

const numeros = [45, 22, 10, 7, 3];
console.log("Arreglo ordenado:", ordenarArreglo(numeros));