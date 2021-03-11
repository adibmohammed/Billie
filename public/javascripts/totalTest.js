/*DOM*/

// let array = [];

console.log(document.querySelectorAll('.dom-amount'))

let array2 = document.querySelectorAll('.dom-amount').reduce((a, b) => {
  return a + b;
}, 0);

document.querySlector('total-incomes').innerHTML = array2;

// // console.log(array2)

// /*SIMO*/

// console.log(document.querySelectorAll('dom-amount').innerHTML)

// let expensesArray = [0];
// document.getElementsByClassName('dom-amount').innerHTML
// expensesArray.reduce(sumFunction);

// function sumFunction(a, b){
//   let mySum = a + b;
//   return mySum;
// }

// let truc = document.getElementById('total-incomes').innerHTML;

// truc = sumFunction();
// console.log(truc)


// /*AMALIA*/
// // console.log("HEYA");

// // function calcTotal(arr) {
// //   let amount = document.getElementsByClassName("dom-amount");

// //   let number = amount.innerHTML;
// //   let result = 0;
// //   result += number;
// //   return result;
// // }

// // income = calcTotal(income);

// // /*BALANCE*/
// // function calcBalance(income, outcome) {
// //   return income - outcome;
// // }
