

import "./contactform.css";


function ContactForm(){


    return(
        <section className="contact-section sec-padding " id="contact">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Contact me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="contact-form">
                        {/* <form >
                            <div className="row">
                                <div className="input-group">
                                    <input type="text" placeholder="Name" id="name" className="input-control" required >
                                </div>
                                <div className="input-group">
                                    <input type="text" placeholder="Email" id="email" className="input-control" required >
                                </div>
                                <div className="input-group">
                                    <input type="text" placeholder="Subject" id="subject" className="input-control" required >
                                </div>
                                <div className="input-group">
                                    <textarea placeholder="Message" id="message" className="input-control"  required></textarea>
                                </div>
                                <div className="submit-btn">
                                    <button type="submit" onclick="sendMail(event)" className="btn" >Send message</button>
                                </div>
                            </div>
                        </form> */}
                    </div>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <h3>Email</h3>
                            <p>okanajonathan2@gmail.com</p>
                        </div>
                        <div className="contact-info-item">
                            <h3>Phone</h3>
                            <p>+33 7 59 21 46 66</p>
                        </div>
                        <div className="contact-info-item">
                            <h3>Follow me</h3>
                            <div className="social-links">
                                <a href="#" target="_blank" ><i className="uil uil-facebook"></i></a>
                                <a href="www.linkedin.com/in/jonathan-okana-406b72285" target="_blank" ><i className="uil uil-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}



export default ContactForm;


