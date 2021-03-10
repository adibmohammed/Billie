/*DOM*/

function calcTotal() {
  let amount = document.getElementsByClassName("dom-amount");

  let number = amount.innerHTML;
  let result = 0;
  result += number;
  return result;
}

income = calcTotal(income)

/*BALANCE*/
function calcBalance(income, outcome) {
    return income - outcome;
}