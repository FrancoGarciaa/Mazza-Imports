import db from "../db/db.js"
import { addDoc, collection} from "firebase/firestore"

const products = [
    {
        id: "electronico1",
        name: "iPhone 15 Pro Max",
        description: "Memoria RAM de ocho gigabytes. Diseño resistente y ligero. Pantalla Super Retina XDR con ProMotion y frecuencia de actualización de hasta ciento veinte hercios. Dynamic Island muestra alertas y actividades en vivo al instante. Sistema de cámaras profesional de súper alta resolución. Botón de acción personalizable para acceder a tu funcionalidad favorita. Con conector USB tipo C y WiFi seis, que ofrece el doble de velocidad. Funcionalidad de seguridad esencial con detección de choques para solicitar ayuda. Tecnologías de privacidad que te ayudan a mantener el control de tus datos.",
        stock: 7,
        price: 1500,
        image: ["/img/iphone15.png", "/img/iphone15-1.jpg", "/img/iphone15-2.jpg", "/img/iphone15-3.jpg", "/img/iphone15-4.jpg"],
        category: "electronicos",
    },
    {
        id: "electronico2",
        name: "iPhone 14 Pro Max",
        description: "Memoria RAM de seis gigabytes. Pantalla Super Retina XDR de seis punto siete pulgadas, siempre activa con tecnología ProMotion. Dynamic Island, una nueva y mágica forma de interactuar con tu iPhone. Cámara gran angular de cuarenta y ocho megapíxeles para una resolución hasta cuatro veces mayor. Modo Cine ahora en cuatro K Dolby Vision de hasta treinta cuadros por segundo. Modo Acción para lograr videos estables, incluso con la cámara en mano. Detección de Choques, una funcionalidad de seguridad que solicita ayuda automáticamente cuando tú no puedes. Batería que dura todo el día y permite hasta veintinueve horas de reproducción de video. Chip A16 Bionic, el procesador de smartphone en su máxima expresión. Red cinco G ultrarrápida. Ceramic Shield y resistencia al agua, características de durabilidad líderes en la industria. iOS dieciséis ofrece aún más opciones de personalización y más formas de comunicarse y compartir.",
        stock: 15,
        price: 1200,
        image: ["/img/iphone14.png", "/img/iphone14-1.jpg", "/img/iphone14-2.jpg", "/img/iphone14-3.jpg", "/img/iphone14-4.jpg"],
        category: "electronicos",
    },
    {
        id: "electronico3",
        name: "Apple MacBook Pro",
        description: "El MacBook Pro 13 M2 combina rendimiento y portabilidad en un diseño elegante. Con un procesador Apple M2 de 8 núcleos y una GPU de 10 núcleos, su potencia es ideal para tareas creativas y productivas. La pantalla de 13,3 pulgadas ofrece una experiencia visual inmersiva, perfecta para editar, diseñar y programar. Equipado con 8 GB de RAM, 512 GB SSD y batería de 58,2 mAh, garantiza velocidad, larga duración y un peso ligero de sólo 1,4 kg. Con macOS Monterey su funcionamiento es óptimo y su diseño Space Grey le da un tacto cómodo, ideal para profesionales y gamers.",
        stock: 5,
        price: 1700,
        image: ["/img/macbook.jpg", "/img/macbook-1.jpg", "/img/macbook-2.jpg", "/img/macbook-3.jpg", "/img/macbook-4.jpg"],
        category: "electronicos",
    },
    {
        id: "prenda1",
        name: "Remera Jordan",
        description: "La camiseta Jordan Jumpman es un ícono cotidiano, diseñada para brindar comodidad con una tela suave y liviana, un ajuste relajado y fácil de usar. Confeccionada con tejido de uso diario, proporciona una sensación agradable y confortable; Su ajuste es el estándar Jordan, con cuello acanalado y patrón estampado. Compuesto por 50-100% algodón y 0-50% poliéster (los porcentajes pueden variar, consulta la etiqueta), es fácil de lavar a máquina y es de importación. Color: negro, origen: Argentina.",
        stock: 4,
        price: 110,
        image: ["/img/remerajordan.jpg", "/img/remerajordan-1.png", "/img/remerajordan-2.png", "/img/remerajordan-3.png", "/img/remerajordan-4.png", ],
        category: "vestimentas",
    },
    {
        id: "prenda2",
        name: "Short Jordan",
        description: "La malla con orificios abiertos es suave y transpirable, con un forro de malla tejido apretado para mayor comodidad en contacto con la piel. Con un corte holgado para mayor amplitud, cuenta con cintura elástica con cordón, cinta en el dobladillo y el panel lateral, así como bolsillos para las manos. Está confeccionado en 100% poliéster, es lavable a máquina y es importado. Color: Rojo gimnasio/Negro.",
        stock: 2,
        price: 90,
        image: ["/img/shortjordan.jpeg", "/img/shortjordan-1.jpeg", "/img/shortjordan-2.jpeg", "/img/shortjordan-3.jpeg", "/img/shortjordan-4.jpeg", ],
        category: "vestimentas",
    },
    {
        id: "prenda3",
        name: "Nike Air Force 1 LE",
        description: "El cuero real y sintético brinda estilo, durabilidad y soporte tradicionales, como el Air Force 1 original de 1982. La amortiguación Nike Air oculta en el talón, diseñada originalmente para baloncesto, garantiza una comodidad duradera, mientras que un cuello acolchado de corte bajo proporciona un aspecto elegante y una sensación excepcional. Color: blanco.",
        stock: 2,
        price: 180,
        image: ["/img/airforce.jpg", "/img/airforce-1.jpg", "/img/airforce-2.jpg", "/img/airforce-3.jpg", "/img/airforce-4.jpg", ],
        category: "vestimentas",
    },
    {
        id: "prenda4",
        name: "Pantalón Jordan Aj6",
        description: "Pantalón deportivo Jordan para hombre, confeccionado en poliéster con tiro medio y diseñado para adultos. Material principal: poliéster, sin materiales reciclados.",
        stock: 4,
        price: 130,
        image: ["/img/pantalonjordan.jpeg", "/img/pantalonjordan-1.jpeg", ],
        category: "vestimentas",
    },
    {
        id: "perfume1",
        name: "Invictus",
        description: "Perfume de aroma amaderado y ámbar, con notas de salida aromáticas, corazón amaderado y base de haba tonka. Producto libre de crueldad animal y de origen francés.",
        stock: 8,
        price: 115,
        image: ["/img/invictus.jpg", "/img/invictus-1.jpg", "/img/invictus-2.jpg", "/img/invictus-3.jpg", "/img/invictus-4.jpg", ],
        category: "perfumes",
    }, 
    {
        id: "perfume2",
        name: "One Million",
        description: "Eau de toilette amaderada y cálida para hombre de la marca Paco Rabanne, en presentación de 100 mL, no vegana e importada.",
        stock: 5,
        price: 120,
        image: ["/img/onemillion.png", "/img/onemillion-1.jpg", "/img/onemillion-2.jpg", "/img/onemillion-3.jpg", "/img/onemillion-4.jpg", ],
        category: "perfumes",
    },
    {
        id: "perfume3",
        name: "Versace Eros FLAME",
        description: "Perfume amaderado de origen italiano, con notas de salida de limón, corazón de pimienta y notas de fondo de cedro de Texas. Es vegano, libre de crueldad animal y no recargable.",
        stock: 2,
        price: 190,
        image: ["/img/versaceeros.png", "/img/versaceeros-1.jpg", "/img/versaceeros-2.jpg", "/img/versaceeros-3.jpeg", "/img/versaceeros-4.jpeg", ],
        category: "perfumes",
    },
    {
        id: "promocion1",
        name: "Combo Dulce",
        description: "Eau de toilette amaderada y cálida para hombre de la marca Paco Rabanne, en presentación de 100 mL, no vegana e importada. /// La camiseta Jordan Jumpman es un ícono cotidiano, diseñada para brindar comodidad con una tela suave y liviana, un ajuste relajado y fácil de usar. Confeccionada con tejido de uso diario, proporciona una sensación agradable y confortable; Su ajuste es el estándar Jordan, con cuello acanalado y patrón estampado. Compuesto por 50-100% algodón y 0-50% poliéster (los porcentajes pueden variar, consulta la etiqueta), es fácil de lavar a máquina y es de importación. Color: negro, origen: Argentina. ",
        stock: 3,
        price: 200,
        image: ["/img/promocion1.png", "/img/remerajordan.jpg", "/img/onemillion.png", ],
        category: "promociones",
    },
    {
        id: "promocion2",
        name: "Conjunto Jordan",
        description: "La camiseta Jordan Jumpman es un ícono cotidiano, diseñada para brindar comodidad con una tela suave y liviana, un ajuste relajado y fácil de usar. Confeccionada con tejido de uso diario, proporciona una sensación agradable y confortable; Su ajuste es el estándar Jordan, con cuello acanalado y patrón estampado. Compuesto por 50-100% algodón y 0-50% poliéster (los porcentajes pueden variar, consulta la etiqueta), es fácil de lavar a máquina y es de importación. Color: negro, origen: Argentina. /// La malla con orificios abiertos es suave y transpirable, con un forro de malla tejido apretado para mayor comodidad en contacto con la piel. Con un corte holgado para mayor amplitud, cuenta con cintura elástica con cordón, cinta en el dobladillo y el panel lateral, así como bolsillos para las manos. Está confeccionado en 100% poliéster, es lavable a máquina y es importado. Color: Rojo gimnasio/Negro.",
        stock: 4,
        price: 170,
        image: ["/img/promocion2.png", "/img/remerajordan.jpg", "/img/shortjordan.jpeg", ],
        category: "promociones",
    }
]

const seedProducts = () => {
    const productsRef = collection(db, "products")
    products.map (( { id, ...dataProduct } )=> {
        addDoc(productsRef, dataProduct)
    })
    console.log("productos subidos")
    return
}

seedProducts()