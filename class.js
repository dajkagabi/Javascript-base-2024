//class
class Car {
    constructor (name, year){
        this.name = name;
        this.year = year;
    }
    data() {
        console.log(`Name: ${this.name}, Year: ${this.year}`);
    }
}
const car1 = new Car('Volvo', 2010);
car1.data();

//Egyedi példa

class Auto {
    marka;
    modell;
    evjarat;
    szin;
    futottKilometer;

    constructor(marka, modell, evjarat, szin, futottKilometer) {
        this.marka = marka;
        this.modell = modell;
        this.evjarat = evjarat;
        this.szin = szin;
        this.futottKilometer = futottKilometer;
    }
    kiiratas(){
        console.log(`Márka: ${this.marka}, Modell: ${this.modell}, Évjárat: ${this.evjarat}, Szín: ${this.szin}, Futottkilométer: ${this.futottKilometer}`);
    }
    utazas (tavolsag){
        this.futottKilometer += tavolsag;
        console.log(`${this.tavolsag} km utazás után a futottkilométer ${this.futottKilometer}`);
    }
}

const autok = new Auto("Kia", "Sportage", 2019, "piros", 22000);
autok.kiiratas(); 

const autok2 = new Auto("Toyota", "Corolla", 2005, "fehér", 230000);
autok2.kiiratas();