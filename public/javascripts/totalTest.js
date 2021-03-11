/*DOM*/

// let array = [];

// console.log(document.querySelectorAll('.dom-amount'))

// let array2 = document.querySelectorAll('.dom-amount').reduce((a, b) => {
//   return a + b;
// }, 0);

// document.querySlector('total-incomes').innerHTML = array2;

// // console.log(array2)

// /*SIMO*/

let expensesArray = document.getElementsByClassName('swing-in-bottom-fwd').innerHTML;
console.log("Expenses Array =" + expensesArray);

expensesArray.reduce((a,b) => a + b, 0);

document.getElementById('total-incomes').innerHTML = newSum;
// let sum = 0;

// 

// function sumFunction(a, b){
//  return a + b;
// }

// expensesArray.forEach( expensesArray => {
//   sum = sumFunction(sum, expensesArray)
// });





// 


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
