import "./ItemListContainer.css"
import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import ItemList from "./ItemList.jsx"


const ItemListContainer = () => {
const [products, setProducts] = useState([])

    useEffect (()=> {

    getProducts()
    .then( (data)=> {
        setProducts(data)
    })
    .finally(()=>{
        console.log("finalizo la promesa")
    })

    }, [])

console.log(products)

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
