import "../../assets/style.css"
import Project from "../Project"
import projects from "../../projects.json"

function Portfolio() {

    return (
        <section >
            <div id="portfolio" className="row" style={{paddingTop:"80px"}}>
                <div className="container">
                    <div className="col-sm-12">
                        <h1 className="text-center mb-5">PORTFOLIO</h1>
                        <div className="row">

                            {projects.map((item, i) => (
                            <Project
                                    key={i}
                                    title={item.title}
                                    image={item.image}
                                    deployed={item.url}
                                    github={item.github}
                                />

                            ))}
                                                         
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    )
}
export default Portfolio;  