import {
    Code2,
    ShoppingCart,
    RefreshCw,
    Smartphone,
    Wrench,
    Palette,
  } from "lucide-react";
  
  import "./Services.css";
  
  const services = [
    {
      number: "01",
      title: "Website Design & Development",
      description:
        "Professional, responsive websites designed and developed around your brand, goals and audience.",
      icon: Code2,
    },
    {
      number: "02",
      title: "E-Commerce Websites",
      description:
        "Modern online stores that give businesses a reliable platform to showcase products and serve customers online.",
      icon: ShoppingCart,
    },
    {
      number: "03",
      title: "Website Redesign",
      description:
        "Transform an outdated website into a cleaner, faster and more professional digital experience.",
      icon: RefreshCw,
    },
    {
      number: "04",
      title: "Responsive Web Design",
      description:
        "Websites built to provide a smooth experience across phones, tablets, laptops and desktop screens.",
      icon: Smartphone,
    },
    {
      number: "05",
      title: "Website Maintenance",
      description:
        "Ongoing updates, improvements and technical support to keep your website running smoothly.",
      icon: Wrench,
    },
    {
      number: "06",
      title: "Digital Design",
      description:
        "Supporting digital design services that help businesses maintain a consistent and professional online presence.",
      icon: Palette,
    },
  ];
  
  function Services() {
    return (
      <section className="services" id="services">
        <div className="services-container">
          <div className="services-heading">
            <div>
              <span className="section-label">What We Do</span>
  
              <h2>
                Digital solutions
                <span>built with purpose.</span>
              </h2>
            </div>
  
            <p>
              We combine thoughtful design, modern technology and practical
              strategy to create digital experiences that help businesses grow.
            </p>
          </div>
  
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
  
              return (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
  
                  <div className="service-icon">
                    <Icon size={22} strokeWidth={1.6} />
                  </div>
  
                  <h3>{service.title}</h3>
  
                  <p>{service.description}</p>
  
                  <a href="#contact" className="service-link">
                    Learn more <span>↗</span>
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  
  export default Services;