import { getUserFromDB } from "./users.js";
import getProductsFromDB from "./products.js"; 
import getUserBasket from "./user-basket.js";

async function main() {
    try {
        // const users = await getUserFromDB();
        // const products = await getProductsFromDB();
        // console.log(users)
        // console.log(products)

        getUserBasket().then(result => {
            console.log(result);
            
        }).catch(error => {
            console.log(error)
        })
    } catch (error) {
        console.log(error)
    }
}

main()