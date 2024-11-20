// &&, ||

console.log(true && 5 && "anyThing" && false)
console.log(true && 0 && "anyThing" && [])
console.log(false && 5 && "anyThing" && [])
console.log(false || 5 || "anyThing" || [])

let userName = "Sina";
let password = "1234";

if (userName == "Sina" && password == "1234") {
    console.log("Hi admin");
    
} else {
    console.log("Your arent admin");
    
}
if (userName == "asdad" || password == "1234") {
    console.log("Hi admin");
    
} else {
    console.log("Your arent admin");
    
}