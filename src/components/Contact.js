import React from 'react'

const close_contact_modal = () => {

    console.log('CLOSE')

    const modal = document.getElementById('contact');

    modal.classList.toggle('is-active');

}

const Contact = () => (

    <div className="modal is-active" id="contact">
        
        <div className="modal-background"></div>
  
        <div className="modal-card">
            
            <header className="modal-card-head">
                
                <p className="modal-card-title">Octavio Perez</p>
                    
                <button className="delete" aria-label="close" onClick={close_contact_modal}></button>
            
            </header>
            
            <section className="modal-card-body">

                <p> 
                    
                    <label className="label">Tel: </label>
                    <a href="tel:+3334431333">3334431333</a>

                    <label className="label">Dim:</label>
                    <a href="#">2050960</a>

                </p>
            
            </section>
        
        </div>
    
    </div>

)

export default Contact