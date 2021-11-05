// EJERCICIO 3

// Clase Consumible
class Consumible {
    constructor(nombre) {
        this.nombre = nombre;
    }
 
    consumir(jugador) {
        console.log(jugador.nombre + " consume " + this.nombre + " y no tiene ningún efecto");
    }
}
 
let pera = new Consumible('pera');
let ricardo = {
    nombre: 'Ricardo',
    potencia: 1,
    puntosVida: 6,
    maxPuntosVida: 10,
    consumir: function (elemento) {
        elemento.consumir(this);
    }
}
ricardo.consumir(pera);

// Clase Planta Curativa
class PlantaCurativa extends Consumible {
    constructor(nombre, poder) {
        super(nombre);
        this.poder = poder;
    }
 
    consumir(jugador) {
        if((this.poder + jugador.puntosVida) > jugador.maxPuntosVida){
            jugador.puntosVida = jugador.maxPuntosVida;
        }else{
            jugador.puntosVida += this.poder;
        }

        console.log(`${jugador.nombre} consume ${this.nombre} y ahora tiene ${jugador.puntosVida} puntos de vida`);
    }
}

// Creamos planta
let mandragora = new PlantaCurativa('mandragora', 3);
// Hacemos que el jugador consuma la planta
ricardo.consumir(mandragora);