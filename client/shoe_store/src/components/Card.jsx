import React from 'react';

function Card(props) {
    const { product, addToCart } = props;
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-5">
            <figure className="px-10 pt-10">
                <img src={product.imageURL} alt={product.name} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.brand}</p>
                <h2 className="card-title">$ {product.price}</h2>
                <div className="card-actions">
                    <button className="btn btn-success" onClick={() => addToCart(product)}>
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;
