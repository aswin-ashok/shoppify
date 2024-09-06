import React, { useState, useEffect } from 'react'

const ProductsFetch = () => {

    const [products, setProducts] = useState([])
    const [currentPage, setCurrentpage] = useState(1)

    const getAllProducts = async () => {
        try {
            const limit = 25
            const skip = (currentPage - 1) * limit
            const response = await fetch('https://dummyjson.com/products?skip=${skip}&limit=${limit}')
            const result = await response.json()
            setProducts(result.products)
        }catch (err){
            console.log(err.message);
            
        }
    }

    useEffect(() => {
        getAllProducts()
    }, []);


  return 
    <div>
      {
        products.map(product => {
            return (
                <div key={product.id}>
                    <div>
                        <img src={product.images[0]} alt='{product.title}' />
                    </div>
                </div>
            ) 
        })
      }
    </div>
}

export default ProductsFetch;
