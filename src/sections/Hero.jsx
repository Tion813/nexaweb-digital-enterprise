import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <span className="hero-eyebrow">
            Digital Solutions • Web Design • Development
          </span>

          <h1>
            We Build Websites
            <span>That Move Businesses Forward.</span>
          </h1>

          <p>
            Nexaweb Digital Enterprise creates professional, responsive and
            modern websites designed to help businesses establish a stronger
            digital presence.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="hero-button primary">
              Start Your Project
              <span>↗</span>
            </a>

            <a href="#portfolio" className="hero-button secondary">
              View Our Work
              <span>↗</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>Based in Nairobi, Kenya</span>
            <span>•</span>
            <span>Serving businesses digitally</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-orbit orbit-one"></div>
          <div className="hero-orbit orbit-two"></div>

          <div className="hero-glow"></div>

          <div className="hero-card">
            <span className="hero-card-label">NEXAWEB</span>
            <span className="hero-card-line"></span>

            <strong>
              Digital
              <br />
              Enterprise
            </strong>

            <span className="hero-card-number">01</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;