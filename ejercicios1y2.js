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
    constructor(nombre, ocupacion, faccion) {
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.puntosVida = 100;
        this.faccion = faccion;
    }
 
    toString(){
        console.log(`Nombre: ${this.nombre}, Ocupación: ${this.ocupacion}, Puntos de Vida: ${this.puntosVida}, Facción: ${this.faccion}`);
    }
}

// Creamos 2 jugadores
let j1 = new Jugador('Adam', 'Arquitecto', 'Liberal');
let j2 = new Jugador('Pablo', 'Abogado', 'Socialista');
// Creamos una matriz que contiene los jugadores
let listaJugadores = [j1, j2];


// EJERCICIO 2
// Clase Abominacion
class Abominacion extends Zombie{
    ataqueMultiple(objetivo){
        super.atacar(objetivo);
        super.atacar(objetivo);
        super.atacar(objetivo);
    }
}

let z1 = new Abominacion('Destructor', 100, 25);
z1.ataqueMultiple(j1.nombre);


