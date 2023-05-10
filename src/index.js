let joinButton = document.querySelector("#join-button");
joinButton.addEventListener("click", displayMessage);

function displayMessage() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");

  alert(
    `Thank you ${name}, We will send you an email on ${email}. Have a good day!`
  );
}
