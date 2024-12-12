import React from 'react'

const PageNumber = ({Number,classType}) => {
  return (
    <div className={classType}>
     <label> {Number}</label>
    </div>
  )
}

export default PageNumber
