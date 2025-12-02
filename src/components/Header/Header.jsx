

import "./header.css";



function Header(){

    return(
        <header>
        <h1> <a>JO.</a> </h1>
                <div className="nav-items" >
                    <button type="button" className="nav-toggle" >
                        open
                    </button>
                    <nav className="nav open" >
                            <ul>
                                <li> <a href="#home" className="nav-item link-item" >Page d'acceuil</a> </li>
                                <li> <a href="#about" className="nav-item link-item" >A propos de moi</a> </li>
                                <li> <a href="#portfolio" className="nav-item link-item" >Mes projets</a> </li>
                                <li> <a href="#contact" className="nav-item link-item" >Me contacter</a> </li>
                            </ul>
                    </nav>
                </div>
                
        </header>
    )

}


export default Header;

