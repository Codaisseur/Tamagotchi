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

  poop() {
    console.log("Uh oh, someone needs to go do a number 2");
    this.numberOfPoops = this.numberOfPoops + 1;
    this.hunger = this.hunger + 1;
  }

  toilet() {
    console.log("Flush!");
    this.numberOfPoops = 0;

    const randomNumber = Math.random();
    if (randomNumber > 0.8 && !this.isPottyTrained) {
      console.log("Our Tamagotchi bacame Potty Trained!");
      console.log("They grow up so fast");
      this.isPottyTrained = true;
    }
  }

  feed(type) {
    switch (type) {
      case "snack":
        this.hunger = this.hunger - 1;
        this.happiness = this.happiness + 3;
        this.discipline = this.discipline - 1;

        const randomNumber = Math.random();

        if (randomNumber > 0.9) {
          console.log("Eating many snacks is not very healthy!");
          this.isIll = true;
        }
        break;
      case "meal":
        this.hunger = this.hunger - 3;
        break;

      default:
        console.log("You can only feed your tamagotchi a snack or a meal");
        break;
    }

    if (this.hunger < 0) {
      this.hunger = 0;
    }
  }

  getLifeCycle() {
    return this.lifeCycles[this.currentLifeCycle];
  }

  grow() {
    // Grow on step unless you're already a senior
    // Add one to the currentLifeCycle unless it is already at the maximum (this.lifeCycles.length - 1)
    if (this.currentLifeCycle < this.lifeCycles.length - 1) {
      console.log("They grow up so fast");
      this.currentLifeCycle = this.currentLifeCycle + 1;
    }
  }
  scold() {
    console.log(`${this.name}, don't do that!`);
    this.happiness = this.happiness - 1;
    this.discipline = this.discipline + 2;
  }

  play(userPick) {
    const randomNumber = Math.random();
    let tamagotchiPick;
    if (randomNumber > 0.5) {
      tamagotchiPick = "left";
    } else {
      tamagotchiPick = "right";
    }

    if (tamagotchiPick === userPick) {
      console.log("We think so much alike!");
      this.happiness = this.happiness + 2;
    } else {
      console.log("Oh no, we don't understand our pet");
      this.happiness = this.happiness - 1;
    }
  }
}

const pet = new Tamagotchi("Stinky");
console.log(pet);
pet.hatch();
pet.poop();
pet.poop();
pet.poop();
console.log("How many poops so far?", pet.numberOfPoops, "poop");
pet.toilet();
console.log("How hungry is our pet?", pet.hunger);
pet.feed("snack");
pet.feed("meal");
console.log("How hungry is our pet after eating?", pet.hunger);
console.log("Is our pet ill?", pet.isIll);
console.log(`Our pet is a ${pet.getLifeCycle()}`);
pet.grow();
console.log(`Our pet is a ${pet.getLifeCycle()}`);
pet.grow();
pet.grow();
console.log(`Our pet is a ${pet.getLifeCycle()}`);
// If it is already a senior and we get it to grow more?
pet.grow();
console.log(`Our pet is a ${pet.getLifeCycle()}`);
// Nothing changed (good)
console.log(`How discplined is our pet? ${pet.discipline}`);
pet.scold();
pet.scold();
console.log(`How discplined is our pet after scolding? ${pet.discipline}`);
console.log(`How happy is our pet before playing? ${pet.happiness}`);
pet.play("right");
pet.play("left");
console.log(`How happy is our pet after playing? ${pet.happiness}`);

console.log(pet);
