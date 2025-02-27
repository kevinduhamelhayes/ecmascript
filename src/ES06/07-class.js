/**
 * Clase que representa un usuario en el sistema
 */
class User {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    /**
     * Método que retorna un saludo personalizado
     */
    greeting() {
        return `Hello ${this._name}!`;
    }

    /**
     * Getter para obtener la edad del usuario
     */
    get age() {
        return this._age;
    }

    /**
     * Setter para establecer la edad del usuario
     */
    set age(newAge) {
        if (newAge < 0) throw new Error('La edad no puede ser negativa');
        this._age = newAge;
    }

    /**
     * Getter para obtener el nombre del usuario
     */
    get name() {
        return this._name;
    }
}

const pepito = new User('Pepito', 20);
console.log(pepito.greeting());
console.log(pepito.age); // 20
pepito.age = 16;
console.log(pepito.age); // 16

const mike = new User('Mike', 24);
console.log(mike.greeting());
console.log(mike.age); // 24
mike.age = 33;
console.log(mike.age); // 33