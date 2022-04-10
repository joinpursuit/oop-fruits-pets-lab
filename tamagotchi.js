// Create class below

class Tamagotchi{
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name = name
        this.energy = energy
        this.full = full
        this.mood = mood
        this.sick = sick
        this.rehomed = rehomed
    }

    greet(){

    }

    status(){

    }

    eat(){
        
        if (this.full >= 10 ){
            this.sick = true;
        }
        
        this.full+= 2;
        --this.energy;
    }

    medicate(){
        if(this.sick){
            this.sick =false
            this.full = 9
            this.energy -= 3
        } else{
            --this.energy
        }
    }

    play(){
        const {sick,mood,energy, full}= this

        if(sick){
            --this.mood
            --this.energy
        } else if(mood > 9){
            this.energy -= 2
            --this.full
        } else if(energy <= 3){
            console.log("I am too tired to play")
            --this.energy 
        } else {

            this.mood += 2
            --this.energy
            --this.full
        }

        
    }

    sleep(){
        this.energy += 4
        this.full -= 3

        
    }

    timePasses(){
        if(!this.sick){

        this.mood -= 2
        --this.full
        --this.energy
        
        } else {

        this.mood -= 3
        this.full -= 2
        this.energy -= 2

        }

        
        
    }
    
    badGuardian() {
        if (this.energy <= 0 || this.full <= 0 || this.mood <= 0) {
            
            this.rehomed = true
    }
    }

}

// Do not edit below this line
module.exports = Tamagotchi;
