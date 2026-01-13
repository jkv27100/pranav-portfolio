import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-description">Let's work together</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>pranavkvnambiar@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h4>Phone</h4>
                <p>+353 892560802</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Location</h4>
                <p>Dublin, Ireland</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
