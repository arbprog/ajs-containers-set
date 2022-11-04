export default class Character {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new Error('Имя персонажа должно быть строкой');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя меньше 2 или больше 10 симоволов');
    }
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}
