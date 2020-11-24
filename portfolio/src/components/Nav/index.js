import { HashLink as Link } from 'react-router-hash-link';
import "../../assets/style.css"
function Nav() {

    return (
        <nav sticky="top" className="navbar navbar-expand-lg py-3 fixed-top">
            <Link className="navbar-brand" href="/#top">KATIE CAMPBELL</Link>
            <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link" to="/#about">About</Link>
                    <Link className="nav-link" to="/#portfolio">Portfolio</Link>
                    <Link className="nav-link" to="/#resume">Resume</Link>
                    {/* <Link className="nav-link" to="/#contact">Contact</Link> */}
                </div>
            </div>
        </nav>
    )
}
export default Nav;  