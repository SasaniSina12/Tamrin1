// declresion function

function seyHello() {
    console.log("Hello Function")
}
seyHello();
let user = "Sina"
function getName(userName, message) {
    console.log(userName, message)
}
getName(`Your name is ${user}, so`, "Hi Sina");
let input = 206;
function primeNumber(userInput) {
    let temp = 0;
    if (typeof userInput == "number") {

        for (let counter = 0; counter <= input; counter++) {
            if (userInput % counter == 0) {
                temp++;
            }
        }
    }
    if (temp == 2) {
        console.log("adade aval: ", userInput);
    } else {
        console.log("adade aval nist:", userInput);
    }
}
primeNumber(input);

function sum(num1, num2) {
    if (typeof num1 == "number" && typeof num2 == "number") {
        return num1 + num2;
    }
}

let result = sum(2, 2)
console.log(result);

function min(num1, num2) {
    return num1 < num2 ? num1 : num2
}
let res = min(15, 6);
console.log(res);


// expresion function
let showOk1 = function () {
    alert("Its ok davazdah")
}

// console.log(showOk1())

let showOk = function () {
    alert("You are my brother :)");
}
let showCancel = function () { 
    alert("No brother")
}

let Ask = function(question, yes, no) {
    confirm(question) ? yes() : no()
}

Ask("Do you my brother?", showOk, showCancel)