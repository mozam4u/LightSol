import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">

        <div className="contact-hero-content">

          <span className="contact-tag">
            LIGHT CELLS SOLUTIONS
          </span>

          <h1 className="contact-title">
            Request For Services
          </h1>

          <p>
            Connect with our experts to discuss your
            Information Technology, Artificial Intelligence,
            Biotechnology, Laboratory Informatics, Cloud
            Solutions, Enterprise Applications and Digital
            Transformation requirements.
          </p>

        </div>

      </section>

      {/* Main Content */}
      <section className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <h2>Let's Connect</h2>

          <p>
            Whether you're looking for AI-powered solutions,
            Biotechnology consulting, Laboratory Informatics,
            Cloud Solutions, Enterprise Applications or
            Automation Services, we're here to help.
          </p>

          <div className="info-card">
            <h3>Email</h3>
            <p>info@lightcellssolutions.com</p>
          </div>

          <div className="info-card">
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-card">
            <h3>Location</h3>
            <p>Greater Noida, India</p>
          </div>

          <div className="info-card">
            <h3>Business Hours</h3>
            <p>Monday - Friday</p>
            <p>09:00 AM - 06:00 PM</p>
          </div>

        </div>

        {/* Right Side */}
        <div className="contact-form-card">

          <h2>Submit Your Request</h2>

          <form>

            <div className="two-column">

              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                />
              </div>

            </div>

            <div className="form-group">
              <label>Business Email</label>
              <input
                type="email"
                placeholder="name@company.com"
              />
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="+91 xxxxxxxxxx"
              />
            </div>

            <div className="form-group">
              <label>Select Service</label>

              <select>
                <option>Choose Service</option>
                <option>Artificial Intelligence</option>
                <option>Biotechnology</option>
                <option>LIMS</option>
                <option>ELN</option>
                <option>SDMS</option>
                <option>Cloud Solutions</option>
                <option>Automation</option>
                <option>Web Application Development</option>
              </select>
            </div>

            <div className="form-group">
              <label>Country</label>

              <select>
                <option>Select Country</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
                <option>Singapore</option>
                <option>Australia</option>
              </select>
            </div>

            <div className="form-group">
              <label>Project Details</label>

              <textarea
                rows="6"
                placeholder="Describe your requirements..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-btn"
            >
              Submit Request
            </button>

          </form>

        </div>

      </section>

      {/* CTA Section */}
      <section className="contact-cta">

        <h2>
          Ready To Start Your Next Project?
        </h2>

        <p>
          Let's discuss how Light Cells Solutions can help
          accelerate your digital transformation journey.
        </p>

        <button className="contact-btn">
          Schedule A Consultation
        </button>

      </section>

    </div>
  );
}

export default ContactUs;