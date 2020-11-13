import "../../assets/style.css"
import stars from "./stars.png"
function Header() {

    return (
        <div className="container" id="top">
        <div className="row">
        <div className="col-lg-12 text-center">
            <h2 className="name text-center scale-up-center"> <span className= "name1">KATIE CAMPBEL</span>L</h2>
            <p className="blurb text-center">Full Stack Web Developer</p>
            <img id="star" src={stars}/>
        </div>
    </div>
    </div>
    )
}
export default Header;  