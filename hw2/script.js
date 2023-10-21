

/* 1. Написати функцію, яка у випадку якщо типи двох аргументів string поверне їх зконкатенований вираз,
якщо типи двох аргументів number - поверне їх помножене значення
та у будь якому випадку не співпадіння поверне текст There are no type matches for operation */



function typeChecker(arg1, arg2) {
 if (typeof arg1 === "string" && typeof arg2 === "string"){
   return arg1 + arg2
 }else if (typeof arg1 === "number" && typeof arg2 === "number") {
   return arg1 * arg2
 }
 else {
   return "There are no type matches for operation"
 }
}

// Приклад роботи функції:
console.log(typeChecker(2, 3)); // виведе 6
console.log(typeChecker("My", "text")); // виведе Mytext
console.log(typeChecker(true, 5)); // виведе There are no type matches for operation

/* 2. Написати функцію, яка, використовуючи тернарний оператор, виводить у консоль Yes, якщо число
позитивне, та No якщо воно негативне */
function isNegative(value) {

let num = (value === -1) ? "Yes" : "No";
 console.log(num)

}

// Приклад роботи функції:
isNegative(-1); // виведе у консоль "Yes"
isNegative(1); // виведе у консоль "No"

/* 3. Написати функцію, яка повертає true якщо перший аргумент ділиться на другий без остачі,
або якщо ні - повертає false */
function divider(num1, num2) {
 if (num1 % num2 === 0){
  return true
 }else if (num1 % num2 === 1) {
  return false
 }

}
// Приклад роботи функції:
console.log(divider(4, 2)); // виведе у консоль true
console.log(divider(3, 2)); // виведе у консоль false

/* 4. Написати функцію, яка рекурсивно виводить в консоль аргумент та збільшує його на 2 якщо аргумент не
перевищує за значенням число 10 */
function recursiveAddition(value) {
 if(value < 0) return
 if(value === 1) return 2
 if(value === 10) return ""
 if(value === 11) return ""
 return  value + ' ' + recursiveAddition(value + 2 )

}

console.log(recursiveAddition(5))
console.log(recursiveAddition(2))
console.log(recursiveAddition(11))




//=====================================================
// for
/*

function recursiveAddition(value) {
 for (let i = 1 ; i <= 10; i= i+2){
  if(i < value){
   continue;

  }
  console.log(i)
 }
}
//Приклад роботи функції:
recursiveAddition(5); // виведе в консоль по черзі 5, 7, 9
recursiveAddition(11); // не виведе нічого

function recursiveAdditions(value) {
 for (let i = 2 ; i < 10; i= i+2) {
  if (i < value) {
   continue;
  }
  console.log(i)
 }
}
recursiveAdditions(2)
recursiveAdditions(11)
*/

// function step2(n) {
//  let i = 1;
//  do{
//   i = i + 2
//   console.log(i)
//  }while (i<n)
//
//
// }
// step2(10)


//===================




