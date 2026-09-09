import "./Footer.css";
import logo from "../assets/images/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
          <a href="#home" className="footer-logo">
  <img src={logo} alt="Nexaweb Digital Enterprise" />
</a>

            <p>
              Digital solutions designed to help businesses build a stronger
              presence online.
            </p>

            <a href="mailto:hello@nexaweb.co.ke" className="footer-email">
              hello@nexaweb.co.ke
            </a>
          </div>

          <div className="footer-column">
            <span className="footer-heading">Explore</span>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
          </div>

          <div className="footer-column">
            <span className="footer-heading">Company</span>

            <a href="#process">Our Process</a>
            <a href="#contact">Contact</a>
            <a href="#cta">Start a Project</a>
          </div>

          <div className="footer-column">
            <span className="footer-heading">Connect</span>

            <a href="#contact">Email</a>
            <a href="#contact">Nairobi, Kenya</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {currentYear} Nexaweb Digital Enterprise. All rights reserved.
          </span>

          <span>
            Designed & developed by Nexaweb.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;