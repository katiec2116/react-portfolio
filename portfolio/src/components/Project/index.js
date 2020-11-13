function Project(props) {
    return (
        <div className="col-lg-4">
            <div className="card portfolioCard">
                <img className="card-img-top" src={props.image}
                    alt={props.title} />
                <div className="card-body rounded-bottom">
                    <p className="card-text">
                        {props.title}
                    <br />
                        <a className="pLink" href={props.deployed}
                            target="_blank">Deployed App</a>
                        <br />
                        <a className="pLink" href={props.github}
                            target="_blank">GitHub Repository</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project