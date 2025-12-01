

import "./intro.css";


function Intro(){


    return(
        <section className="home-section align-items-center" id="home" >
            <div className="container" >
                <div className="row align-items-center" >
                    <div className="home-text" >
                        <p>Bonjour, je suis</p>
                        <h1>Jonathan OKANA</h1>
                        <h2>Developpeur web full-stack</h2>
                        <a href="#about" className="btn link-item" >En savoir plus</a>
                        <a href="#portfolio" className="btn link-item" >Portfolio</a>
                    </div>
                    <div className="home-img" >
                        <div className="img-box" >
                            <img src="" alt="profile image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}


export default Intro;

