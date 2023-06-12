import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        console.log('quantityIncr', quantity)
        if(quantity < stock ){
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div className='counter'>
            <div className='controls'>
                <button className='boton' onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className='boton' onClick={increment}>+</button>
            </div>
            <div>
                <button className='btnAdd' onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>

        </div>
    )
}

export default ItemCount