// Get the modalAddAll
console.log("HELLO POP UP");

// Get the button that opens the modal
const btnModalAll = document.getElementById("addModalAllBtn");
const modalAll = document.getElementById("modalAddAll");
const closeModalAddAll = document.getElementsByClassName("closeModalAddAll")[0];


btnModalAll.addEventListener("click", function (event) {
  modalAll.style.display = "flex";
  modalAll.style.visibility = "visible";
});

closeModalAddAll.addEventListener("click", function(event) {
  modalAll.style.display = "none";
})


// window.onclick = function(event) {
//   if (event.target == modalAll) {
//     modalAll.style.display = "none";
//   }
// }
