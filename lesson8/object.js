let object = {
    string: "Hello String",
    num: 2,
    arr: [1, 2, 3, 4],
    bool1: true,
    bool2: false,
    func: () => {
        return "Hello function Object"
    }
}

console.log(object);
console.log("--------------");
console.log(object.string);
console.log("--------------");
console.log(object.num);
console.log("--------------");
console.log(object.arr);
console.log("--------------");
console.log(object.bool1);
console.log("--------------");
console.log(object.bool2);
console.log("--------------");
console.log(object.func());
console.log("--------------");

let user = {
    firstName: "Amirmohammad",
    lastName: "Shafiee",
    age: 15,
    ID: 1234567890,
    Address: {
        provienc: "Azarbayjan Shrgi",
        city: "Tabriz",
        twon: "OutKandi",
        street: "Barbari",
        allay: "Machid",
        zipCode: 3216549870
    }
};

console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);
console.log(user.ID);
console.log(user.Address.provienc);
console.log(user.Address.city);
console.log(user.Address.twon);
console.log(user.Address.street);
console.log(user.Address.allay);
console.log(user.Address.zipCode);
