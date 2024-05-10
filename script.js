let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector("#newBtn");
let randomNum = Math.floor(Math.random() * 10);
let textSpeech = document.querySelector(".test-speech");
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
let testHeading = randomSentences[randomNum];
let textArea = document.querySelector(".text-field");
let correctChr = 0;
let totalchr = testHeading[0].length;
let flag = true;
let initialMins = 0, initialSec = 0, finalMins = 0, finalSec = 0;
let resultSpeed = document.querySelector(".result-speed");
let speed = 0;
let j = 0;
textSpeech.innerText = randomSentences[randomNum];
let result1 = document.querySelector("#result1");
let result2 = document.querySelector("#result2");

// if(textArea.innerText!=""){
textArea.addEventListener("input", () => {
    // console.log("hii");
    let stringTest = textArea.value;
    if (flag) {
        flag = false;
        let currTime = new Date();
        initialMins = currTime.getMinutes();
        initialSec = currTime.getSeconds();
        // console.log(currTime);
        // console.log(initialMins);
        // console.log(initialSec);

    }
    // console.log("hiiii");
    // console.log(stringTest);
    for (let i = j; i < stringTest.length; i++) {
        if (stringTest[i] == testHeading[0][i]) {
            // console.log("hii");
            // let charSpan = document.createElement("span");
            // charSpan.style.color="green";
            // charSpan.textContent=stringTest[i];
            // let string=stringTest;
            // let updatedString=stringTest.substring(0,i)+charSpan.outerHTML+stringTest.substring(i+1);
            // textArea.innerHTML=updatedString;
            // string=
            j++;
            correctChr++;
            console.log(`i is : ${i}`);
            console.log(`correctchr is : ${correctChr}`);
            console.log(`totalchr is : ${totalchr}`);

        } else {
        }
        if ((i + 1) == totalchr) {
            console.log("hiiiiii");
            textArea.disabled=true;
            let d = new Date();
            finalMins = d.getMinutes();
            finalSec = d.getSeconds();
            let timeTaken = (finalMins - initialMins) * 60 + (finalSec - initialSec);
            speed = Math.abs(Math.floor(timeTaken * (correctChr / totalchr)));
            console.log(speed);
            textArea.style.height = "17%";
            let accuracy = (correctChr / totalchr) * 100;
            console.log(accuracy);
            if (speed) {
                result1.innerText = `Your typing speed is ${speed} characters per minute.`;
            }
            result2.innerText = `Your typing accuracy is ${accuracy}%.`;
            resultSpeed.style.display = "flex";
        }
    }
})
// }
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


