

import "./PortfolioGrid.css";

import PortfolioCard from "./PortfolioCard/PortfolioCard";


function PortfolioGrid(){


    return(
        <div className="portfolio-section" id="portfolio" >
            <div className="container" >
                <div className="row" >
                    <div className="section-title" >
                        <h2>Mes projects</h2>
                    </div>
                </div>
                <div className="row">
                    <PortfolioCard  projectName={whatever} />
                </div>
            </div>
        </div>
    )

}




export default PortfolioGrid;


