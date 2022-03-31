// Create class below
class Tamagotchi{
    constructor(name, energy = 9, full = 8, mood = 6, sick = false, rehomed = false){
        this.name = name
        this.energy = energy
        this.full = full
        this.mood = mood
        this.sick = sick
        this.rehomed  = rehomed
    }

    greet(){

    }

    status(){
        
    }

    eat(){
       this.full += 2
       this.energy-- 
       if(this.full > 10){
           this.sick = true
       }
    }

    medicate(){
        if(this.sick){
            this.full = 9
            this.sick = false
        } else{
            console.log("Not Sick")
        }
    }
}
// Do not edit below this line
module.exports = Tamagotchi;
