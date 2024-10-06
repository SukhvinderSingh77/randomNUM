// Accessing html elements
const input = document.getElementById("num");
const more = document.getElementById("more10");
const less = document.getElementById("less0");
const win = document.getElementById("win");
const loose = document.getElementById("lose");
const checkBtn = document.querySelector("button");

const numOne = document.getElementById("numOne");
const numTwo = document.getElementById("numTwo");


checkBtn.addEventListener("click", () => {
    guessGame(); // run game logic
});

// game logic
function guessGame() { 
    var randomNum = Math.floor(Math.random() * 11); //
    var userNum = Number(input.value);


    console.log(userNum);
    console.log(typeof userNum, typeof randomNum);
    if (userNum === randomNum) {
        win.style.display = "block";
        numOne.textContent = userNum;
        numTwo.textContent = randomNum;
        setTimeout(() => {
            win.style.display = "none";
            numOne.textContent = "";
            numTwo.textContent = "";
        }, 2000); // hiding element after 2s
        console.log(`User Num: ${userNum}, Random Num: ${randomNum}`);
    } else if (userNum > 10) {
        more.style.display = "block";
        numOne.textContent = userNum;
        numTwo.textContent = randomNum;
        setTimeout(() => {
            more.style.display = "none";
            numOne.textContent = "";
            numTwo.textContent = "";
        }, 2000); // hiding element after 2s
        console.log(`User Num: ${userNum}, Random Num: ${randomNum}`);
    } else if (userNum < 0) {
        less.style.display = "block";
        numOne.textContent = userNum;
        numTwo.textContent = randomNum;
        setTimeout(() => {
            less.style.display = "none";
            numOne.textContent = "";
            numTwo.textContent = "";
        }, 2000); // hiding element after 2s
        console.log(`User Num: ${userNum}, Random Num: ${randomNum}`);
    } else {
        loose.style.display = "block";
        numOne.textContent = userNum;
        numTwo.textContent = randomNum;
        setTimeout(() => {
            loose.style.display = "none";
            numOne.textContent = "";
            numTwo.textContent = "";
        }, 2000); // hiding element after 2s
        console.log(`User Num: ${userNum}, Random Num: ${randomNum}`);
    }
}
