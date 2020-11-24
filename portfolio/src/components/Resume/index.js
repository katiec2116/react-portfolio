import { HashLink as Link } from 'react-router-hash-link';
import "../../assets/style.css"
function Resume() {

    return (
        <div className="container" id="resume">
        <div className="row">
            <div className="col-md-12 text-center">
                <h1 className="mb-3">RESUME</h1>
                <p className="resume">Checkout my resume for more information!</p>
                <Link to="/resume.html"><button type="button" className="btn btn-light">View or
                        Download</button></Link>
            </div>
        </div>
    </div>
    )
}
export default Resume;  