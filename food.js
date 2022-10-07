// Create class below
class Food {
  constructor(name, fresh = true) {
    this.name = name
    this.daysToSpoil = 9
    this.fresh = fresh
  }
  prepare() {
    return `${this.name} is being prepared`
  }
  isFresh() {
    if (this.daysToSpoil > 0) {
      return `There are ${this.daysToSpoil} days left before ice cream spoils`
    } else {
      return `ice cream has spoiled`
    }
  }
    aDayPasses() {
      this.daysToSpoil--
  }
}
let fresh = new Food('apple', true)
// Do not edit below this line
console.log(fresh.aDayPasses())
console.log(fresh.isFresh())
console.log(fresh.prepare())
module.exports = Food
