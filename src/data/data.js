const products = [
    {
        id: "electronico1",
        name: "iPhone 15 Pro Max",
        description: "",
        stock: 10,
        price: 1500,
        image: "/img/celular1.png",
        category: "electronicos",
    },
    {
        id: "electronico2",
        name: "iPhone 14 Pro Max",
        description: "",
        stock: 3,
        price: 400,
        image: "/img/celular1.png",
        category: "promociones",
    },
    {
        id: "prenda1",
        name: "Remera Jordan",
        description: "",
        stock: 5,
        price: 300,
        image: "/img/prenda1.png",
        category: "vestimenta",
    },
    {
        id: "prenda2",
        name: "Pantalon Jordan",
        description: "",
        stock: 3,
        price: 400,
        image: "/img/prenda1.png",
        category: "promociones",
    },
    {
        id: "perfume1",
        name: "Invictus",
        description: "",
        stock: 5,
        price: 180,
        image: "/img/perfume1.png",
        category: "perfumes",
    },
    {
        id: "perfume2",
        name: "One Million",
        description: "",
        stock: 5,
        price: 180,
        image: "/img/perfume1.png",
        category: "perfumes",
    },
    {
        id: "promocion1",
        name: "Combo Dulce",
        description: "",
        stock: 3,
        price: 400,
        image: "/img/prenda1.png",
        category: "promociones",
    },
    {
        id: "promocion2",
        name: "Conjunto Jordan",
        description: "",
        stock: 3,
        price: 400,
        image: "/img/prenda1.png",
        category: "promociones",
    }
]

const getProducts = () =>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export { getProducts }

/*
const promesa = new Promise ( (resolve, reject)=>{
    if(condicion){
    resolve("se resolvio")
    }else{
    reject("se rechazo")
    }
    }) */