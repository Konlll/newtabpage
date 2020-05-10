// DOM elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

// Show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  //const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr format
  //hour = hour % 12 || 12;

  // Output time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    //document.body.style.backgroundImage = "url('../img/1.jpg')";

    document.body.classList.add("morning");
    document.body.classList.remove("afternoon");
    document.body.classList.remove("evening");

    greeting.textContent = "Good Morning!";
  } else if (hour < 18) {
    // Afternoon
    //document.body.style.backgroundImage = "url('../img/2.jpg')";

    document.body.classList.remove("morning");
    document.body.classList.add("afternoon");
    document.body.classList.remove("evening");

    greeting.textContent = "Good Afternoon!";
  } else {
    // Evening
    //document.body.style.backgroundImage = "url('../img/3.jpg')";

    document.body.classList.remove("morning");
    document.body.classList.remove("afternoon");
    document.body.classList.add("evening");

    greeting.textContent = "Good Evening!";
    document.body.style.color = "white";
  }
}

// Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter Name]";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// Set Name
function setName(e) {
  // Make sure enter is pressed
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Set focus
function setFocus(e) {
  // Make sure enter is pressed
  if (e.type === "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    name.textContent = localStorage.getItem("focus");
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
