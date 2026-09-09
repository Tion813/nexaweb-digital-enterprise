import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-intro">
          <span className="section-label">Get In Touch</span>

          <h2>
            Let's talk about
            <span>your project.</span>
          </h2>

          <p>
            Have an idea, need a new website or want to improve an existing
            one? Tell us a little about your project and we'll get back to
            you.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <span className="contact-detail-label">Email</span>
              <a href="mailto:hello@nexaweb.co.ke">
                hello@nexaweb.co.ke
              </a>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">Location</span>
              <span>Nairobi, Kenya</span>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-label">Response</span>
              <span>Usually within 24–48 hours</span>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="business">Business / Company</label>
            <input
              type="text"
              id="business"
              name="business"
              placeholder="Your business name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="service">What do you need?</label>

            <select id="service" name="service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option value="website">
                Website Design & Development
              </option>
              <option value="ecommerce">E-Commerce Website</option>
              <option value="redesign">Website Redesign</option>
              <option value="maintenance">Website Maintenance</option>
              <option value="digital-design">Digital Design</option>
              <option value="other">Something Else</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Tell us about your project</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Tell us about your business, your goals and what you'd like us to build..."
            ></textarea>
          </div>

          <button type="submit" className="contact-submit">
            Send Enquiry
            <span>↗</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;