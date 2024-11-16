import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import db from '../../db/db.js'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail.jsx'
import Loading from '../Loading/Loading.jsx'
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})
    const [loading, setLoading] = useState (true)
    const { idProduct } = useParams()


    const getProductById = async () => {
        setLoading(true); 
        try {
            const docRef = doc(db, "products", idProduct)
            const dataDb = await getDoc(docRef)
            if (dataDb.exists()) {
                const productDb = { id: dataDb.id, ...dataDb.data() }
                setProduct(productDb)
            } else {
                console.error("The product with that id was not found")
            }
        } catch (error) {
            console.error("Error when obtaining the product:", error)
        } finally {
            setLoading(false)
        }
    };

    useEffect ( ()=> {
        getProductById()
    }, [idProduct])

return (
    <>
    {
        loading === true ? <Loading /> : <ItemDetail product={product} />
    }
    </>
)
}

export default ItemDetailContainer