//let, String, Number
let firstName = "Gabriella";
let lastName = "Dajka";

//Number
let age = 23;
let price = 550;
console.log('Price is: ' +  price);


//var
var welcome = "Hello Javascript";
console.log(welcome);

//const
const PI = 3.14159; 
console.log(PI);

console.log(firstName, lastName, age);
console.log(`Név: ${firstName} ${lastName}, életkor: ${age}`); 

let Name1 = "John";
let Name2 = "Fred";
let age1 = 21;
console.log("Név: " + Name1 + " " + Name2 + ", életkor: " + age1);

//Boolen
let online = true;
console.log("Online: " + online);

//Null
let number = null;
console.log(number);

//Undefined
const score = undefined;
console.log(score);


//Array
const car = ['OPEL', 'SKODA', 'HYUNDAI', 'VOLVO',]
console.log(car);

//MAP
const car2 = ["JEEP", "TESLA", "HONDA", "LEXUS", "MAZDA", "SUZUKI", "TOYOTA"];
const carList = car2.map (brand => `Brand: ${brand}`);
console.log(carList);



//PUSH
car.push("NISSAN", "SEAT");
console.log(car);

//POP
car.pop();
console.log(car);

//LENGHT
car.length;
console.log(car);

//DATE
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1; 
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(`A jelenlegi dátum és idő: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);