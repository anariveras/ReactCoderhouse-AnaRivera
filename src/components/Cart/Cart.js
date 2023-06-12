import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from 'react-router-dom'
//import CartItem from '../CartItem/CartItem'



const Cart = () => {
    const { cart, clearCart, total, totalQuantity} = useContext(CartContext)

    if(totalQuantity === 0){
        console.log('Cart:', totalQuantity)
        return(
            <div>
                <h1>No hay artículos en el carrito</h1>
                <Link to='/' className="option">Productos</Link>
            </div>
        )
    }

    return(
        <>
            {cart.map((p) => <div key={p.id} {...p}/>) }
            <h3 className="total">Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar Carrito</button>
            <Link to='/checkout' className="option">Checkout</Link>
        </>
    )
}

export default Cart