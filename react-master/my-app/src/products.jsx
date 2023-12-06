import React from 'react'
import OneProduct from './oneProduct'

const Products = ({ allproducts, sometext, onAdd }) => {
    return (
        <div className='all-products'>
            {allproducts.map(
                (p) => (
                    <OneProduct product={p} key={p.id} onAdd={onAdd} />
                )
            )}
            {/* <OneProduct />
            <OneProduct />
            <OneProduct /> */}
        </div>
    )
}

export default Products