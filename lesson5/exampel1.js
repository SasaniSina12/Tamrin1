let input = 12;
let temp = 0;
for (let counter = 0; counter <= input; counter++) {
    if (input % counter == 0) {
        temp++;
    }
}
if (temp == 2) {
    console.log("Adade aval:", input);
} else {
    console.log("adade aval nist dash", input);
}