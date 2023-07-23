//Declaration of the Price prop

import React from 'react'

const Price = (props) => {
  return (
    <div>
      <p style={{margin: 2}}>Price: ${props.price}</p>
    </div>
  )
}

export default Price
