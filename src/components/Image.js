//Declaration of the Image prop

import React from 'react'

const Image = (props) => {
  return (
    <div>
       <img style={{ margin: 0, width: "18rem" }} src={props.image} alt="peddal" />;
    </div>
  )
}

export default Image
