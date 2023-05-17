import imgSerum from '../src/img/serum.jpeg'
import imgRevitalif from '../src/img/revitalift.jpeg'
import imgLipstick from '../src/img/lipstick.jpeg'
import imgAvyna from '../src/img/avyna.jpeg'

const products = [
    {
        id: '1',
        name: 'Serum Anti imperfecciones',
        price: 380,
        category: 'Skincare',
        categoryId: '123',
        img: `${imgSerum}`,
        stock: 10,
        description: 'Para piel con tendencia al acné, tratamiento concentrado (Ácido Salicílico + Vitamina C + AHA) con Niacinamida para tratar imperfecciones y manchas por imperfecciones. -44% imperfecciones y -41% visibilidad de manchas.'
    },
    {
        id: '2',
        name: 'Serum de Ojos Anti Líneas de Expresión',
        price: 300,
        category: 'Skincare',
        categoryId: '123',
        img:  `${imgRevitalif}`,
        stock: 2,
        description: '1.5% Con ácido hialurónico micro y macro + 1% cafeína. Elimina líneas de expresión alrededor de los ojos gracias al ácido hialurónico y elimina bolsas y ojeras por la cafeína.'
    },
    {
        id: '3',
        name: 'Lipstick / KAKAO FRIENDS X M·A·C',
        price: 350,
        category: 'Makeup',
        categoryId: '234',
        img:  `${imgLipstick}`,
        stock: 2,
        description: 'Lipsticks con tonos edicion limitada,cada uno en un empaque coleccionable que presenta a los Kakao Friends.'
    },
    {
        id: '4',
        name: 'Tratamiento Avyna para cabello de colorado',
        price: 899,
        category: 'CuidadoCapilar',
        categoryId: '345',
        img:  `${imgAvyna}`,
        stock: 20,
        description: 'Crema de cuidado capilar.'
    }
]

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve (products)
        }, 500)
    }) 
}

export const getProductsById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.id === productId))
        }, 500)
    })
}


export const getProductByCategory = (productCategory) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.category === productCategory));
      }, 500);
    });
  };