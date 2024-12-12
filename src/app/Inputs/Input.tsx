import React from 'react'

const Input = ({Placeholder="",Name=""}) => {
  return (
    <input type='text' placeholder={Placeholder} className='InputStyle'
     name={Name} />
  )
}

export default Input
