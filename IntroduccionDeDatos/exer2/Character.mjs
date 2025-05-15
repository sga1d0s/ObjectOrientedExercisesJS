export default class Character {
  constructor(name, type, life) {
    this.name = name
    this.type = type
    this.life = life
  }

  printData(){
    console.log(`${this.name} the ${this.type} has ${this.life} life points`)
  }
}