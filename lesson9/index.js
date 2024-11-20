let user = {
    firstName: "Sina",
    lastName: "Sasani",
    age: 20,
    Id: 12345678989,
    address: {
        province: "Tehran",
        city: "NasimShahr",
        town: "AkbarAbad",
        street: "Dovvom",
        allay: "Felan",
        zipCode: 1237198273
    }
}

user.role = "admin";
console.log(user);

user.security = {
    userName: "admin329482",
    password: "3902184",
    email: "admin@gmail.com"
}
console.log(user.security)

user["brithDay"] = "1384/04/13";
user["placeOfBoarn"] = "اکبرآباد";

console.table(user.role, user['brithDay']);