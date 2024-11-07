import { useState, useEffect } from 'react'
import { getProducts } from '../../data/data.js'
import ItemDetail from './ItemDetail.jsx'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})


    useEffect ( ()=> {
        getProducts()
        .then( (data)=> {
            const findProduct = data.find( (product)=> product.id === "prenda1")
            setProduct(findProduct)
        })
    }, [])

return (
    <ItemDetail product={product} />
)
}

export default ItemDetailContainer