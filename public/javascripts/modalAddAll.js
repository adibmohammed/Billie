// Get the modalAddAll
console.log("HELLO POP UP")

const modalAll = document.getElementById("modalAddAll");
// Get the button that opens the modal
const btnModalAll = document.getElementById("addModalAllBtn");

console.log(btnModalAll)
//Handle click for adding an expense or an income
function handleClick(evt) {
  evt.target.classList.add("clicked");
    modalAll.style.display = "flex";
    modalAll.style.visibility = "visible";
}

btnModalAll.onclick = handleClick;







// // Get the <span> element that closes the modal
// var spanModalAll = document.getElementById("closeModalAddAll");
// // When the user clicks the button, open the modal
// btnModalAll.onclick = function () {
//     modalAll.style.display = "block";
// };
// // When the user clicks on <span> (x), close the modal
// spanModalAll.onclick = function () {
//     modalAll.style.display = "none";
// };
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modalAll) {
//     modalAll.style.display = "none";
//   }
// };
