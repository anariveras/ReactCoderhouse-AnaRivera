import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {getProductsById } from '../../asyncMonk'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemId } = useParams()


    useEffect(() => {
        getProductsById(itemId).then(response => {
            setProduct(response)
        }).catch(error => {
            console.error(error)
        })
    }, [itemId])

    return (
        <div className='itemDetailContainer'>
            
            <ItemDetail {...product} />
        </div>
    )

   

}

export default ItemDetailContainer