import './Contact.css';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>
              I'm currently available for freelance work and full-time
              opportunities. If you have a project in mind or just want to say
              hello, feel free to reach out!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:drybachok@gmail.com">drybachok@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+39097300083">097 53 000 83</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Ukraine</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/denys-rybachok-117192328/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://t.me/drybachok"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Telegram"
              >
                <Send size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
