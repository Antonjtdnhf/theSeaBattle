let loc1 = 2;
let loc2 = 3;
let loc3 = 4;
let isSunk = false;
let guesses = 0;
let hits = 0;

while (isSunk === false) {
    let guess = +prompt("", "2");
    if (guess === loc1) {
        alert(" You've hit the ship!");
        guesses++;
        hits++;
        while (isSunk === false) {
            let guess = +prompt("", "2");
            if (guess === loc1) {
                alert(" Already has been hit!");
                guesses++;
            } else if (guess === loc2) {
                alert("You've hit the ship twice!");
                hits++;
                guesses++;
                while (isSunk === false) {
                    let guess = +prompt("", "2");
                    if (guess === loc2 || guess === loc1) {
                        alert(" Already has been hit!");
                        guesses++;
                    } else if (guess === loc3) {
                        alert("You've sunk a ship!");
                        hits++;
                        guesses++;
                        isSunk = true;
                    } else {
                        alert("You've missed!");
                        guesses++;
                    }
                }
            } else if (guess === loc3) {
                alert("You've hit the ship twice!");
                hits++;
                guesses++;
                while (isSunk === false) {
                    let guess = +prompt("", "2");
                    if (guess === loc3 || guess === loc1) {
                        alert(" Already has been hit!");
                        guesses++;
                    } else if (guess === loc2) {
                        alert("You've sunk a ship!");
                        hits++;
                        guesses++;
                        isSunk = true;
                    } else {
                        alert("You've missed!");
                        guesses++;
                    }
                }
            } else {
                alert("You've missed!");
                guesses++;
            }
        }
    } else if (guess === loc2) {
        alert(" You've hit the ship!");
        guesses++;
        hits++;
        while (isSunk === false) {
            let guess = +prompt("", "2");
            if (guess === loc2) {
                alert(" Already has been hit!");
                guesses++;
            } else if (guess === loc1) {
                alert("You've hit the ship twice!");
                hits++;
                guesses++;
                while (isSunk === false) {
                    let guess = +prompt("", "2");
                    if (guess === loc2 || guess === loc1) {
                        alert(" Already has been hit!");
                        guesses++;
                    } else if (guess === loc3) {
                        alert("You've sunk a ship!");
                        hits++;
                        guesses++;
                        isSunk = true;
                    } else {
                        alert("You've missed!");
                        guesses++;
                    }
                }
            } else if (guess === loc3) {
                alert("You've hit the ship twice!");
                hits++;
                guesses++;
                while (isSunk === false) {
                    let guess = +prompt("", "2");
                    if (guess === loc3 || guess === loc2) {
                        alert(" Already has been hit!");
                        guesses++;
                    } else if (guess === loc1) {
                        alert("You've sunk a ship!");
                        hits++;
                        guesses++;
                        isSunk = true;
                    } else {
                        alert("You've missed!");
                        guesses++;
                    }
                }
            } else {
                alert("You've missed!");
                guesses++;
            }
        }
    } else if (guess === loc2) {
        alert(" You've hit the ship!");
        guesses++;
        hits++;
        while (isSunk === false) {
            let guess = +prompt("", "2");
            if (guess === loc2) {
                alert(" Already has been hit!");
                guesses++;
            } else if (guess === loc1) {
                alert("You've hit the ship twice!");
                hits++;
                guesses++;
                while (isSunk === false) {
                    let guess = +prompt("", "2");
                    if (guess === loc2 || guess === loc1) {
                        alert(" Already has been hit!");
                        guesses++;
                    } else if (guess === loc3) {
                        alert("You've sunk a ship!");
                        hits++;
                        guesses++;
                        isSunk = true;
                    } else {
                        alert("You've missed!");
                        guesses++;
                    }
                }
            } else if (guess === loc3) {
                alert("You've hit the ship twice!");
                hits++;
                guesses++;
                while (isSunk === false) {
                    let guess = +prompt("", "2");
                    if (guess === loc3 || guess === loc2) {
                        alert(" Already has been hit!");
                        guesses++;
                    } else if (guess === loc1) {
                        alert("You've sunk a ship!");
                        hits++;
                        guesses++;
                        isSunk = true;
                    } else {
                        alert("You've missed!");
                        guesses++;
                    }
                }
            } else {
                alert("You've missed!");
                guesses++;
            }
        }
    } else if (guess === loc3) {
        alert(" You've hit the ship!");
        guesses++;
        hits++;
        while (isSunk === false) {
            let guess = +prompt("", "2");
            if (guess === loc3) {
                alert(" Already has been hit!");
                guesses++;
            } else if (guess === loc1) {
                alert("You've hit the ship twice!");
                hits++;
                guesses++;
                while (isSunk === false) {
                    let guess = +prompt("", "2");
                    if (guess === loc3 || guess === loc1) {
                        alert(" Already has been hit!");
                        guesses++;
                    } else if (guess === loc2) {
                        alert("You've sunk a ship!");
                        hits++;
                        guesses++;
                        isSunk = true;
                    } else {
                        alert("You've missed!");
                        guesses++;
                    }
                }
            } else if (guess === loc2) {
                alert("You've hit the ship twice!");
                hits++;
                guesses++;
                while (isSunk === false) {
                    let guess = +prompt("", "2");
                    if (guess === loc3 || guess === loc2) {
                        alert(" Already has been hit!");
                        guesses++;
                    } else if (guess === loc1) {
                        alert("You've sunk a ship!");
                        hits++;
                        guesses++;
                        isSunk = true;
                    } else {
                        alert("You've missed!");
                        guesses++;
                    }
                }
            } else {
                alert("You've missed!");
                guesses++;
            }
        }
    } else {
        alert("You've missed!");
        guesses++;
    }
}
document.write("You've won with " + guesses + " guesses! Nice try!");
alert("You've won!");