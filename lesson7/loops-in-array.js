let users = [
    ["ID", "Name", "UserName", "Age", "Email"],
    [1, "Sina", "Sina.Sasani.s", 20, "brsina504@gmail.com"],
    [2, "AmirMohammad", "Amir.m.sh", 14.5, "AmirMohammad@gmail.com"],
    [3, "Abolfazl", "Aboli.javan", 18, "Abalfazl@gmail.com"],
    [4, "Mss.Bayat", "bayat.n.12", 18, "Nb@gmail.com"],
    [5, "Mahdi", "Mahdi.12r.12rokh", 16, "Davazdah@gmail.com"],
]

const user2 = ["Sina", "Nazanin", "Ariya", "Hamid"]
console.log(user2);

for (let index = 0; index < user2.length; index++) {
    console.log(user2[index])
}


let array = [1,2,3,4,5,6]
let temp = 0;
for (const num of array) {
    temp += num;
    console.log(num)
}
console.log("---------------");

for (const Name of user2) {
    console.log(Name);
}