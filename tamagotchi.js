// tamagotchi.js
class Tamagotchi {
  constructor(name) {
    this.name = name;
    this.gender = "m";
    this.family = "Zork";
    this.birthDate = new Date();

    this.hunger = 0;
    this.happiness = 0;
    this.discipline = 0;
    this.age = 0;
    this.numberOfPoops = 0;
    this.weightGrams = 1000;

    this.isIll = false;
    this.isHatched = false;
    this.isPottyTrained = false;

    this.lifeCycles = ["Baby", "Teen", "Adult", "Senior"];
    this.currentLifeCycle = 0;
  }
  hatch() {
    console.log("Our egg is hatching! The miracle of life!");
    this.isHatched = true;
  }
}

const pet = new Tamagotchi("Stinky");
console.log(pet);
pet.hatch();
console.log(pet);
