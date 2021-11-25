// Clase Zombie
class Zombie {
    constructor(nombre, puntosVida, potencia) {
        this.nombre = nombre;
        this.puntosVida = puntosVida;
        this.potencia = potencia;
    }
 
    atacar(objetivo) {
        console.log(`${this.nombre} ataca a ${objetivo} y le causa ${this.potencia} puntos de daño`);
    }
}

// EJERCICIO 1
//Clase Jugador
class Jugador {
    constructor(nombre, ocupacion, puntosVida, faccion) {
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.puntosVida = puntosVida;
        this.faccion = faccion;
        this.maxPuntosVida = 100;
    }
 
    toString(){
        console.log(`Nombre: ${this.nombre}, Ocupación: ${this.ocupacion}, Puntos de Vida: ${this.puntosVida}, Facción: ${this.faccion}, Máximo de puntos de vida: ${this.maxPuntosVida}`);
    }
}

// Creamos 2 jugadores
let j1 = new Jugador('Adam', 'Arquitecto',70 , 'Liberal');
let j2 = new Jugador('Pablo', 'Abogado', 80, 'Socialista');
// Creamos una matriz que contiene los jugadores
let listaJugadores = [j1, j2];


// EJERCICIO 2
// Clase Abominacion
class Abominacion extends Zombie{
    ataqueMultiple(objetivo){
        for (let i = 0; i < 3; i++) {
            super.atacar(objetivo);
        }
    }
}

// Datos de los jugadores:
listaJugadores.forEach(jugador => {
    jugador.toString();
});

// Creamos Abominación y probamos ataque:
let z1 = new Abominacion('Destructor', 100, 25);
z1.ataqueMultiple(j1.nombre);


