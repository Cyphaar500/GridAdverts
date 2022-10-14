import React from 'react';

export default function Footer() {

    return (
        <div className='my-footer'>
            <div>
                <i className="fa fa-envelope"></i>
                <h4>EMAIL SUPPORT</h4>
                <p className='paragraph'>Help@gridads.com</p>
            </div>
            <div>
                <i className="fa fa-phone"></i>
                <h4>PHONE SUPPORT</h4>
                <p className='paragraph'>01-254 457 357, 01-111 333 444</p>
            </div>
            <div>
                <i className="fa fa-whatsapp"></i>
                <h4>WHATSAPP</h4>
                <p className='paragraph'>0813354982, 08029685420</p>
            </div>
            <form className='my-form'>
                <input type="text" id="name" placeholder="Email Address"/>
                <label for="email"></label>
                <input type="submit" value="Subscribe"/>
            </form>

        </div>        
                
    )

}
