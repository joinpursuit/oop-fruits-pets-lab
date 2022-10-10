// Create class below
class Food {
    constructor(name, daysToSpoil) {
      this.name = name;
      this.daysToSpoil = daysToSpoil;
      this.fresh = true;
     }
     prepare() {
      console.log(`${this.name} is being prepared`);
     }
// Do not edit below this line
module.exports = Food;
