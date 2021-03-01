//varibles
let firstName = prompt("Enter your first name")
let lastName = prompt("Enter your last name")

//1st check input
if (firstName.match(/^[a-zA-Z_ ]*$/) && lastName.match(/^[a-zA-Z_ ]*$/)) {

    let capFirstName = firstName[0].toUpperCase() + (firstName.slice(1)).toLowerCase();
    let capLastName = lastName[0].toUpperCase() + (lastName.slice(1)).toLowerCase();

    alert('Greetings ' + capFirstName + ' ' + capLastName)
    console.log('Greetings ' + capFirstName + ' ' + capLastName)
} else {
    alert("Wrong input")
}