

import "./aboutSection.css";




function AboutSection(){

    return(
        <section className="about-section sec-padding " id="about">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>A propos de Moi</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="about-img">
                        <div className="img-box">
                            <img src="images/profil-pic.jpg" alt="about img" />
                        </div>
                    </div>
                    <div className="about-text">
                        <p>Jeune, dynamique, autonome et surtout motivé, je suis flexible
                            et très impliqué. J’apprends vite. Je privilégie le travail en équipe
                            et le respect des règles et des normes. Je voudrai mettre a profit 
                            mes compétences et gagner en expériences dans le domaine du 
                            développement web
                        </p>
                        <h3>Skills</h3>
                        <div className="skills">
                            <div className="skill-item">Html</div>
                            <div className="skill-item">Css</div>
                            <div className="skill-item">Bootstrap</div>
                            <div className="skill-item">Tailwind</div>
                            <div className="skill-item">javascript</div>
                            <div className="skill-item">React</div>
                            <div className="skill-item">Git</div>
                            <div className="skill-item">PHP</div>
                            <div className="skill-item">Xampp</div>
                            <div className="skill-item">PHPmyAdmin</div>
                            <div className="skill-item">React js</div>
                            <div className="skill-item">Node js</div>
                            <div className="skill-item">PHP / Laravel</div>
                            {/* <!-- <div className="skill-item">React Native</div> --> */}
                            <div className="skill-item">MYsql</div>
                        </div>

                        <div className="about-tabs">
                            <button type="button" className="tab-item active" data-target="#education" >Education</button>
                            <button type="button" className="tab-item" data-target="#experience" >Experience</button>
                        </div>

                        {/* <!-- Education Start --> */}
                        <div className="tab-content active" id="education" >
                            <div className="timeline">
                                <div className="timeline-item">
                                    <span className="date">2020 - 2022</span>
                                    <h4>Responsive web design - <span>FreeCodeCamp</span></h4>
                                    <p>Formation a distance sur le responsive web design.</p>
                                </div>
                                <div className="timeline-item">
                                    <span className="date">2023 - 2024</span>
                                    <h4>web developement with javascript and python - <span>Havard university EDX</span></h4>
                                    <p>Formation en ligne en distancielle a travers la platforme de formation EDX</p>
                                </div>
                                <div className="timeline-item">
                                    <span className="date">2024 - En cours</span>
                                    <h4>Bachelor en Development web et d'application - <span>L’ECE : la grande école de l’ingénierie Numérique</span></h4>
                                    <p>Formation de type Bachelor en développement web et application.</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Education End --> */}

                        {/* <!-- Experience Start --> */}

                        <div className="tab-content" id="experience">
                            <div className="timeline">
                                <div className="timeline-item">
                                    <span className="date">2021 - 2023</span>
                                    <h4>developeur web front end pour KOSALA</h4>
                                    <p>Développement orienté front-end de la plateforme principale de l’entreprise.
                                    </p>
                                </div>
                                <div className="timeline-item">
                                    <span className="date">2025 - 2025</span>
                                    <h4>INTEGRATEUR WEB pour BTI-Advisory</h4>
                                    <p>Intégration et optimisation graphiques des différents sites web en WordPress.
                                    </p>
                                </div>
                                <div className="timeline-item">
                                    <span className="date">2024 - En cours</span>
                                    <h4>Freelanceur independant en development web</h4>
                                    <p>freelance en developement web sur les differente platforme specialisé : Malt, Codeur, Upwork, fiverr et autres
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Experience End --> */}

                        <a href="./document/jonathan OKANA cv.pdf" target="_blank" className="btn" >Download cv</a>
                        <a href="#contact" className="btn link-item" >Contact me</a>

                    </div>
                </div>
            </div>
        </section>

    )


}



export default AboutSection;


