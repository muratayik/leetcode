const findTheWinner = () => {
  let activeKnight = generatedKnightsDataAndReturnFirst();

  while (activeKnight.next !== activeKnight) {
    if (activeKnight.health <= 0) {
      activeKnight.previous.next = activeKnight.next;
      activeKnight.next.previous = activeKnight.previous;
    } else {
      const damage = Math.ceil(Math.random() * 6);
      activeKnight.next.health -= damage;
    }

    activeKnight = activeKnight.next;
  }

  return activeKnight.name;
};

const generatedKnightsDataAndReturnFirst = () => {
  const K1 = {
    name: "Knight 1",
    health: 100,
    previous: null,
    next: null,
  };

  const K2 = {
    name: "Knight 2",
    health: 100,
    previous: null,
    next: null,
  };
  const K3 = {
    name: "Knight 3",
    health: 100,
    previous: null,
    next: null,
  };
  const K4 = {
    name: "Knight 4",
    health: 100,
    previous: null,
    next: null,
  };
  const K5 = {
    name: "Knight 5",
    health: 100,
    previous: null,
    next: null,
  };
  const K6 = {
    name: "Knight 6",
    health: 100,
    previous: null,
    next: null,
  };

  K1.next = K2;
  K2.next = K3;
  K3.next = K4;
  K4.next = K5;
  K5.next = K6;
  K6.next = K1;

  K1.previous = K6;
  K2.previous = K1;
  K3.previous = K2;
  K4.previous = K3;
  K5.previous = K4;
  K6.previous = K5;

  return K1;
};

const listOfWinners = {
  "Knight 1": 0,
  "Knight 2": 0,
  "Knight 3": 0,
  "Knight 4": 0,
  "Knight 5": 0,
  "Knight 6": 0,
};

for (let i = 0; i < 1000000; i++) {
  const winnerKnightName = findTheWinner();
  listOfWinners[winnerKnightName]++;
}

console.log(listOfWinners);
