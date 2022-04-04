// Create class below
class Tamagotchi {
   constructor (name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false) {
       this.name = name;
       this.energy = energy;
       this.full = full;
       this.mood = mood;
       this.sick = sick;
       this.rehomed = rehomed;
   }
   greet(){
     console.log(`Hello, I'm ${this.name}!`);
   }
   status() {
       if (this.sick = false) {
        console.log(`My mood is: ${this.mood}\n I am ths full: ${this.full}\n My energy is: ${this.energy}\n I am not sick`);
       } else {
        console.log(`My mood is: ${this.mood}\n I am ths full: ${this.full}\n My energy is: ${this.energy}\n I am sick`);
       }
   }
   eat() {
      this.full = (this.full + 2);
      this.energy = (this.energy - 1);
      if (this.full > 10) {
          return (this.sick = true);
      }
    }
    medicate() {
      if (this.sick) {
         return this.full = 9,
         this.energy = (this.energy - 3),
         this.sick = false;
      } else {
        console.log(`refusal to take medicine`), this.energy = (this.energy -1);
      } 
    }
    play() {
    if(this.sick === true) {
        this.mood = this.mood - 1; this, this.energy = this.energy - 1;  
    } else if (this.mood > 9) {
            this.energy = this.energy - 2, this.full = this.full - 1;
        } else if (this.energy <= 3) {
            console.log(`I am too tired to play`), this.energy = this.energy - 1;
        } else {
            this.mood = this.mood + 2, 
            this.energy = this.energy - 1,
            this.full = this.full - 1;
        }
    } 
     sleep() {
         this.energy = this.energy + 4, this.full = this.full - 3;
     }
     timePasses() {
         if(this.sick === false) {
             this.mood = this.mood - 2, this.full = this.full  - 1, this.energy  = this.energy - 1; 
         } else {
            this.mood = this.mood - 3, this.full = this.full  - 2, this.energy  = this.energy - 2;
         }
     }
    
     badGuardian(){
         if(this.energy <= 0){
            console.log(`the tamagotchi has been rehomed`), this.rehomed = true;
         } else if (this.mood <= 0){
            console.log(`the tamagotchi has been rehomed`), this.rehomed = true;
         } else if (this.full <= true){
            console.log(`the tamagotchi has been rehomed`), this.rehomed = true;
         }
     }
    
};

const pet  = new Tamagotchi('Bulba', 5, 7, 11, sick = false)
console.log(pet)
pet.eat()
console.log(pet)


// Do not edit below this line
module.exports = Tamagotchi;
