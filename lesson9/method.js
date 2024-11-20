let user = {
    id: 1234567890,
    firstName: "Sina",
    lastName: "Sasani",
    age: 26,
    obj: {
        key: "value",
    },
};

document.write(JSON.stringify(user, null, 4));

const obj = JSON.parse(JSON.stringify(user));
console.table(obj)