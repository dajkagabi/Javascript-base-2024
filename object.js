//Object
const person ={
    FirstName : "Gabriella",
    LastName : "Dajka",
    age : "21",
    greet : function(){
        console.log("Szia az én nevem " + this.FirstName + " " + this.LastName + " " + this.age );
    }
};

person.greet();

const jatekos = {
    nev: "Lionel Messi",
    eletkor: 36,
    csapat: "Inter Miami",
    poszt: "csatár",
    mezszam: 10,
    osszesadat: function() {
        console.log("Játékos neve: " + this.nev + "\nÉletkor: " + this.eletkor + "\nCsapat: " + this.csapat + "\nPoszt: " + this.poszt + "\nMezszam: " + this.mezszam);
      },
  };
  
  jatekos.osszesadat();