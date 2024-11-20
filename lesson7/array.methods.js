let users = [
    [
        ["ID", "Name", "UserName", "Age", "Email"],
        [1, "Sina", "Sina.Sasani.s", 20, "brsina504@gmail.com"],
        [2, "AmirMohammad", "Amir.m.sh", 14.5, "AmirMohammad@gmail.com"],
        [3, "Abolfazl", "Aboli.javan", 18, "Abalfazl@gmail.com"],
        [4, "Mss.Bayat", "bayat.n.12", 18, "Nb@gmail.com"],
        [5, "Mahdi", "Mahdi.12r.12rokh", 16, "Davazdah@gmail.com"],
    ]
];

const userName = ["Sina", "abolfazl", "Mamad", "Meyti"];
const userAges = [20, 18, 16, 40];

console.log(users.length, userAges.length, userName.length);


console.log(userName.at(-1));

// userAges.push(14)
// userAges.push(50)
console.log(userAges);

console.log("-------------------");
// userAges.pop();
console.log(userAges);

userName.shift()
console.log(userName);

userName.unshift("Sasani")
console.log(userName);


console.log("-------------------");


userAges[2] = 27;
userAges[1] = 50;
console.log(userAges)