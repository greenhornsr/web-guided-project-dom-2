console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

/* alternate option to using defer in script tag of html page is using the following in .js
Target browser must support the defer tag in order to use defer.
window.onload = function() {
    All of my program would go here
    const launchButton = document.querySelector('#launchButton')
    console.log('the button -> ', launchButton )
}
An even better approach would be to use:
window.addEventListener('load', function(event){
    // ALL OF YOU PROGRAM HERE
    // if you can't use the defer attribute in html, for example
    // or if you want to make sure some code runs AFTER 
    // the 'load' event fires on the tab
    // (which would mean the DOM is constructed)
})

*/

// A- BUTTONS
const launchButton = document.querySelector('#launchButton')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')

// B- MESSAGES
const successMessage = document.querySelector('.success')
const failureMessage = document.querySelector('.failure')

// C- MODAL
const modal = document.querySelector('.modal')

// used to debug code; very powerful!  USE THIS!
// debugger

// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute
launchButton.onclick = function() {
    console.log('old way')
}
//  C- element.addEventListener('click', callback)
function eventListener (event) {
    // handle click event
    // console.log('newest and best way to handle events.  Also allows us to add multiple events to the button which will all fire.')
    successMessage.classList.add('off')
    failureMessage.classList.add('off')
    console.log(`
    event type: ${event.type}
    event target: ${event.target.nodeName}
    event timestamp: ${Math.floor(event.timeStamp /  1000)}
    `)
}
//html element.addevent        event , callback
launchButton.addEventListener('click', eventListener)


// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
launchButton.addEventListener('click', openModal)


// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
confirmButton.addEventListener('click', function(event){
    closeModal()
    successMessage.classList.remove('off')
})

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
cancelButton.addEventListener('click', function(event){
    closeModal()
    failureMessage.classList.remove('off')
})

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
document.addEventListener('keydown', e => {
    // debugger
    if (e.code === 'Escape') {
        closeModal()
    }
})


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {
    modal.classList.remove('off')
}

function closeModal() {
    modal.classList.add('off')
}

function killReports() {

}


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
