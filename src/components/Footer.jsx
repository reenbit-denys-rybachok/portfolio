import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-bracket"></span>
            <span className="logo-text">DR</span>
            <span className="logo-bracket"></span>
          </div>
          <p className="footer-description">
            Building scalable web applications with modern technologies.
          </p>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/denys-rybachok-117192328/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://t.me/drybachok"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a href="mailto:drybachok@gmail.com">Email</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Denys Rybachok. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
