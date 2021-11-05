let puntuaciones = [
    { nombre: "Pablo", puntuacion: 180 },
    { nombre: "Javier", puntuacion: 270 },
    { nombre: "Raquel", puntuacion: 70 },
    { nombre: "Mario", puntuacion: 310 },
    { nombre: "Miriam", puntuacion: 90 },
    { nombre: "Fernando", puntuacion: 105 },
    { nombre: "Laura", puntuacion: 210 },
    { nombre: "Julian", puntuacion: 520 },
];

console.log(puntuaciones);
console.log(jugadoresTop(puntuaciones));

// Función que toma un array, y devuelve uno nuevo luego de haber filtrado y ordenado sus elementos.
function jugadoresTop(array){
    // Creamos un nuevo array con los elementos que tengan puntuación mayor a 100.
    let puntuacionesTop = array.filter(elemento => elemento.puntuacion > 100);

    // Ordenamos el array de menor a mayor
    puntuacionesTop.sort((a,b)=>a.puntuacion-b.puntuacion);
    
    // Invertimos el orden de los elementos
    puntuacionesTop.reverse();

    return puntuacionesTop;
}