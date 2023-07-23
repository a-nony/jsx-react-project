//The main component for rendering
import React from 'react'
//Importing of each components to be rendered respectively
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';
import Product from './Product'
//Importing of card component from bootstrap
import Card  from 'react-bootstrap/Card';
//importing of the styling from app.css
import './App.css'


const App = () => {
  return (
    <div>
      <Card >
     
      <Card.Body style={{margin: 0}}>
         <Name name={Product.name} />
            <Price price={Product.Price} />
            <Description description={Product.Description} />
            <Image  image={Product.image} />
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default App

