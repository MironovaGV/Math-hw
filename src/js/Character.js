export default class Character {
  constructor() {
    this.attackDefense = null;
    this.damage = 0;
  }

  set attack(cell) {
    if (cell >= 11) {
      this.damage = 0;
    } else {
      const percent = 0.1;
      const attack = this.attackDefense.split('/').shift();

      this.damage = attack - ((cell - 1) * percent * attack);
    }
  }

  get attack() {
    return this.damage;
  }

  set stoned(cell) {
    this.attack = cell;
    const damage = this.attack - Math.log2(cell) * 5;

    if (damage < 0) {
      this.damage = 0;
    } else {
      this.damage = damage;
    }
  }

  get stoned() {
    return this.damage;
  }
}
