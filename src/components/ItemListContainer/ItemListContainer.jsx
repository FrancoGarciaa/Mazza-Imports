import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import ItemList from "./ItemList.jsx"


const ItemListContainer = () => {
const [products, setProducts] = useState([])


const getProducts = () => {
    return fetch("http://localhost:5173/api/productos")
    .then( (respuesta)=> respuesta.json() )
    .then( (data) => console.log(data))
}

    // useEffect (()=> {

    // getProducts()
    // .then( (data)=> {
    //     setProducts(data)
    // })
    // .finally(()=>{
    //     console.log("finalizo la promesa")
    // })

    // }, [])

getProducts()

    return (
        <>
        <div>
        <h2>PRODUCTOS</h2>
        <ItemList products={products} />
        </div>
        </>
    )  
}

export default ItemListContainer
