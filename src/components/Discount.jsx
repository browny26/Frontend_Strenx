import React from 'react'
import "../styles/discount.css"

function Discount({text}) {
  return (
    <div className='discount'>
        <p>{text}</p>
    </div>
  )
}

export default Discount