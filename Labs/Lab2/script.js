// // Lab 2.1
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

// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);
// // 3.
// console.log(`1 sự kiện xảy ra, trung bình mỗi ${90 / gameEvents.size} phút`);
// // 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
// //       [FIRST HALF] 17: ⚽️ GOAL
// for (const item of gameEvents) {
//   console.log(
//     `${item[0] <= 45 ? "[FIRST HALF]" : "[SECOND HALF]"} : ${item[1]}`
//   );
// }

// // Lab 2.2
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

// Lab 2.3
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
const getCode = (str) => str.slice(0, 3).toLocaleUpperCase();
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ":",
    "h"
  )})`.padStart(50);

  console.log(output);
}

// Lab 2.4
// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";
//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();
