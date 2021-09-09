import CartWidget from "./CartWidget"


function Navbar() {
    return (
            <nav className="menu navbar navbar-expand-lg navbar-dark bg-dark">
		        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	   		        <span className="navbar-toggler-icon"></span>
		        </button>
		        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			        <div className="navbar-nav">
                        <a className="nav-item nav-link active menu__links" href="">Home</a>
                        <a className="nav-item nav-link menu__links" href="">Otoño-Invierno</a>
                        <a className="nav-item nav-link menu__links" href="">Nuestro-Armario</a>
                        <a className="nav-item nav-link menu__links" href="">Técnicas</a>
                        <a className="nav-item nav-link menu__links" href="">DIY BY US</a>
                        <a className="nav-item nav-link menu__links" href="">Contacto</a>  
                    </div>
                    <CartWidget />
                </div> 
	        </nav>
            
    )
}

export default Navbar

