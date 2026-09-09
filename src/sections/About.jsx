import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-intro">
          <span className="section-label">About Nexaweb</span>

          <h2>
            We turn ideas into
            <span>digital experiences.</span>
          </h2>
        </div>

        <div className="about-content">
          <p className="about-lead">
            Nexaweb Digital Enterprise is a web design and development
            business focused on creating professional digital experiences
            that help businesses establish a strong online presence.
          </p>

          <p>
            From the first idea to the final launch, we focus on understanding
            each client's goals and translating them into websites that are
            visually polished, responsive and practical.
          </p>

          <p>
            We believe a good website should do more than look impressive. It
            should communicate clearly, work smoothly and give visitors a
            reason to take the next step.
          </p>

          <a href="#contact" className="about-link">
            Let's work together
            <span>↗</span>
          </a>
        </div>
      </div>

      <div className="about-bottom">
        <div className="about-stat">
          <strong>01</strong>
          <span>Design with purpose</span>
        </div>

        <div className="about-stat">
          <strong>02</strong>
          <span>Built for every screen</span>
        </div>

        <div className="about-stat">
          <strong>03</strong>
          <span>Focused on your goals</span>
        </div>
      </div>
    </section>
  );
}

export default About;