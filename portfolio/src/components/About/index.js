import "../../assets/style.css";
import profile from "./circle-cropped.png";

function About() {

    return (
        <section style={{paddingTop:"80px"}} id="about">
            <div className="container pt-2">
                <div className="row">
                    <div className="col-md-12 text-center aboutMe">
                        <h1 className="mb-3">ABOUT ME</h1>
                    </div>
                </div>
                <div className="row aboutText text-white">
                    <div className="col-md-12 px-4">
                        <img id="myPic" src={profile} alt ="profile" className="float-left" />
                        <p>
                            I'm from Melbourne, FL and moved to downtown Orlando at the beginning of 2020 to be closer
                            to my
                            job.
                            I'm a double graduate from Florida State University, first graduating in 2017
                            with my bachelor's in environmental science and then again in 2019 with my
                            masters in geographic information science. I've been working for Orange County Government as
                            a GIS Specialist for a year and a half now.
                        </p>
                        <p>
                            I recently completed an intensive full stack web development bootcamp through the University
                            of
                            Central Florida. The languages and technology I learned included HTML, CSS, Javascript, JQuery, Node,
                            Handlebars, MySQL, MongoDB, Express, and React and I also have past experience with C++ and
                            Python. I am excited to join the world of web development professionaly, work with like-minded individuals, and look forward to
                            making some amazing applications!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;  