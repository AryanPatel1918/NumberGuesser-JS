function playGame() {
    var guesses = 0;
    var randNum = Math.floor(Math.random() * 100) + 1;
    console.log(randNum);

    function isValid(num) {
        while (num == "" || isNaN(num)) {
            num = prompt("Guess a number between 1-100");
        }
        return num;
    }

    let guess = prompt("Guess a number between 1-100");
    guess = isValid(guess);
    while (guess != randNum) {
        guesses++;
        if (guess < randNum) {
            guess = prompt("Guess HIGHER than " + guess);
            guess = isValid(guess);
        }
        if (guess > randNum) {
            guess = prompt("Guess LOWER than " + guess);
            guess = isValid(guess);
        }
    }
    guesses++;
    alert("You guessed the number " + randNum);
    document.getElementById("number").innerHTML = "The number was " + randNum;
    document.getElementById("attempts").innerHTML = `It took you ${guesses} attempt(s)`;
}