let age = prompt("What is your age", 18);
let x = 18 - age

if (age >= 18) {
    alert("You're eligible to vote");
} else {
    alert("Sorry, you're not eligible to vote yet. Come back in " + x + " years time");
}