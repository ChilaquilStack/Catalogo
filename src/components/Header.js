import React from 'react'

const imgStyle = {
    maxWidth: "256px"

}

const Header = () => (

    <header className="hero has-background-white">
		
        <div className="hero-body">
			
            <div className="container">
				
                <figure className="image center">
						
                    <img
                        alt="logo"
                        style={imgStyle}
                        src="https://mhvida.com/wp-content/uploads/2018/11/logo-mh-mega-health.png" 
                    />
				
                </figure>
			
            </div>
			
        </div>
	
    </header>

)

export default Header