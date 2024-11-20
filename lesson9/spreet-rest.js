// spreat - rest

function getArgs(a, b, c) {
    console.log('a: ', a);
    console.log('b: ', b);
    console.log('c: ', c);
}

const arr = [1, 2, 3];
getArgs(...arr);

const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];
const mixNumber = [...num1, ...num2];
// console.table(mixNumber)
console.log(mixNumber);


const mixNumber1 = [...num2, ...num1];
console.log(mixNumber1);

const mxn = [...num2.reverse(), ...num1.reverse()]
console.log(mxn);


function adderFunction(...number) {
    console.log(number.reduce((prev, curr) => prev + curr, 0));
}

adderFunction(...[1,2,3,4,5,6,7,8,9,10])