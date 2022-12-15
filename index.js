
let randomNum = Math.floor(Math.random() * 100) + 1;
let numDisplay = document.querySelector('#randomNumber')
numDisplay.textContent = randomNum;

let input = document.getElementById("input");
const guesses = document.querySelector('#allGuesses');
const btn = document.querySelector('#guessBtn');
let response = document.querySelector('#response');

let guessCounter = 5;
let guessArr = [];

// btn.addEventListener('click', () => {
//     guessCounter -= 1;
//     if (guessCounter > 0) {
//         guessArr.push(input.value);
//         if (input.value == randomNum) {
//             response.textContent = 'You win!';
//         }
//         else if (input.value < randomNum) {
//             response.textContent = 'Higher!';
//         }
//         else if (input.value > randomNum) {
//             response.textContent = 'Lower!';
//         }
//     } 
//     else {
//         response.textContent = `You lost! The correct number was ${randomNum}`;
//     }

//     guesses.textContent = guessArr;
// }); 




btn.addEventListener('click', () => {
    guessCounter -= 1;
    if (guessCounter > 0) {
        guessArr.push(input.value);
        if (input.value == randomNum) {
            response.textContent = 'You win!';
            input.disabled = true;
            btn.disabled = true; 
        }
        else if (input.value < randomNum) {
            response.textContent = 'Higher!';
            if (Math.abs(randomNum - input.value) <= 10) {
                response.style
            }
            else {
                
            }
        }
        else if (input.value > randomNum) {
            response.textContent = 'Lower!';

        }
    } 
    else {
        response.textContent = `You lost! The correct number was ${randomNum}`;
        input.disabled = true; 
        btn.disabled = true;
    }

    guesses.textContent = guessArr;
});

