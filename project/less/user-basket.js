import { getUserFromDB } from "./users.js";
import getProductsFromDB from "./products.js";

const userBasket = [
    {
        id: 1,
        productID: 1,
        userID: 2,
        count: 3
    },
    {
        id: 2,
        productID: 3,
        userID: 3,
        count: 5
    },
    {
        id: 3,
        productID: 4,
        userID: 1,
        count: 6
    }
];

function getUserBasket() {
    return new Promise((resolve, reject) => {
        let newUserBasket = null;
        getProductsFromDB().then((products) => {
            for (const product of products) {
                newUserBasket = userBasket.map((item) => {
                    if (item.productID == product.id) {
                        Object.assign(item, { product });
                        item.totalPrice = product.price * item.count;
                        getUserFromDB().then((users) => {
                            item.user = users.find((user) => user.id == item.userID)
                        })
                    }
                    return item
                })
            }
            resolve(newUserBasket)
        })
    })
}

export default getUserBasket