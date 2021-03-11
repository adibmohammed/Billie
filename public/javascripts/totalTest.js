/*DOM*/

// let array = [];

// console.log(document.querySelectorAll('.dom-amount'))

// let array2 = document.querySelectorAll('.dom-amount').reduce((a, b) => {
//   return a + b;
// }, 0);

// document.querySlector('total-incomes').innerHTML = array2;

// // console.log(array2)

// /*SIMO*/

let sum = 0;

let expensesArray = document.querySelectorAll('dom-amount').innerHTML;

function sumFunction(a, b){
 return a + b;
}

expensesArray.forEach( expensesArray => {
  sum = sumFunction(sum, expensesArray)
});





document.getElementById('total-incomes').innerHTML = sumFunction(expenesArray);


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
