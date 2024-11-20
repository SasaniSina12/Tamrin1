console.table("first log table");

setTimeout(() => {
    console.table("thirde log table");
}, 5000)

console.table("secound log table");


function forthLog () {
    console.table("forth log table");
}

setInterval(forthLog, 6000)