

import "./portDetail.css";


function PortfolioCard({projectName, projectImage, description, date, tech, role, projectLink}){

    return(
        <div className="portfolio-item" >
            <div className="portfolio_item-thumbnail" >
                <img src={projectImage} alt="thumb-up" />
            </div>
            <h3 className="portfolio-item-title" > project name : {projectName} </h3>
            <a className="btn view-project-btn" >Voir plus</a>
            <div className="portfolio-item-details" >
                <div className="description" >
                    <p>description : {description} </p>
                </div>
                <div className="general-info" >
                    <ul>
                        <li> Crée - <span> date : {date} </span> </li>
                        <li>technologies utilisée - <span> tech : {tech} </span> </li>
                        <li>Role - <span> my role {role}</span> </li>
                        <li>View online <span> <a href={projectLink} target="_blank" >Voir le projet</a> </span> </li>
                    </ul>
                </div>
            </div>
        </div>
    )

}



export default PortfolioCard;

