import React from 'react'

const OneProduct = ({ product, onAdd }) => {

    // const addToCart = () => {
    //     product.amount = product.amount + 1;
    //     console.log("id: ", product.id, " amount: ", product.amount);
    // }

    return (
        <div className='card'>
            <img src="https://picsum.photos/200" alt="Neka slika" className="card-img-top" />
            <div className="card-body">
                <h3 className="card-title">
                    {product.title}
                </h3>
                <p className="card-text">
                    {product.description}
                </p>
                <button className="btn" onClick={() => onAdd(product.id)}>+</button>
                <button className="btn">-</button>
            </div>
        </div>
    )
}

export default OneProduct