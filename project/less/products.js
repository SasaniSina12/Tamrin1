const products = [
    {
        id: 1,
        title: "Book1",
        price: 200,
    },
    {
        id: 2,
        title: "Shoes",
        price: 300,
    },
    {
        id: 3,
        title: "Coat",
        price: 250,
    },
    {
        id: 4,
        title: "Laptop",
        price: 1500,
    },
];

function getProductsFromDB() {
    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            resolve(products)
        } else {
            reject(new Error("محصولی یافت نشد"))
        }
    })
}

export default getProductsFromDB;