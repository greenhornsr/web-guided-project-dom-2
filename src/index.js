console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:
// A- BUTTONS
const launchButton = document.querySelector("#launchButton");
const confirmButton = document.querySelector("#confirmButton");
const cancelButton = document.querySelector("#cancelButton");

// B- MESSAGES
const successMessage = document.querySelector("h1.success");
const failureMessage = document.querySelector("h1.failure");

// C- MODAL
const modal = document.querySelector(".modal");

// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute
launchButton.onclick = function() {
  console.log("Wait, what happened to my friend in the HTML?");
}
//  C- element.addEventListener('click', callback)
launchButton.addEventListener("click", function(event) {
  // console.log(event.key);
})

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal. AKA ---> remove the class of off??
// Add it as an event listener for click events on the launch button.

/**
 * Two ways to declare a function in JS...?
 * 1.) Declaration -> function myFunc() {}    // Hoisted!
 * 2.) Expression  -> const myFunc = () => {} // NOT HOISTED YAY!!
 * var, let, const
 * myFunc();
 * func myFunc() {} // WORKS WOWZA!
 * 
 * myFunc();
 * const myFunc = () => {} // DOESN'T WORK OOOOOPS!!!
 */

function launch() {
  modal.classList.remove("off");
  failureMessage.classList.add("off");
  successMessage.classList.add("off");
}
launchButton.addEventListener("click", launch);

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// modal => add a class of off
// successMessage => remove a class of off
// Add it as a listener for clicks on the confirmation button.
function confirm() {
  modal.classList.add("off");
  successMessage.classList.remove("off");
}
confirmButton.addEventListener("click", confirm);

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
function cancel() {
  failureMessage.classList.remove("off");
  modal.classList.add("off");
}
cancelButton.addEventListener("click", cancel);
// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
function escKey(evt) {
  if (evt.key === "Escape") {
    modal.classList.add("off");
  }
}
document.addEventListener("keydown", escKey);

// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
document.querySelectorAll("*").forEach(elem => elem.addEventListener("click", evt => {
  // console.log("target:          ", evt.target);
  // console.log("current target:  ", evt.currentTarget);
  // console.log("\n");
}))

modal.addEventListener("click", event => {
  console.log("Take this JS!");
  event.stopPropagation();
})


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {

}

function closeModal() {

}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.





// PHASE COMPLETE!!!!!
// Phase two ::: on click of the button, create an h2 element with the text "TBD"
const happyButton = document.querySelector("#happy");
happyButton.addEventListener("click", () => {
  const happyMessage = document.createElement("h2");
  document.body.appendChild(happyMessage);
  happyMessage.textContent = "I'm extremely optimistic about the future of the human species";
  const sadMessage = document.createElement("h2");
  sadMessage.textContent = "...";
  document.body.appendChild(sadMessage);
})