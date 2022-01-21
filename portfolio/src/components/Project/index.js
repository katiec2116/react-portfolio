import "./Project.css"
import headerImg from "../../assets/headerImg.jpeg"
import {BsBoxArrowUpRight} from "react-icons/bs"


function Project(props) {
    return (
        <div className="project-row">
            <div className="project-image">
                <a href={props.deployed} target="_blank"><img src={headerImg} width="400px" height="390px" />
                </a> 
            </div>
            
            <div className="project-details">
                <h2>{props.title}</h2>
                <h3>{props.tech}</h3>
                <div className="project-buttons">
                    <a href={props.github} target="_blank">View Repo <BsBoxArrowUpRight id="go-icon"/></a>
                    <a href={props.deployed} target="_blank">View Demo <BsBoxArrowUpRight id="go-icon"/></a></div>
            </div>
        </div>
    )
}

export default Project


