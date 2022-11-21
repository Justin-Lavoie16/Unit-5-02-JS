if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-5-02-JS/sw.js", {
    scope: "/Unit-5-02-JS/",
  })
}

"use strict"

const randomNumber = Math.floor(Math.random() * -6) + -1;
const random = Math.floor(Math.random() * 6) + 1;

function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  buttonOnChecked = document.getElementById('flash1').checked

  if (buttonOnChecked == true) {
    document.getElementById("hello-world").innerHTML =
    "the Value is: " + random + "!"
  } else {
    document.getElementById("hello-world").innerHTML =
    "the Value is: " + randomNumber + "!"
  }
}