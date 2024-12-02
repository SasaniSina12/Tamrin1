const users = [
    {
        id: 1,
        name: "Sina Sasani",
        job: "developer",
        skill: "NodeJS",
    },
    {
        id: 2,
        name: "AmirMohammad Shafiee",
        job: "developer",
        skill: "NodeJS",
    },
    {
        id: 3,
        name: "Mahdi DavazdahRokh",
        job: "developer",
        skill: "NodeJS",
    },
    {
        id: 4,
        name: "Hamid Dadashi",
        job: "developer",
        skill: "NodeJS",
    }
];

export function getUserFromDB() {
    return new Promise((resolve, reject) => {
        if (users.length > 0) {
            resolve(users)
        } else {
            reject(new Error("کاربری یافت نشد"))
        }
    })
}