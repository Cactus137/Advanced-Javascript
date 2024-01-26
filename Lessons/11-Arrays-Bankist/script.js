"use strict";
// Coding Challenge #2

/* 
Chúng ta hãy quay trở lại nghiên cứu của Julia và Kate về loài chó. Lần này, họ muốn chuyển đổi tuổi của chó sang tuổi của con người và tính tuổi trung bình của những con chó trong nghiên cứu của họ.

Tạo hàm 'calcAverageHumanAge', chấp nhận một mảng độ tuổi của chó ('ages') và thực hiện những việc sau theo thứ tự:

1. Tính tuổi chó theo năm của con người bằng công thức sau: nếu chó <= 2 tuổi thì humanAge = 2 * dogAge. Nếu chó > 2 tuổi, humanAge = 16 + dogAge * 4.
2. Loại trừ tất cả những con chó dưới 18 tuổi (giống như nuôi những con chó ít nhất 18 tuổi)
3. Tính tuổi trung bình của con người của tất cả chó trưởng thành (bạn hẳn đã biết từ những thử thách khác về cách chúng tôi tính trung bình 😉)
4. Chạy hàm cho cả hai tập dữ liệu thử nghiệm

DỮ LIỆU KIỂM TRA 1: [5, 2, 4, 1, 15, 8, 3]
DỮ LIỆU KIỂM TRA 2: [16, 6, 10, 5, 6, 1, 4]

Chúc may mắn 😀
*/
// const dogAges = [5, 2, 4, 1, 15, 8, 3];
// const calcAverageHumanAge = function (dogAges) {
const calcAverageHumanAge = (dogAges) => {
  const humanAges = dogAges.map((dogAge) =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  const humanAgeAfter = humanAges.filter((humanAge) => humanAge >= 18);
  return humanAgeAfter.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
  
};

//   }
// ;
// console.log(humanAges);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4] 
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);
//   const dogs = dogsJuliaCorrected.concat(dogsKate);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Chú chó ${i + 1} đã trưởng thành`);
//     } else {
//       console.log(`Chú chó ${i + 1} vẫn là chó con 🐶`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/*
let arr = ["a", "b", "c", "d", "e"];

// SLICE METHOD
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);
console.log(arr);

//SPLICE METHOD

// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["1", "2", "3", "4", "5"];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
console.log("-------");
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

//JOIN 
console.log(letters.join('.'));
*/

/*
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// geting last array element
console.log(arr[arr.length -1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); 

console.log("cactus".at(0));
console.log("cactus".at(-1));
*/

// const movements = [200, 450, -400, 544, 494, -222, 34, -1999];

// for(const movement of movements) {
//     if(movement > 0) {
//         console.log(`You deposited ${movement}`);
//     }else {
//         console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// }
// console.log('forEach');
// movements.forEach(function(movement) {
//     if(movement > 0) {
//         console.log(`You deposited ${movement}`);
//     }else {
//         console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// })
