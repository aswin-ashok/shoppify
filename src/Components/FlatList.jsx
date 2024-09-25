import React from 'react'

const FlatList = ({product}) => {
  return (
    <div className='bg-light p-2' style={{width:"12rem"}}>
        <div>
            <img src={product.images[0]} alt={product.title} style={{width: "100%", aspectRatio: "1/1", objectFit: "contain"}}/>
        </div>
        <div>
            <h2 className='text-truncate' style={{fontSize:"18px"}}>{product.title}</h2>
            <p><s>${product.price}</s> ${(product.price - (product.price * product.discountPercentage / 100)).toFixed(2)}</p>
            <button className='p-2 w-100 bg-success text-light'>Buy Now</button>
        </div>
    </div>
  )
}

export default FlatList
