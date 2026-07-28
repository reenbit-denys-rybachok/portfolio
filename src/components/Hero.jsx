import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-greeting">Hello, I'm</div>
          <h1 className="hero-name">
            Denys <span className="highlight">Rybachok</span>
          </h1>
          <h2 className="hero-title">Front-End / Full-Stack Developer</h2>
          <p className="hero-description">
            Building scalable full-stack web applications with React, Next.js,
            Angular, Node.js (NestJS, Fastify), MongoDB, and PostgreSQL.
            Experienced in developing complex user interfaces, browser
            extensions and marketing platforms.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-block">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <pre className="code-content">
              <code>
                <span className="code-keyword">const</span>{' '}
                <span className="code-variable">developer</span> = {'{'}
                <br />
                {'  '}
                <span className="code-property">name</span>:{' '}
                <span className="code-string">"Denys Rybachok"</span>,
                <br />
                {'  '}
                <span className="code-property">role</span>:{' '}
                <span className="code-string">
                  "Front-End / Full-Stack Developer"
                </span>
                ,
                <br />
                {'  '}
                <span className="code-property">experience</span>:{' '}
                <span className="code-number">2</span>{' '}
                <span className="code-string">"years"</span>,
                <br />
                {'  '}
                <span className="code-property">passion</span>:{' '}
                <span className="code-string">"Building amazing UIs"</span>,
                <br />
                {'  '}
                <span className="code-property">technologies</span>: [
                <br />
                {'    '}
                <span className="code-string">"React"</span>,{' '}
                <span className="code-string">"Next.js"</span>,{' '}
                <span className="code-string">"Angular"</span>,
                <br />
                {'    '}
                <span className="code-string">"Node.js"</span>
                <br />
                {'  '}],
                <br />
                {'}'};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
