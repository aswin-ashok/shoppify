import React, { useState, useEffect, Fragment } from 'react'
import FlatList from './FlatList'
import Loader from './Loader'

const ProductsFetch = () => {
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pages, setPages] = useState(-1)
    const [isLoading, setLoading] = useState(true)


    const getAllProducts = async () => {
        try {
            const limit = 25
            const skip = (currentPage - 1) * limit
            const response = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}`)
            const result = await response.json()
            setProducts(result.products)
            setLoading(false)
            if (pages === -1) {
                setPages(Math.ceil(result.total / limit))
            }
        } catch (err) {
            console.error('Error fetching products:', err.message)
        }
    }

    useEffect(() => {
        setLoading(true)
        getAllProducts()
    }, [currentPage])

    return (
        <Fragment>
            <div className='d-flex justify-content-center gap-4 flex-wrap' style={{marginTop:"100px"}}>
                {
                    isLoading ? <Loader /> : products.map(product => {
                        return <FlatList key={product.id} product={product}/>
                    })
                }
            </div>

            {/* Pagination */}
            <div className='my-5 d-flex justify-content-center gap-2'>
                { !isLoading && pages !== -1 && 
                    Array.from({ length: pages }, (_, index) => (
                        <button 
                            key={index + 1} 
                            onClick={() => setCurrentPage(index + 1)}
                            className={currentPage === index + 1 ? 'active bg-danger rounded-full text-light' : 'bg-success rounded-full text-light'}
                            style={{padding: "4px 12px"}}
                        >
                            {index + 1}
                        </button>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default ProductsFetch