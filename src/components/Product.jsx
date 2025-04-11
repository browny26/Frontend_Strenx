import React from 'react'
import "../styles/product.css"

const Product = ({image, title,quantity,price}) => {
  return (
    <div className="product">
        <img
          src={image}
          width="100px"
          height="100px"
        ></img>
        <div className="order-text">
        <h3 className="order-title">{title}<span>{quantity}</span></h3>
        <h3>{price}</h3>
        </div>
      </div>
  )
}

export default Product