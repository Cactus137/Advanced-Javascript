"use strict";
///////////////////////////////////////
// Thử thách viết mã số 4

// DỮ LIỆU KIỂM TRA:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
// Julia và Kate vẫn đang nghiên cứu về chó và lần này họ đang nghiên cứu xem chó ăn quá nhiều hay quá ít.
// Ăn quá nhiều nghĩa là khẩu phần ăn hiện tại của chó lớn hơn khẩu phần khuyến nghị, còn ăn quá ít thì ngược lại.
// Ăn một lượng vừa phải có nghĩa là khẩu phần ăn hiện tại của chó nằm trong khoảng 10% trên và 10% dưới khẩu phần khuyến nghị (xem gợi ý).

// 1. Lặp lại mảng chứa các đối tượng chó và đối với mỗi con chó, hãy tính phần thức ăn được đề xuất và thêm nó vào đối tượng làm thuộc tính mới. KHÔNG tạo mảng mới, chỉ cần lặp qua mảng đó. Forumla: khuyến nghịThực phẩm = trọng lượng ** 0,75 * 28. (Kết quả tính bằng gam thực phẩm và trọng lượng cần tính bằng kg)

dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2. Tìm con chó của Sarah và đăng nhập vào bảng điều khiển xem nó ăn quá nhiều hay quá ít. GỢI Ý: Một số con chó có nhiều chủ, vì vậy trước tiên bạn cần tìm Sarah trong mảng chủ sở hữu, và vì vậy việc này hơi khó (có mục đích) 🤓

// const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
// console.log(dogSarah);
// console.log(
//   `Sarah's dog is eating too ${
//     dogSarah.curFood > dogSarah.recFood ? "much" : "little"
//   } `
// );

// 3. Tạo một mảng chứa tất cả chủ sở hữu của những con chó ăn quá nhiều ('ownersEatTooMuch') và một mảng chứa tất cả chủ sở hữu của những con chó ăn quá ít ('ownersEatTooLittle').

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood * 1, 10)
  .flatMap((dog) => dog.owners);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood * 1, 10)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4. Ghi một chuỗi vào bảng điều khiển cho mỗi mảng được tạo trong 3., như thế này: "Chó của Matilda và Alice và Bob ăn quá nhiều!" và "Chó của Sarah, John và Michael ăn quá ít!"

console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

// 5. Đăng nhập vào bảng điều khiển xem có con chó nào ăn CHÍNH XÁC lượng thức ăn được khuyến nghị hay không (chỉ đúng hoặc sai)

console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6. Đăng nhập vào bảng điều khiển xem có con chó nào ăn một lượng thức ăn OK hay không (chỉ đúng hoặc sai)

const checkDog = (dog) => (dog.curFood > dog.recFood * 0.90 && dog.curFood < dog.recFood * 1.10);

console.log(dogs.some(checkDog));


// 7. Tạo một mảng chứa những con chó đang ăn một lượng thức ăn OK (cố gắng sử dụng lại điều kiện được sử dụng trong 6.)

const dogEatOK = dogs.filter(checkDog);
console.log(dogEatOK);

// 8. Tạo một bản sao nông của mảng chó và sắp xếp nó theo phần thức ăn được đề xuất theo thứ tự tăng dần (hãy nhớ rằng các phần nằm bên trong các đối tượng của mảng)

const copyDog = dogs.slice().sort((a, b) => a.recFood - b.recFood);

console.log(copyDog);


// GỢI Ý 1: Sử dụng nhiều công cụ khác nhau để giải các thử thách này, bạn có thể sử dụng bài giảng tóm tắt để lựa chọn giữa chúng 😉
// GỢI Ý 2: Nằm trong phạm vi 10% trên và dưới phần được đề xuất có nghĩa là: hiện tại > (được khuyến nghị * 0,90) && hiện tại < (được khuyến nghị * 1,10). Về cơ bản, phần hiện tại phải nằm trong khoảng từ 90% đến 110% phần được đề xuất.

// const z = Array.from({ length: 100 }, () =>
//   Array.from({ length: 3 }, () => Math.floor(Math.random() * (6 - 1 + 1) + 1))
// );
// console.log(z);

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
// const calcAverageHumanAge = (dogAges) => {
//   const humanAges = dogAges.map((dogAge) =>
//     dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
//   );
//   const humanAgeAfter = humanAges.filter((humanAge) => humanAge >= 18);
//   return humanAgeAfter.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

// };

//   }
// ;
// console.log(humanAges);

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

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
