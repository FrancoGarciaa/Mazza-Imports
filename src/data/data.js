const products = [
    {
        id: "electronico1",
        name: "iPhone 15 Pro Max",
        description: "Memoria RAM de ocho gigabytes. Diseño resistente y ligero. Pantalla Super Retina XDR con ProMotion y frecuencia de actualización de hasta ciento veinte hercios. Dynamic Island muestra alertas y actividades en vivo al instante. Sistema de cámaras profesional de súper alta resolución. Botón de acción personalizable para acceder a tu funcionalidad favorita. Con conector USB tipo C y WiFi seis, que ofrece el doble de velocidad. Funcionalidad de seguridad esencial con detección de choques para solicitar ayuda. Tecnologías de privacidad que te ayudan a mantener el control de tus datos.",
        stock: 10,
        price: 1500,
        image: ["/img/iphone15.png", "/img/iphone15-1.jpg", "/img/iphone15-2.jpg", "/img/iphone15-3.jpg", "/img/iphone15-4.jpg"],
        category: "electronicos",
    },
    {
        id: "electronico2",
        name: "iPhone 14 Pro Max",
        description: "Memoria RAM de seis gigabytes. Pantalla Super Retina XDR de seis punto siete pulgadas, siempre activa con tecnología ProMotion. Dynamic Island, una nueva y mágica forma de interactuar con tu iPhone. Cámara gran angular de cuarenta y ocho megapíxeles para una resolución hasta cuatro veces mayor. Modo Cine ahora en cuatro K Dolby Vision de hasta treinta cuadros por segundo. Modo Acción para lograr videos estables, incluso con la cámara en mano. Detección de Choques, una funcionalidad de seguridad que solicita ayuda automáticamente cuando tú no puedes. Batería que dura todo el día y permite hasta veintinueve horas de reproducción de video. Chip A16 Bionic, el procesador de smartphone en su máxima expresión. Red cinco G ultrarrápida. Ceramic Shield y resistencia al agua, características de durabilidad líderes en la industria. iOS dieciséis ofrece aún más opciones de personalización y más formas de comunicarse y compartir.",
        stock: 3,
        price: 1200,
        image: ["/img/iphone14.png", "/img/iphone14-1.jpg", "/img/iphone14-2.jpg", "/img/iphone14-3.jpg", "/img/iphone14-4.jpg"],
        category: "electronicos",
    },
    {
        id: "prenda1",
        name: "Remera Jordan",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur rerum animi dignissimos itaque ratione, sapiente iusto exercitationem nemo dicta earum, blanditiis eligendi voluptatum expedita, minima natus quidem neque accusantium optio.",
        stock: 5,
        price: 300,
        image: ["/img/prenda1.png"],
        category: "vestimentas",
    },
    {
        id: "prenda2",
        name: "Short Jordan",
        description: "",
        stock: 3,
        price: 400,
        image: ["/img/prenda2.png"],
        category: "vestimentas",
    },
    {
        id: "perfume1",
        name: "Invictus",
        description: "",
        stock: 5,
        price: 180,
        image: ["/img/perfume1.png"],
        category: "perfumes",
    },
    {
        id: "perfume2",
        name: "One Million",
        description: "",
        stock: 5,
        price: 180,
        image: ["/img/perfume2.png"],
        category: "perfumes",
    },
    {
        id: "promocion1",
        name: "Combo Dulce",
        description: "",
        stock: 3,
        price: 400,
        image: ["/img/prenda1.png"],
        category: "promociones",
    },
    {
        id: "promocion2",
        name: "Conjunto Jordan",
        description: "",
        stock: 3,
        price: 400,
        image: ["/img/prenda1.png"],
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