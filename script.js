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
players.push("Sarah");
person.name = "Alice Johnson";

console.log("Team:", team); // This will reflect changes in players
console.log("Team1:", team1); // This will not reflect changes in players
console.log("Cap1:", cap1); // This will not reflect changes in person
