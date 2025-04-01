import React from 'react'
import "../styles/inputfield.css"

const InputField = ({label, type}) => {
  return (
    <div className='input-field-cont'>
    <label htmlFor={`${label}`}>{label}</label>
    <input type={`${type}`} name={`${label}`} className='input-field' id='input-field' />
    </div>
  )
}

export default InputField