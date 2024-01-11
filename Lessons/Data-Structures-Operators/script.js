/*
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/

/*
// Coding Challenge #1
// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);
console.log("----------------------");
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
console.log("----------------------");
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2]
console.log(allPlayers);
console.log("----------------------"); 
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
console.log("----------------------");  
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);
console.log("----------------------");  
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
function printGoals(...player){
  console.log(player);
  console.log(`${player.length} goals were scored`);
}
printGoals(...game.scored)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
const result = team1 || team2 ? "team1" : team2;
console.log(result);
team1 < team2 && console.log("team1 win");
team1 > team2 && console.log("team2 win");
*/
/*
// Coding Challenge #2

 
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [i, name] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${name}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let avg = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  avg += odd;
}
avg = avg / odds.length;
console.log(`AVG = ${avg}`);

//3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//      Odd of victory Bayern Munich: 1.33
//      Odd of draw: 3.25
//      Odd of victory Borrussia Dortmund: 6.5
//Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

for (const odd of Object.keys(game.odds)) {
  let name = game[odd] || "Draw";
  console.log(`Odd of ${name}: ${game.odds[odd]}`);
}
console.log("----");
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
} 
//BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//      {
//        Gnarby: 1,
//        Hummels: 1,
//        Lewandowski: 2
//      } 
console.log("----");
let scorers = {}; 
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);

 */

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

/**
 // Coding Challenge #3
 
// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);
// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);
// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL  

 */

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
// THIS TEST DATA (pasted to textarea)
// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// document.querySelector("button").addEventListener("click", function () {
//   const listStr = document.querySelector("textarea").value;
//   const arrStr = listStr.split("\n");
//   for (let i = 0; i < arrStr.length; i++) {
//     const element = arrStr[i].trim().toLocaleLowerCase();
//     const prepare = element.split("_");
//     const output = [prepare[0]];
//     for (let j = 1; j < prepare.length; j++) {
//       output.push(
//         prepare[j].charAt(0).toLocaleUpperCase() + prepare[j].slice(1)
//       );
//     }
//     console.log(output.join(""));
//   }
// });

// String Methods Practice

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)


// Create function small
const getCode = str => str.slice(0,3).toLocaleUpperCase();
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`.padStart(50);

  console.log(output);
}

const weekday = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekday[4]]: {
    open: 12,
    close: 22,
  },
  [weekday[5]]: {
    open: 11,
    close: 23,
  },
  [weekday[6]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // ES6 enhanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// String
// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(airline.length);
// console.log("B737".length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 8));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-4));

/*
// For-of
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item); //only get value 
for (const item of menu.entries()) console.log(item); // get both index and value
// console.log([...menu.entries()]);
console.log("-----MENU-----");
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}  
// Object Key
const properties = Object.keys(openingHours);
console.log(`We are open on ${properties.length} day`);
for (const day of properties) {
  console.log(day);
}
// Values
const values = Object.values(openingHours);object
// console.log(entries);
for (const [day, { open, close }] of entries) {
  console.log(`On ${day}, We open at ${open} and close at ${close}`);
} 
*/

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(orderSet);

// console.log(new Set('Jonas'));

// console.log(orderSet.size);

// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));

// orderSet.add('Garlic Bread');
// orderSet.add('Garlic Bread');
// orderSet.delete('Risotto');
// // orderSet.clear();
// console.log(orderSet);

// console.log(orderSet[0]);

// for (const order of orderSet) {
//   console.log(order);
// }

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];

// console.log(staff);
// console.log(staffUnique);

// console.log(new Set('levanthah').size);

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 22)
//   .set(true, 'We are open ...')
//   .set(false, 'We are close ..');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(false));
// console.log(rest.get(1));
// console.log(rest.get('1')); // undefined

// const time = 23;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'Test');

// rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct"],
//   [false, "Try again!"],
// ]);
// console.log(question);

// // Convert Object to map
// console.log(Object.entries(openingHours));
// const hourMap = new Map(Object.entries(openingHours));

// console.log(hourMap);
// console.log("-----Quiz-----");
// // Quiz app
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt("Your answer"));
// const answer = 3;
// console.log(question.get(answer === question.get("correct")));

// // Convert map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());
