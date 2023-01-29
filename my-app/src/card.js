import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt={props.name} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">Price: ${props.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
            </div>
        </div>
    );
}

export default Card;
