// TODO: write your code here

class Team {
  constructor(size) {
    this.size = size;
    this.char = {
      name: 'Лучник',
      type: 'Bowman',
      health: 50,
      level: 1,
      attack: 40,
      defence: 10,
    };
  }

  * [Symbol.iterator]() {
    let counter = 0;
    while (counter <= this.size) {
      counter += 1;
      yield this.char;
    }
  }
}


const myTeam = new Team(7);

for (const inter of myTeam) {
  console.log(inter);
}
