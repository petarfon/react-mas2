import React from 'react'
import OneProduct from './oneProduct'

const Products = ({ allproducts, sometext, onAdd }) => {
    return (
        <div className='all-products'>
            {allproducts !== null ? allproducts.map(
                (p) => (
                    <OneProduct product={p} key={p.id} onAdd={onAdd} />
                )
            ) : "No products"}
            {/* <OneProduct />
            <OneProduct />
            <OneProduct /> */}
        </div>
    )
}

export default Products