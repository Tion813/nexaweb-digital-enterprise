import {
    Search,
    PenTool,
    Code2,
    Rocket,
  } from "lucide-react";
  
  import "./Process.css";
  
  const processSteps = [
    {
      number: "01",
      title: "Discover",
      description:
        "We start by understanding your business, your audience, your goals and what you want your website to achieve.",
      icon: Search,
    },
    {
      number: "02",
      title: "Design",
      description:
        "We turn your ideas into a clear visual direction with thoughtful layouts, strong branding and an intuitive user experience.",
      icon: PenTool,
    },
    {
      number: "03",
      title: "Develop",
      description:
        "Once the design is approved, we build the website using modern technologies with performance and responsiveness in mind.",
      icon: Code2,
    },
    {
      number: "04",
      title: "Launch",
      description:
        "After testing and final refinements, your website is prepared for launch and we help get your new digital presence online.",
      icon: Rocket,
    },
  ];
  
  function Process() {
    return (
      <section className="process" id="process">
        <div className="process-container">
          <div className="process-heading">
            <div>
              <span className="section-label">Our Process</span>
  
              <h2>
                From idea
                <span>to launch.</span>
              </h2>
            </div>
  
            <p>
              A straightforward process keeps every project focused, organised
              and aligned with the client's goals.
            </p>
          </div>
  
          <div className="process-list">
            {processSteps.map((step) => {
              const Icon = step.icon;
  
              return (
                <article className="process-step" key={step.number}>
                  <div className="process-number">{step.number}</div>
  
                  <div className="process-icon">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>
  
                  <div className="process-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
  
                  <div className="process-arrow">↗</div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  
  export default Process;