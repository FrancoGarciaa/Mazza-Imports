import { useState, useEffect } from "react"
// import { getProducts } from "../data/data.js"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../db/db.js"

const useProducts = () => {

    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)
    const  {idCategory} = useParams()


    const getProducts = async () => {
        setLoading(true)
        try {
            const productsRef = collection(db, "products")
            const productsSnapshot = await getDocs(productsRef)
            const productsList = productsSnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setProducts(productsList)
        } catch (error) {
            console.error("error", error)
        } finally {
            setLoading(false)
        }
    };

    const getProductsByCategory = async () => {
        setLoading(true)
        try {
            const productsRef = collection(db, "products");
            const categoryQuery = query(productsRef, where("category", "==", idCategory))
            const categorySnapshot = await getDocs(categoryQuery)
            const productsList = categorySnapshot.docs.map((doc) => ({
                id: doc.id, 
                ...doc.data()
            }));
            setProducts(productsList)
        } catch (error) {
            console.error("error", error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(()=>{
        if (idCategory) {
            getProductsByCategory()
        }else{
            getProducts()
        }
    }, [idCategory])

    return{ products, loading, idCategory}

}
export default useProducts
