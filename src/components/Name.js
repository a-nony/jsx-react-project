//Declaration of the Name prop

import React from 'react'

const Name = (props) => {
  return (
    <div>
       <p style={{fontWeight: "bold", margin: 0}}>{props.name}</p>
       
    </div>
  )
}

export default Name
