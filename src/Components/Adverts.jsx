import React from 'react';

export default function Adverts({title, img, price}) {

    return (
            <div className='info'>
                <img src={process.env.PUBLIC_URL + `${img}`} alt="man" className='my-img'/>
                <h3 className='my-price'>{price}</h3>
                <p>{title}</p>
                <div className='ratings'>
                    <span class="fa fa-star checked"/>
                    <span class="fa fa-star checked"/>
                    <span class="fa fa-star checked"/>
                    <span class="fa fa-star checked"/>
                    <span class="fa fa-star"/>
                </div>
                <div className="btn">
                    <button className='cart-btn'><i class="fa fa-shopping-cart"></i> ADD TO CART</button>            
                </div>
                
            </div>   
                
    )

}
