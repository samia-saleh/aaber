import React from 'react'

const TextArea = ({Placeholder="",Name=""}) => {
  return (
    <textarea className='TextAreaStyle' placeholder={Placeholder} name={Name}>

    </textarea>
  )
}

export default TextArea
