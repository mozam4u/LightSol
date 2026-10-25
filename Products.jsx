import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="bio-page">

      {/* NAVBAR */}
      <nav className="bio-navbar">

        <div className="logo">
          <h2>Light Cells Solutions</h2>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/biotechnology">Home</Link>
          </li>

          <li>
            <Link to="/bio-about">About</Link>
          </li>

          <li>
            <Link to="/bio-products">Products</Link>
          </li>

          <li>
            <Link to="/bio-services">Services</Link>
          </li>

          <li>
            <Link to="/contact-us">Contact</Link>
          </li>
        </ul>

        <Link to="/contact-us">
          <button className="nav-btn">
            Request Demo
          </button>
        </Link>

      </nav>

      {/* HERO */}

      <section className="hero">

        <div className="hero-overlay">

          <span className="hero-tag">
            BIOTECHNOLOGY SOLUTIONS
          </span>

          <h1>
            Advancing Science Through Innovation
          </h1>

          <p>
            Laboratory Informatics, Research
            Automation, Scientific Data Management
            and Biotechnology Solutions.
          </p>

          <div className="hero-buttons">

            <Link to="/bio-products">
              <button className="primary-btn">
                Explore Products
              </button>
            </Link>

            <Link to="/bio-services">
              <button className="secondary-btn">
                Explore Services
              </button>
            </Link>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="about-section">

        <div className="section-header">

          <h2>About Our Biotechnology Division</h2>

          <p>
            Light Cells Solutions provides
            cutting-edge biotechnology and
            laboratory informatics solutions
            for pharmaceutical companies,
            healthcare organizations and
            research laboratories.
          </p>

          <Link to="/bio-about">
            <button className="section-btn">
              Read More
            </button>
          </Link>

        </div>

      </section>

      {/* PRODUCTS */}

      <section className="products-section">

        <h2>Our Products</h2>

        <div className="products-grid">

          <div className="product-card">
            <img
              src="/images/lims.jpg"
              alt="LIMS"
            />

            <h3>LIMS</h3>

            <p>
              Laboratory Information
              Management Systems.
            </p>

            <Link to="/bio-products">
              <button className="read-more-btn">
                View Products
              </button>
            </Link>
          </div>

          <div className="product-card">
            <img
              src="/images/eln.jpg"
              alt="ELN"
            />

            <h3>ELN</h3>

            <p>
              Electronic Laboratory Notebook
              solutions.
            </p>

            <Link to="/bio-products">
              <button className="read-more-btn">
                View Products
              </button>
            </Link>
          </div>

          <div className="product-card">
            <img
              src="/images/sdms.jpg"
              alt="SDMS"
            />

            <h3>SDMS</h3>

            <p>
              Scientific Data Management
              Systems.
            </p>

            <Link to="/bio-products">
              <button className="read-more-btn">
                View Products
              </button>
            </Link>
          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="services-section">

        <h2>Our Services</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>Implementation</h3>

            <p>
              LIMS, ELN and SDMS deployment.
            </p>

            <Link to="/bio-services">
              <button className="read-more-btn">
                Learn More
              </button>
            </Link>
          </div>

          <div className="service-card">
            <h3>Validation</h3>

            <p>
              Compliance and validation
              services.
            </p>

            <Link to="/bio-services">
              <button className="read-more-btn">
                Learn More
              </button>
            </Link>
          </div>

          <div className="service-card">
            <h3>Consulting</h3>

            <p>
              Biotechnology consulting and
              advisory services.
            </p>

            <Link to="/bio-services">
              <button className="read-more-btn">
                Learn More
              </button>
            </Link>
          </div>

          <div className="service-card">
            <h3>Automation</h3>

            <p>
              Laboratory automation and
              workflow optimization.
            </p>

            <Link to="/bio-services">
              <button className="read-more-btn">
                Learn More
              </button>
            </Link>
          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="stats-section">

        <div className="stat-card">
          <h2>100+</h2>
          <p>Laboratories Supported</p>
        </div>

        <div className="stat-card">
          <h2>50+</h2>
          <p>Projects Delivered</p>
        </div>

        <div className="stat-card">
          <h2>15+</h2>
          <p>Industry Experts</p>
        </div>

      </section>

      {/* CONTACT */}

      <section className="cta-section">

        <h2>
          Ready To Transform Your Laboratory?
        </h2>

        <p>
          Let's discuss your biotechnology and
          laboratory informatics requirements.
        </p>

        <Link to="/contact-us">
          <button className="contact-btn">
            Contact Us
          </button>
        </Link>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-container">

          <div>
            <h3>Light Cells Solutions</h3>

            <p>
              Biotechnology & Laboratory
              Informatics Solutions.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>

            <p>
              <Link to="/bio-about">About</Link>
            </p>

            <p>
              <Link to="/bio-products">Products</Link>
            </p>

            <p>
              <Link to="/bio-services">Services</Link>
            </p>
          </div>

          <div>
            <h4>Contact</h4>

            <p>info@lightcellssolutions.com</p>
            <p>+91 98765 43210</p>
          </div>

        </div>

        <div className="copyright">
          © 2026 Light Cells Solutions
        </div>

      </footer>

    </div>
  );
}

export default Products;