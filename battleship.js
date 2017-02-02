var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var iSunk = false;

/* DEBUG
alert("Location1: " + location1);
alert("location2: " + location2);
alert("location3: " + location3);
*/

while (iSunk == false) {
  guess = window.prompt("Ready, aim, fire! (enter a number from 0 - 6): ");
  if (guess < 0 || guess > 6) {
    window.alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;
    if (guess == location1 || guess == location2 || guess == location3) {
      window.alert("HIT!");
      hits = hits + 1;
      if (hits == 3) {
        iSunk = true;
        window.alert("You sank my battleship!");
      }
    } else {
      window.alert("MISS");
    }
  }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3 / guesses);
window.alert(stats);