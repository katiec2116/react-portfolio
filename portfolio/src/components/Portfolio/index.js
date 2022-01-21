// import "../../assets/style.css"
import Project from "../Project"
import projects from "../../projects.json"
import work from "../../work.json"
import {
    PortfolioContainer,
    PortfolioH1,
    Bar
} from "./Portfolio";


function Portfolio() {

    return (
        <div  id="projects">
        <PortfolioContainer>
            <PortfolioH1>
                Professional
                <Bar />
            </PortfolioH1 >
            <section >
            {work.map((item, i) => (
                    <Project
                        key={i}
                        title={item.title}
                        image={item.image}
                        deployed={item.url}
                    />
                ))}
                <PortfolioH1>
                Bootcamp
                <Bar />
            </PortfolioH1 >
                {projects.map((item, i) => (
                    <Project
                        key={i}
                        title={item.title}
                        image={item.image}
                        deployed={item.url}
                        github={item.github}
                    />
                ))}
            </section>
        </PortfolioContainer>
        </div>
    )
}
export default Portfolio;

