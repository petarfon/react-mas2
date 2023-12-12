import React from 'react'
import OneProduct from './oneProduct'
import Order from './order'

const Cart = ({ cart, onAdd }) => {
    return (
        <>
            <div className='all-products'>
                {((cart === null) || cart.length === 0) ? "No products in cart" : cart.map(
                    (p) => (
                        <OneProduct product={p} key={p.id} onAdd={onAdd} />
                    )
                )}
            </div>
            <Order />
        </>

    )
}

export default Cart