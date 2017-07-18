export class Greeter {                              //export żeby można było robić import i korzystać z klasy Greeter w innym skrypcie
    private name: string;

    constructor(name: string) {                             //jeśli nie jest dodany jako <script> w html-u
        this.name = name;
    }

    greet() {
        console.log(`Hello, ${this.name}!`);      //ten ciapek pozwala korzystać w tekście ze zmiennych
    }
}
