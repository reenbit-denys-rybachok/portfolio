import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Developer with 2 years of experience</h3>
            <p>
              I'm a passionate Front-End / Full-Stack Developer specializing in
              building scalable web applications using React, Next.js, and
              Angular. I have extensive experience developing complex user
              interfaces, browser extensions, and marketing platforms.
            </p>
            <p>
              With additional full-stack experience in Node.js and MongoDB, I
              can handle end-to-end development tasks.
            </p>
            <p>
              I have worked with clients from the <strong>USA</strong>,{' '}
              <strong>Canada</strong>, and <strong>Ireland</strong>,
              collaborating in cross-functional teams and leveraging AI tools to
              improve development efficiency and code quality.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Ukraine</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <a href="mailto:drybachok@gmail.com" className="detail-value">
                  drybachok@gmail.com
                </a>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <a href="tel:+39097300083" className="detail-value">
                  097 53 000 83
                </a>
              </div>
            </div>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/denys-rybachok-117192328/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                LinkedIn
              </a>
              <a
                href="https://t.me/drybachok"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                Telegram
              </a>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">2</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">4</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            {/*<div className="stat-card">*/}
            {/*  <div className="stat-number">5+</div>*/}
            {/*  <div className="stat-label">Technologies</div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
