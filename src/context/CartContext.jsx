import { createContext, useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addProductInCart = (newProduct) => {
        

        const condition = isIncart (newProduct.id)
        if(condition){
            const tempCart = [...cart]
            const findIndex = tempCart.findIndex ( (productCart) => productCart.id === newProduct.id)
            const availableStock = tempCart[findIndex].stock
            const newQuantity = tempCart[findIndex].quantity + newProduct.quantity
            if (newQuantity <= availableStock) {
                tempCart[findIndex].quantity = newQuantity;
                setCart(tempCart)
                toast.success("Producto agregado")
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Me quede sin stock",
                    footer: "Puedes ver otros productos"
                })
            }
        } else {
            setCart([...cart, newProduct])
        }
    }

    const isIncart = (idProduct) => {
        return cart.some( (productCart) => productCart.id === idProduct )
    }

    const totalQuantity = () => {
        const quantity = cart.reduce( (total, productCart) => total + productCart.quantity, 0)
        return quantity
    }

    const totalPrice = () => {
        const price = cart.reduce( (total, productCart) => total + ( productCart.quantity * productCart.price), 0 ) 
        return price
    }

    const deleteProductById = (idProduct) => {
        const filterProducts = cart.filter((productCart) => productCart.id !== idProduct);
        setCart(filterProducts)
        toast.error("Producto eliminado")
    }


    const deleteCart = async () => {
        try {
            const result = await Swal.fire({
                title: "¿Estás seguro?",
                text: "Tu carrito sera vaciado",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, Vaciar!",
                cancelButtonText: "Cancelar"
            })
    
            if (result.isConfirmed) {
                setCart([])

                await Swal.fire({
                    title: "¡Borrado!",
                    text: "El carrito ha sido vaciado.",
                    icon: "success"
                })
            }
        } catch (error) {
            console.error("Error al intentar viciar el carrito:", error)
        }
    }

    return(
        <CartContext.Provider value={ { cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart } } >
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider, CartContext }