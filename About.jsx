import "./About.css";
function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}

      <section className="about-hero">

        <div className="about-hero-content">

          <span className="about-tag">
            LIGHT CELLS SOLUTIONS
          </span>

          <h1>
            Shaping The Future Of
            Technology & Biotechnology
          </h1>

          <p>
            We help enterprises, laboratories and research
            organizations accelerate innovation through
            Artificial Intelligence, Laboratory Informatics,
            Cloud Solutions and Scientific Automation.
          </p>

          <button className="about-btn">
            Explore Our Services
          </button>

        </div>

      </section>

      {/* COMPANY OVERVIEW */}

      <section className="about-overview">

        <div className="overview-left">

          <span className="section-label">
            WHO WE ARE
          </span>

          <h2>
            Delivering Innovation Through
            Technology And Science
          </h2>

          <p>
            Light Cells Solutions is a technology-driven
            company specializing in Information Technology
            and Biotechnology solutions. We combine digital
            innovation, scientific expertise and intelligent
            automation to help organizations grow faster.
          </p>

          <p>
            Our solutions cover Artificial Intelligence,
            Enterprise Applications, Laboratory Informatics,
            Cloud Platforms, Data Analytics and Scientific
            Research Technologies.
          </p>

        </div>

        <div className="overview-right">

          <div className="overview-card">
            Innovation
            <br />
            Technology
            <br />
            Research
          </div>

        </div>

      </section>

      {/* KEY STATS */}

      <section className="stats-section">

        <div className="stat-card">
          <h2>100+</h2>
          <p>Projects Delivered</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Clients Supported</p>
        </div>

        <div className="stat-card">
          <h2>10+</h2>
          <p>Industry Domains</p>
        </div>

        <div className="stat-card">
          <h2>24/7</h2>
          <p>Support Available</p>
        </div>

      </section>

      {/* VISION & MISSION */}

      <section className="vision-mission">

        <div className="vm-card">

          <h3>Our Vision</h3>

          <p>
            To become a global technology and biotechnology
            innovation partner empowering organizations
            worldwide.
          </p>

        </div>

        <div className="vm-card">

          <h3>Our Mission</h3>

          <p>
            Deliver scalable, intelligent and future-ready
            solutions that create measurable business value.
          </p>

        </div>

      </section>

      {/* CAPABILITIES */}

      <section className="capabilities-section">

        <h2>Our Core Capabilities</h2>

        <div className="capabilities-grid">

          <div className="capability-card">
            <h3>Artificial Intelligence</h3>
            <p>AI-powered enterprise solutions.</p>
          </div>

          <div className="capability-card">
            <h3>Cloud Platforms</h3>
            <p>Scalable cloud transformation services.</p>
          </div>

          <div className="capability-card">
            <h3>Laboratory Informatics</h3>
            <p>LIMS, ELN & SDMS expertise.</p>
          </div>

          <div className="capability-card">
            <h3>Biotechnology</h3>
            <p>Scientific and research solutions.</p>
          </div>

          <div className="capability-card">
            <h3>Automation</h3>
            <p>Smart workflow automation.</p>
          </div>

          <div className="capability-card">
            <h3>Data Analytics</h3>
            <p>Actionable insights from data.</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="about-cta">

        <h2>
          Let's Build The Future Together
        </h2>

        <p>
          Partner with Light Cells Solutions to accelerate
          your digital transformation and scientific journey.
        </p>

        <button className="about-btn">
          Contact Us
        </button>

      </section>

    </div>
  );
}

export default About;