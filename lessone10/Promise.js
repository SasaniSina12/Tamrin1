let state = "admin";
const getUserList = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (state == "admin") {
            resolve([
                {
                    id: 1,
                    name: "Sina"
                },
                {
                    id: 2,
                    name: "AmirMohammad NejadKarami"
                },
            ])
        } else {
            reject("نتایج فقط به ادمین ها خروجی داده میشود")
        }
    }, 500)
})

getUserList.then((data) => {
    console.table(data)
}).catch((error) => {
    console.table(error)
})