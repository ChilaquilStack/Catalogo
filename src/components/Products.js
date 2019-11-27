import React from 'react'
import Product from './Product'
import products from '../data/products' 


const Products = () => (

    <div className="columns is-mobile is-multiline is-centered">        
        {
            
            products.map((product,index) => <Product key={product.id} product={product} index={index}/>)
            
        }
    </div>
)

export default Products;