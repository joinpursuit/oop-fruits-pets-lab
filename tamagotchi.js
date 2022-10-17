// Create class below
class Tamagotchi{
    constructor(name){
        this.name = name,
        this.energy = 9,
        this.full = 8,
        this.mood = 6,
        this.sick = false,
        this.rehomed = false
    }

    greet(){

    }

    status(){

    }

    eat(){
        this.full = this.full + 2
        this.energy = this.energy - 1
        if(this.full > 10){ this.sick = true }
    }

    medicate(){
        if (!this.sick){
            this.energy = this.energy - 1
        } else {
            this.sick = false
            this.full = 9
            this.energy = this.energy - 3
        }
    }

    play(){
        if (this.sick) {
            this.mood -= 1;
            this.energy -= 1;
          } else if (this.mood >= 9) {
            this.energy -= 2;
            this.full -= 1;
          } else if (this.energy <= 3) {
            this.energy -= 1;
          } else {
            this.mood += 2;
            this.energy -= 1;
            this.full -= 1;
          }
        }

    sleep(){
        this.energy += 4
        this.full -= 3
    }

    timePasses(){
        if(this.sick){
            this.mood -= 3
            this.full -= 2
            this.energy -= 2
        } else {
            this.mood -= 2
            this.full -= 1
            this.energy -= 1
        }
    }

    badGuardian(){
        if(this.energy <= 0 || this.mood <= 0 || this.full <= 0){
            this.rehomed = true
        }
    }


}

// Do not edit below this line
module.exports = Tamagotchi;
