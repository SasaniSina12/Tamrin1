const skills = ["js", "NodeJS", "Mongodb", "html", "react"];
const number = [1, 2, 3, 4, 55, 6, 7, 34, 56, 34, 22];

function mul2(item) {
    return item * 2
}
const result = number.map(mul2)
// console.log(result);


const newNumber = number.map((item) => item * 2)
console.log(newNumber);


const newSkills = skills.map(item => item + " - js");
console.log(newSkills);
