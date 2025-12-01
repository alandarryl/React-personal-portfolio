


import "./portCard.css";


function PortfolioCard({projectName, projectImage}){

    return(
        <div className="portfolio-item" >
            <div className="portfolio_item-thumbnail" >
                <img src={projectImage} alt="thumb-up" />
            </div>
            <h3 className="portfolio-item-title" > project name : {projectName} </h3>
            <a className="btn view-project-btn" >Voir plus</a>
        </div>
    )

}



export default PortfolioCard;