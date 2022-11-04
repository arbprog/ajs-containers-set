export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error(`Персонаж ${char.name} уже есть в команде`);
    } else {
      this.members.add(char);
    }
  }

  addAll(...chars) {
    chars.forEach((char) => {
      this.add(char);
    });
  }

  toArray() {
    const team = Array.from(this.members);
    return team;
  }
}
