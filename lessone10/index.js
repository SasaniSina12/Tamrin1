// closer

function other() {
    const JsName = "NodeJS";
    function displayName() {
        console.log(JsName);
    }
    return displayName;
}

const displayName = other();
displayName();

function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}

const adder5 = makeAdder(5);
const adder10 = makeAdder(10);
console.log(adder5(4));
console.log(adder10(10));

document.body.innerText = "Hello Body";
function makeSize(size) {
    return function () {
        document.body.style.fontSize = `${size}px`
    }
}

const size10 = makeSize(10)
const size20 = makeSize(20)
const size30 = makeSize(30)
const size100 = makeSize(100)

// console.log(size10())
console.log(size20())

function makeCounter() {
    let privateCounter = 0;
    function changeBy(value) {
        return (privateCounter += value)
    }
    return {
        increment() {
            changeBy(1)
        },
        decrement() {
            changeBy(-1)
        },
        value() {
            return privateCounter;
        }
    }
}

const counter = makeCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.value())
counter.decrement();
counter.decrement();
counter.decrement();
counter.decrement();
counter.decrement();
console.log(counter.value())