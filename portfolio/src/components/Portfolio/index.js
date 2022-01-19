// import "../../assets/style.css"
import Project from "../Project"
import projects from "../../projects.json"
import {
    PortfolioContainer,
    PortfolioH1,
    Bar
} from "./Portfolio";

function Portfolio() {

    return (
        <PortfolioContainer id="projects">
            <PortfolioH1>
                Projects from Bootcamp
                <Bar />
            </PortfolioH1 >
            <section >
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
    )
}
export default Portfolio;

