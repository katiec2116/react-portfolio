import "./Project.css"

function Project(props) {
    return (
        <div className="project-row">
            <div className="project-image">
                <a href={props.deployed} target="_blank"><img src={props.image} width="400px" height="304px" /></a> 
            </div>
            <div className="project-details">
                <h2>{props.title}</h2>
                <h3>{props.tech}</h3>
                <div className="project-buttons">
                    <a href={props.github} target="_blank">View Repo </a>
                    <a href={props.deployed} target="_blank">View Demo </a></div>
            </div>
        </div>
    )
}

export default Project


