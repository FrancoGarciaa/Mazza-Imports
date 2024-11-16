import { useState } from "react"
import FormCheckout from "../Checkout/FormCheckout.jsx"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import validateForm from "../../utils/validateForm.js"
import "./FormCheckout.css"
import { toast } from "react-toastify"


const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })

    const  [idOrder, setIdOrder] = useState(null)
    const { cart, totalPrice, deleteCart } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm ({ ...dataForm, [event.target.name]: event.target.value })
    }

    const validateFields = () => {
        const { fullname, phone, email } = dataForm
        if (!fullname || !phone || !email) {
            return false
        }
        return true
    }

    const handleSubmitForm = async(event) => {
        event.preventDefault()


        if (!validateFields()) {
            toast.error("Por favor, complete todos los campos (Nombre, Teléfono y Correo).")
            return
        }

        const order = {
            buyer: { ...dataForm },
            products: [...cart],
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()
        }


        try{
            const response = await validateForm(dataForm)
            if(response.status === "error") throw new Error(response.message)
                console.log("validacion sin error")
                uploadOrder(order)
        } catch(error){
            console.log(error)
        }
    }

    const uploadOrder = async (newOrder) => {
        try {
            const ordersRef = collection(db, "orders")
            const response = await addDoc(ordersRef, newOrder)
            setIdOrder(response.id)
        } catch (error) {
            console.log(error)
        } finally {
            updateStock()
        }
    };


    const updateStock = () => {
        cart.map (( { id, quantity, ...dataProduct } )=> {
            const productRef = doc(db,"products", id)
            setDoc(productRef, {...dataProduct, stock: dataProduct.stock - quantity } )
        })
        deleteCart()
    }

return (
    <div>
        {
            idOrder === null ? (<FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm} /> ) : 
            ( <div className="check-order">
                <h2>Gracias por su compra 😊</h2>
                <p className="number-order">Su pedido se subio correctamente! Porfavor guarde su nro de seguimiento: <u>{idOrder}</u></p>
                {
                    cart.map((productCart)=> (
                        <>
                        <div className="cart-text-checkout">
                        <img src={productCart.image[0]} className="image-cart" alt="" />
                            <div>
                            <div className="cart-text-check">
                                    <h4>Producto</h4>
                                    <p>{productCart.name} x{productCart.quantity} </p>
                            </div>
                            </div>
                        </div>
                        </>
                    ))
                }
                <Link to="/" className="return-home2">Volver al inicio</Link>
            </div> )
        }
    </div>
)
}

export default Checkout