// Get the modalAddAll
var modalAll = document.getElementById("modalAddAll");
// Get the button that opens the modal
var btnModalAll = document.getElementById("addModalAllBtn");
// Get the <span> element that closes the modal
var spanModalAll = document.getElementsByClassName("closeModalAddAll")[0];
// When the user clicks the button, open the modal
btnModalAll.onclick = function () {
    modalAll.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
spanModalAll.onclick = function () {
    modalAll.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalAll) {
    modalAll.style.display = "none";
  }
};
