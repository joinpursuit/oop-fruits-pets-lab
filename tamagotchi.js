// Create class below

class tamagotchi {
    constructor(name, energy, full, mood, sick, rehomed){
        this.name = 'string';
        this.energy = 9;
        this.full = 8;
        this.mood = 6;
        this.sick = false;
        this.rehomed = false;
    }

    greet(){
        console.log(`Hello, I'm ${this.name}!`)
    }

}

const tuki = new tamagotchi(tuki, 100, 7, 6, false, false);
console.log(tuki)
// Do not edit below this line
module.exports = Tamagotchi;
