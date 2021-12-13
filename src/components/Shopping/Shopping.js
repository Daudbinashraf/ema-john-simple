import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shopping.css'

const Shopping = () => {
   
    const [products, setproducts] = useState([]);
    const [cart, setCart] =useState([])
    



    useEffect( () => {
        fetch('/products.JSON')
        .then(res => res.json())
        .then(data => setproducts(data));
    }, [])

    const evenAdd= (product)=>{

        // const newCart =[...cart.Product]
        console.log(product);

        // setCart(newCart);

    }


    
   
    return (
       

        <div className = " shop-container" >
            <div className="product-container">
                    <h3>Products:{products.length}</h3>
                    
            {
                products.map(product => <Product 
                evenAdd={evenAdd}
                key={product.key}
                product= {product}>
        
 
                </Product> )

            }

            </div>
            <div className="cart-container">
                <h3>order summary: </h3>
                <h5>Items order: </h5>
            </div>
        </div>
    );
};

export default Shopping;