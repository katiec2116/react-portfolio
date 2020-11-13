import "../../assets/style.css"
function Nav() {

    return (
        <nav sticky="top" className="navbar navbar-expand-lg py-3 fixed-top">
            <a className="navbar-brand" href="/">KATIE CAMPBELL</a>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="/#about">About</a>
                    <a className="nav-link" href="/#portfolio">Portfolio</a>
                    <a className="nav-link" href="/#resume">Resume</a>
                    <a className="nav-link" href="/#contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}
export default Nav;  