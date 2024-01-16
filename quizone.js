// Question one
//Open in dedault broswer console for the results.
let randomNumber = Math.floor(Math.random()* 10 + 1)
while(true) {
    let guessedNumber = prompt('Enter a number between 1 and 10');
    if(randomNumber === guessedNumber) {
        alert('Good work')
    } else {
        alert('Not matched')
    }
}
