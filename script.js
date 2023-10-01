const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to players
const team = players;

// Create a copy of players
const team1 = players.slice();

// Create a shallow copy of the person object
const cap1 = { ...person };

// Testing modifications
players.push( "Poppy");
person.name =  "John Doe";
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
