// tamagotchi.js
class Tamagotchi {
  constructor() {
    this.isHatched = false;
  }
  hatch() {
    console.log("Our egg is hatching! The miracle of life!");
    this.isHatched = true;
  }
}

const pet = new Tamagotchi();
console.log(pet);
pet.hatch();
console.log(pet);
