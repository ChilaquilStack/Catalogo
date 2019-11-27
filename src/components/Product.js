import React from 'react'
import './product.css'

const Product = ({product:{name,description,ingredients,caracteristics, image, index}}) => (

    <div className="column">

        <article className="card">

            <header className="card-header">

                <p className="card-header-title is-centered "> { name.toUpperCase() } </p>

            </header>

            <div className="card-image">

                <figure className="image is-16x16px">
                    
                    <img
                        
                        alt="product"
                        
                        src={image ? image : "https://bulma.io/images/placeholders/128x128.png"}
                        
                        />

                </figure>
                
            </div>

            <div className="card-content">

                <div className="content">

                    <p> {description} </p>
                
                    { ingredients.map( (ingredient,index) =>  <a key={index} href="#"> { ingredient} </a> )}
                
                </div> 
                    
            </div>            

            <footer className="card-footer is-centered">
                
                {
                    
                    caracteristics.map((caracteristic,index) => <span className="card-footer-item" key={index} href="#"> { caracteristic.toUpperCase() } </span> ) 
                    
                }

            </footer>

        </article>
    
    </div>

)

export default Product;