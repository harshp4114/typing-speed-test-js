let randomSentences = [
    ["After a week of rain, the sun finally emerged from behind the clouds, casting a warm glow over the city and lifting everyone's spirits."],
    ["She decided to redecorate her bedroom, painting the walls a soft shade of blue and adding cozy blankets and fluffy pillows to create a relaxing atmosphere."],
    ["They planned a trip to the countryside, packing a picnic basket full of sandwiches, fruits, and snacks, and setting off early in the morning to explore the scenic countryside."],
    ["He enrolled in a cooking class to learn how to prepare gourmet meals, spending hours in the kitchen experimenting with new recipes and techniques."],
    ["She adopted a rescue dog from the shelter, giving him a loving home and plenty of cuddles, and watching as he blossomed into a happy and playful companion."],
    ["They celebrated their anniversary with a romantic dinner at a fancy restaurant, enjoying candlelit ambiance and delicious cuisine while reminiscing about the years they've spent together."],
    ["He decided to pursue his passion for photography, investing in a high-quality camera and spending hours wandering the streets, capturing moments of beauty and spontaneity."],
    ["She volunteered at a local soup kitchen, serving meals to the homeless and disadvantaged, and experiencing the joy of making a difference in someone else's life."],
    ["After years of hard work and dedication, he finally achieved his dream of starting his own business, feeling proud and grateful for the opportunity to pursue his passions."],
    ["They rented a cabin in the mountains for a weekend getaway, hiking through lush forests, roasting marshmallows over a campfire, and stargazing under the clear night sky."]
];


let resetBtn = document.querySelector("#resetBtn");     // selecting reset button
let newBtn = document.querySelector("#newBtn");     // selecting new text button 
let testSpeech = document.querySelector(".test-speech");    // selecting test speech 
let textArea = document.querySelector(".text-field");       // selecting text field area
let resultSpeed = document.querySelector(".result-speed");      // selecting div for result
let result1 = document.querySelector("#result1");       // selecting p for speed
let result2 = document.querySelector("#result2");       // selecting p for accuracy
let timer = document.querySelector(".countdown");     // selecting timer paragraph tag
let randomNum = Math.floor(Math.random() * 10);     //generating random number
testSpeech.innerText = randomSentences[randomNum];      // setting test sentence 
let testHeading = randomSentences[randomNum][0];
const STARTING_SEC = 29;
let time = STARTING_SEC;
let intervalID = 0;
let correctWords = 0;
let totalWords = testHeading.split(" ").length;


//function to find total characters in the user input excluding white spaces
function findTotalChr() {
    let splitString = textArea.value.trim().split(" ");
    let count = 0;
    for (let i = 0; i < splitString.length; i++) {
        count = count + splitString[i].length;
    }
    return count;
}


//function to calculate result and accuracy
function checkResult() {
    let userString = ((textArea.value).trim()).split(" ");
    let masterString = testHeading.split(" ");
    let totalChr = findTotalChr();
    let correctChr = 0;
    
    //calculating correct characters from the user input for accuracy
    for (let i = 0; i < Math.min(userString.length, masterString.length); i++) {
        for (let j = 0; j < Math.min(userString[i].length, masterString[i].length); j++) {
            if (userString[i][j] == masterString[i][j]) {
                correctChr++;
            }

        }
    }

    //calculating correct words from the user input for speed
    for (let i = 0; i < Math.min(userString.length, masterString.length); i++) {
        if (userString[i] === masterString[i]) {
            correctWords++;
        } else {

        }
    }
    newBtn.style.display = "inline-block";
    let accuracy = Math.floor((correctChr / totalChr) * 100);
    textArea.style.height = "17%";
    timer.style.marginTop = "1rem";
    timer.style.marginBottom = "0rem";
    textArea.style.marginTop = "24px";
    textArea.style.marginBottom = "24px";
    result1.innerText = `Your typing speed is ${correctWords * 2} words per minute`;
    result2.innerText = `Your typing accuracy is ${accuracy}%`;
    resultSpeed.style.display = "inline-block"
}


//countdown interval function
function countDown() {
    if (time < 0) {
        textArea.disabled = true;
        timer.innerText = "TIME OUT!!!"
        clearInterval(intervalID);
        checkResult();
    } else {
        let string = `TIMER : ${time} SEC`;
        timer.innerText = string;
        time--;
    }
}


//event listener to remove new text btn once user is giving some input
textArea.addEventListener("input", () => {
    newBtn.style.display = "none";
});


//starting the timer countdown using the event listener only once
function timerStart() {
    intervalID = setInterval(countDown, 1000);
    textArea.removeEventListener("input", timerStart);
}
textArea.addEventListener("input", timerStart);


//timer is reset and textarea is cleared when reset button is clicked
resetBtn.addEventListener("click", () => {
    time = STARTING_SEC;
    textArea.value = "";
    timer.innerText = "TIMER : 30 SEC";
    newBtn.style.display = "inline-block";
    resultSpeed.style.display = "none";
    textArea.style.height = "30%";
    timer.style.marginTop = "1.65rem";
    timer.style.marginBottom = "1.5rem";
    textArea.style.marginTop = "35px";
    textArea.style.marginBottom = "35px";
    textArea.disabled = false;
    clearInterval(intervalID);
    textArea.addEventListener("input", timerStart);
    correctWords = 0;
});


// new text is generated when button is clicked
newBtn.addEventListener("click", () => {
    let num = Math.floor(Math.random() * 10);
    while (num == randomNum) {
        num = Math.floor(Math.random() * 10);
    }
    time = STARTING_SEC;
    testSpeech.innerText = randomSentences[num];
    textArea.disabled = false;
    timer.style.marginTop = "1.65rem";
    timer.style.marginBottom = "1.5rem";
    timer.innerText = "TIMER : 30 SEC";
    textArea.style.marginTop = "35px";
    textArea.style.marginBottom = "35px";
    textArea.style.height = "30%";
    resultSpeed.style.display = "none";
    textArea.value = "";
    testHeading = randomSentences[num][0];
    totalWords = testHeading.split(" ").length;
    correctWords = 0;
    clearInterval(intervalID);
    textArea.addEventListener("input", timerStart);

})


//changing colour of buttons when hover action in performed on them
resetBtn.addEventListener("mouseover", () => {
    resetBtn.style.backgroundColor = "#9D4EDD";
    resetBtn.style.color = "#10002B";
});

resetBtn.addEventListener("mouseout", () => {
    resetBtn.style.backgroundColor = "#10002B";
    resetBtn.style.color = "#E0AAFF";

});

newBtn.addEventListener("mouseover", () => {
    newBtn.style.backgroundColor = "#9D4EDD";
    newBtn.style.color = "#10002B";
});

newBtn.addEventListener("mouseout", () => {
    newBtn.style.backgroundColor = "#10002B";
    newBtn.style.color = "#E0AAFF";

});
