//initializing some value

let totaalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;




// finding element 
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const gussingNumber = form.querySelector("#gussingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");








form.addEventListener("submit", function(event) {
    event.preventDefault();

    attempts++;
    if (attempts == 5) {
        gussingNumber.disables = true;
        checkButton.disables = true;
    }
    if (attempts < 6) {
        let gussNumber = Number(gussingNumber.value);
        checkResult(gussNumber);
        remainingAttempts.innerHTML = `remaining attempts:${totaalAttempts-attempts}`;
    }
    gussingNumber.value = "true";
})






function checkResult(gussingNumber) {
    const randomNumber = getRendomNumber(5)
    if (gussingNumber == randomNumber) {
        resultText.innerHTML = `you have wons:`;
        totalWons++;
    } else {
        resultText.innerHTML = `you have lost; random number was:${randomNumber}`;
        totalLosts++;
    }

    lostWonMessage.innerHTML = `won:${totalWons} : lost:${totalLosts}`
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);

}



function getRendomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}







































// form.addEventListener("submit", function(event) {
// event.preventDefault();
// // console.log(gussingNumber.value);
// checkResult(gussingNumber.value)
// attempts++;
// if (attempts > 5) {
// gussingNumber.disabled = true;
// checkButton.disabled = true;
// } else {

// remainingAttempts.innerHTML = `Remaining attempts : ${totaalAttempts-attempts}`
// }
// gussingNumber.value = "";
// })

// function checkResult(gussingNumber) {
// // console.log(gussingNumber);
// const randomNumber = getRendomNumber(5);
// // console.log(randomNumber);

// if (gussingNumber == randomNumber) {

// totalWons++;
// resultText.innerHTML = `your have won`;


// } else {
// totalLosts++;
// resultText.innerHTML = `your have lost; random number was: ${randomNumber}`

// }

// lostWonMessage.innerHTML = `won:${totalWons} : loss:${totalLosts}`
// lostWonMessage.classList.add("large-text");
// cardBody.appendChild(lostWonMessage)


// }



// function getRendomNumber(limit) {
// return Math.floor(Math.random() * limit) + 1;
// }