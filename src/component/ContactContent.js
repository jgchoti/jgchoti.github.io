import React from "react"

function ContactContent() {
    return (<div className="container content-container">
        <div className="row">
            <div className="col-lg-6 content">
                <h1>Get in touch!</h1>
                <h2 className="mb-5">Contact Me</h2>
                <div className="ml-5 mb-4">
                    <h4>E-mail</h4>
                    <p>
                        <i className="fa-regular fa-envelope"></i>
                        <a href="mailto:jgchotirat@gmail.com" target="_blank" rel="noopener noreferrer" title="Choti's E-mail" className="contact-link">jgchotirat@gmail.com</a>
                    </p>
                </div>
                <div className="ml-5 mb-4">
                    <h4>Linkedin</h4>
                    <p>
                        <i className="fa-brands fa-linkedin"></i>
                        <a href="https://www.linkedin.com/in/chotirat/" target="_blank" rel="noopener noreferrer" title="Choti's Linkedin" className="contact-link">linkedin.com/in/chotirat/</a>
                    </p>
                </div>
                <div className="ml-5 mb-4">
                    <h4>Instagram</h4>
                    <p>
                        <i className="fa-brands fa-instagram"></i>
                        <a href="https://www.instagram.com/jgchoti/" target="_blank" rel="noopener noreferrer" title="Choti's Instagram" className="contact-link">@jgchoti</a>
                    </p>
                </div>
                <div className="ml-5 mb-4">
                    <h4>Based in</h4>
                    <p>
                        <i className="fa-solid fa-location-dot"></i>
                        Antwerp, Belgium
                    </p>
                </div>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
                <img className="profile-photo img-fluid" src={process.env.PUBLIC_URL + '/assets/images/choti_photo.jpeg'} alt="chotirat photo" />
            </div>
        </div>
    </div>
    )
}

export default ContactContent;