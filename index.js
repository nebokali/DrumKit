'use strict';

let buttons = document.getElementsByTagName("button");
var innerText = "";

function makeSound(key) {
  switch (innerText) {
    case innerText = "w":
      console.log(innerText);
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case innerText = "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case innerText = "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case innerText = "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case innerText = "j":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case innerText = "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case innerText = "l":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    default:
      console.log(innerText);
      break;
  }
}

function buttonAnimation(pressedButton) {
  var activeButton = document.querySelector("." + pressedButton);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

for (let i = 0; i <= 6; i++)  {
  buttons[i].addEventListener("click", function() {
    innerText = this.textContent;
    makeSound(innerText);
    buttonAnimation(innerText);
  });

  document.addEventListener("keypress", function(event) {
    innerText = event.key;
    makeSound(innerText);
    buttonAnimation(innerText);
  });
}
