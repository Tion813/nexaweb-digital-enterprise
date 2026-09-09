import "./CTA.css";

function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="cta-container">
        <div className="cta-content">
          <span className="section-label">Have a project in mind?</span>

          <h2>
            Let's build something
            <span>worth seeing.</span>
          </h2>

          <p>
            Whether you need a new website, an e-commerce platform or a
            complete redesign, let's turn your idea into a professional
            digital experience.
          </p>

          <a href="#contact" className="cta-button">
            Start Your Project
            <span>↗</span>
          </a>
        </div>

        <div className="cta-visual">
          <div className="cta-ring ring-one"></div>
          <div className="cta-ring ring-two"></div>
          <div className="cta-ring ring-three"></div>

          <div className="cta-center">
            <span>N</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;