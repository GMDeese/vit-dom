// var myUsername;
// var myPassword;

// function captureEmail(event) {
//   console.log(event.target.value);
// }
// function capturePassword(event) {
//   console.log(event.target.value);
// }

// document.getElementById("submit")
// addEventListener("click",function (event) {
//   event.preventDefault();
//   if (myUsername == "garrett" && myPassword == "vetsintech") {
//     console.log("You Signed in");
//   } else {
//     console.log("Bad Cred");
//   }
// }
//  document.getElementById("password").addEventListener("change",capturePassword);

var task;
function captureInput(event) {
  task = event.target.value;
  console.log(task);
}

function addTask() {
  var newItem = document.createElement("li");
  newItem.innerText = task;
  document.getElementById("list").appendChild(newItem);
}

document.getElementById("todo").addEventListener("change", captureInput);
document.getElementById("add").addEventListener("click", addTask);
