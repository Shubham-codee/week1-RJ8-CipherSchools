import React from 'react';
import Card from './card';

function App() {
    return (
        <div className="container">
            <Card img="product1.jpg" name="Shoes" price="20.99" />
            <Card img="product2.jpg" name="Head phone" price="30.99" />
            <Card img="product3.jpg" name="Watch" price="50.99" />
        </div>
    );
}

export default App;
