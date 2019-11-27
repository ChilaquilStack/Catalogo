import React from 'react'

const open_contact_modal = () => {

    const modal = document.getElementById('contact')

    modal.classList.toggle('is-active')

}

const open_menu = () => {

    const menu = document.getElementById('navbarBasicExample')

    menu.classList.toggle('is-active')

}

const Navbar = () => (

    <nav className="navbar" role="navigation" aria-label="main navigation">
        
        <div className="navbar-brand">
            
            <a className="navbar-item" href="https://bulma.io">
                
                <img 
                    height="28"
                    width="112" 
                    src="https://mhvida.com/wp-content/uploads/2018/11/logo-mh-mega-health.png"
                    alt="navbar"
                />
            
            </a>

             <a
                href="#"
                role="button" 
                aria-label="menu" 
                onClick={open_menu} 
                aria-expanded="false" 
                className="navbar-burger burger" 
                data-target="navbarBasicExample" 
            >
                
                <span aria-hidden="true"></span>
                
                <span aria-hidden="true"></span>
                
                <span aria-hidden="true"></span>
            
            </a>
    
        </div>

    <div id="navbarBasicExample" className="navbar-menu">
        
        <div className="navbar-start">
        
            <a className="navbar-item" href="#">
                
                Productos
            
            </a>

            <a className="navbar-item" onClick={open_contact_modal} href="#">
                
                Contacto
            
            </a>
            
        </div>
    
        <div class="field has-addons">
            
            <div class="control">
                
                <input class="input" type="text" placeholder="Find a repository" />
                
            </div>
            
            <div class="control">
                
                <a class="button is-info" href="#">
                    
                    Search
                
                </a>
            
            </div>
        
        </div>
    
    </div>

</nav>

)

export default Navbar