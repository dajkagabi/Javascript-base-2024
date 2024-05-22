let age = 17;
if (age >= 18) {
    console.log("Te már szavazhatsz!");
}else{
    console.log("Még nem szavazhatsz.");
}

let day = "Szerda";

switch (day) {
    case "Hétfő":
        console.log("Munkahét kezdődik.");
        break;
        case "Szerda":
            console.log("Munkahét közepe.");
            break;
            case "Péntek":
                console.log("Hétvége következik.");
                break;
                default:
                    console.log("A hét többi napja.");
}


for  (i=0; i<10; i++) {
    console.log("Hello World!", i);
}

let car = ["Volvo", "Suzuki", "Honda", "Opel",]
for (i=0; i< car.length; i++) {
    console.log("Car: ", i);
}


let number = 10;
do {
  console.log(number);
  number--;
} while (number >= 1);