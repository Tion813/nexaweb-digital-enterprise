import "./Portfolio.css";

const projects = [
  {
    number: "01",
    category: "Business Website",
    title: "Corporate Digital Experience",
    description:
      "A professional digital presence designed to communicate a company's services, credibility and value clearly.",
  },
  {
    number: "02",
    category: "Healthcare Website",
    title: "Healthcare Digital Platform",
    description:
      "A clean and accessible website experience designed to help patients discover services and connect with a healthcare provider.",
  },
  {
    number: "03",
    category: "E-Commerce",
    title: "Modern Online Store",
    description:
      "A responsive e-commerce experience designed to present products clearly and create a smooth customer journey.",
  },
];

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">

        <div className="portfolio-heading">
          <div>
            <span className="section-label">Selected Work</span>

            <h2>
              Digital experiences
              <span>made to stand out.</span>
            </h2>
          </div>

          <p>
            A selection of digital experiences built with clarity, usability
            and modern design at the centre.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <article className="portfolio-card" key={project.number}>

              <div className="portfolio-preview">
                <div className="preview-browser">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="preview-content">
                  <div className="preview-line large"></div>
                  <div className="preview-line medium"></div>
                  <div className="preview-block"></div>

                  <div className="preview-small-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>

                <div className="preview-orbit"></div>
              </div>

              <div className="portfolio-info">
                <div className="portfolio-topline">
                  <span>{project.category}</span>
                  <span>{project.number}</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a href="#contact" className="portfolio-link">
                  Discuss a similar project
                  <span>↗</span>
                </a>
              </div>

            </article>
          ))}
        </div>

        <div className="portfolio-footer">
          <span>Have a project you'd like to see here?</span>

          <a href="#contact">
            Start a conversation
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;