function review() {
  let giveaway = prompt("Want to win $100? add name to drawing ");

  console.log(giveaway);
}
review();

const para = document.querySelector(".pnk");

const press = document.querySelector(".btn");

function newColor() {
  document.querySelector(".pnk").style.color = "red";
}
function chnge() {
  document.querySelector("#sng").style.color = "green";
}
setTimeout(chnge, 5000);
