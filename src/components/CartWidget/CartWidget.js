import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cart from './assets/shopping-cart.png'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
      console.log('TQ', totalQuantity)
    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
         <img src={cart} alt="cart-icon"/>
         { totalQuantity }
        </Link>
    )
}

export default CartWidget