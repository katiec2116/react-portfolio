import "../../assets/style.css"
function Contact() {

    return (
        <div id="contact" className="row my-5">
            <div className="container containerContact my-5">
                <div className="col-md-12">
                    <div className="form-body">
                        <div className="form-body-item left">
                            <h1 className="form-title">
                                CONTACT
                                ME
                             </h1>
                        </div>
                        <div className="form-body-item">
                            <div className="form">
                                <div className="form-group">
                                    <input className="form-control" placeholder="NAME" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="EMAIL" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" placeholder="CONTACT NO" />
                                </div>
                                <div className="form-group message">
                                    <textarea className="form-control" placeholder="MESSAGE">
                                    </textarea>
                                </div>
                                <div className="form-group buttons mb-4">
                                    <button className="form-button">CANCEL</button>
                                    <button type="submit" className="form-button">SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;  