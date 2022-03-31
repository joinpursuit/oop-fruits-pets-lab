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
            this.energy -= 3
        } else{
            this.energy -= 1
            console.log("Not Sick")
        }
    }

    play(){
        console.log(this)
        //play increases mood by 2, reduces energy & full by 1
        if(this.sick){
            this.mood--
            this.energy--
        }
        else if(this.mood > 9){
            this.energy -= 2
            this.full--
        }
        else if(this.energy <= 3){
            console.log("I am too tired to play")
            this.energy--
        }
        else {
            this.mood += 2
            this.energy--
            this.full--
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
            this.full--
            this.energy--
        }
    }

    badGuardian(){
        if(this.energy <= 0 || this.mood <= 0 ||this.full <= 0){
            this.rehomed = true
        }
    }
}

//console.log(rufhrei.nameMethod())
// Do not edit below this line
module.exports = Tamagotchi;
