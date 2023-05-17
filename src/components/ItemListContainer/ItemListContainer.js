import "../../styles/styles.css";
import { getProductByCategory, getProducts } from "../../asyncMonk";
import { useEffect, useState } from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const[products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect (() => {
      const asyncFunc = categoryId ? getProductByCategory : getProducts

      asyncFunc(categoryId).then(response => {
        setProducts(response)
        
      }).catch(error => {
        console.error(error)
      })
    }, [categoryId])

    return (
      <>
        <h1 className="title-greeting"> {greeting}</h1>
        <ItemList products={products}/>
      </>
  )
}


/*
    useEffect(() => {
      getProducts().then(response =>{
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
    }, [])*/
   

export default ItemListContainer