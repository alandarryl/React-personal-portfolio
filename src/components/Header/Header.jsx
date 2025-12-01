

import "./header.css";



function Header(){

    return(
        <header>
            <div className="container" >
                <div className="row flex-end" >
                    <button type="button" className="nav-toggle" >
                        <span></span>
                    </button>
                    <nav className="nav" >
                        <div className="nav-inner" >
                            <ul>
                                <li> <a href="#home" className="nav-item link-item" >Page d'acceuil</a> </li>
                                <li> <a href="#about" className="nav-item link-item" >A propos de moi</a> </li>
                                <li> <a href="#portfolio" className="nav-item link-item" >Mes projets</a> </li>
                                <li> <a href="#contact" className="nav-item link-item" >Me contacter</a> </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )

}


export default Header;

