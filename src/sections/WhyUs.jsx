import {
    Target,
    Sparkles,
    Cpu,
    TrendingUp,
  } from "lucide-react";
  
  import "./WhyUs.css";
  
  const reasons = [
    {
      number: "01",
      title: "Built Around Your Business",
      description:
        "We don't believe in one-size-fits-all websites. Every project is shaped around your brand, audience and objectives.",
      icon: Target,
    },
    {
      number: "02",
      title: "Professional by Design",
      description:
        "From typography and layout to interactions and responsiveness, we pay attention to the details that make a website feel credible.",
      icon: Sparkles,
    },
    {
      number: "03",
      title: "Modern Technology",
      description:
        "We use modern web technologies to create websites that are fast, responsive, maintainable and ready to grow with your business.",
      icon: Cpu,
    },
    {
      number: "04",
      title: "Focused on Results",
      description:
        "A website should have a purpose. We focus on creating experiences that communicate clearly and encourage visitors to take action.",
      icon: TrendingUp,
    },
  ];
  
  function WhyUs() {
    return (
      <section className="why-us">
        <div className="why-us-container">
          <div className="why-us-intro">
            <span className="section-label">Why Nexaweb</span>
  
            <h2>
              More than a website.
              <span>A digital foundation.</span>
            </h2>
  
            <p>
              We combine design, technology and strategy to help businesses
              create a stronger presence in the digital world.
            </p>
          </div>
  
          <div className="why-us-list">
            {reasons.map((reason) => {
              const Icon = reason.icon;
  
              return (
                <article className="why-us-item" key={reason.number}>
                  <span className="why-us-number">{reason.number}</span>
  
                  <div className="why-us-icon">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
  
                  <div className="why-us-content">
                    <h3>{reason.title}</h3>
                    <p>{reason.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  
  export default WhyUs;