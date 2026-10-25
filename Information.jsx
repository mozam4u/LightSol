import { FiSearch } from "react-icons/fi";
import "../App.css";



function Information() {
  const products = [
    "Digital Retail",
    "CRM Platform",
    "Inventory Management",
    "Service Management",
    "Marketing Automation",
    "Customer Experience",
  ];

  return (
    <>
      {/* Background Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      {/* Navbar */}
      <nav className="navbar">
<div className="logo">
  <img
    src="/images/logo.png"
    alt="Light Cells Solutions Logo"
  />
</div>

       <ul className="menu">

  <li className="dropdown">
    Applications

    <ul className="dropdown-menu">
      <li>LIMS</li>
      <li>ELN</li>
      <li>Scientific Data Management</li>
      <li>Quality Management</li>
      <li>Laboratory Workflow</li>
    </ul>
  </li>

  <li className="dropdown">
    Laboratory 

    <ul className="dropdown-menu">
      <li>HPLC Systems</li>
      <li>GC Instruments</li>
      <li>Spectroscopy</li>
      <li>Mass Spectrometry</li>
      <li>Chromatography Solutions</li>
    </ul>
  </li>

  <li className="dropdown">
    WPS

    <ul className="dropdown-menu">
      <li>Workflow Automation</li>
      <li>Process Optimization</li>
      <li>Validation Services</li>
      <li>Compliance Management</li>
    </ul>
  </li>

  <li className="dropdown">
    HPC

    <ul className="dropdown-menu">
      <li>High Performance Computing</li>
      <li>Cloud Infrastructure</li>
      <li>AI & Machine Learning</li>
      <li>Data Analytics</li>
    </ul>
  </li>

  <li className="dropdown">
    About

    <ul className="dropdown-menu">
      <li>Company Overview</li>
      <li>Our Team</li>
      <li>Careers</li>
      <li>Contact Us</li>
    </ul>
  </li>

</ul>

<div className="nav-right">

  <div className="search-box">
    <input
      type="text"
      placeholder="Search..."
    />
  </div>
  

  <button className="demo-btn">
    Request Demo
  </button>

</div>      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <span className="tag">
          Light Cells Solutions Platform
          </span>

          <h1 className="gradient-title">
            AI-Native Platform
            <br />
            For Modern
            <br />
            Automotive Retail
          </h1>

          <p>
            Transform dealership operations,
            customer journeys and revenue growth
            with a unified cloud platform.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              Watch Demo
            </button>
          </div>
        </div>
{/* <div className="search-box">

  <FiSearch className="search-icon" />

  <input
    type="text"
    placeholder="Search..."
  />

</div> */}
        <div className="dashboard-card">
          <div className="hero-image">
            <img
              src="/images/dashboard.png"
              alt="Dashboard Preview"
            />
          </div>

          <h3>AI Dashboard</h3>

          <div className="metric">
            <h2>$12.4M</h2>
            <p>Revenue</p>
          </div>

          <div className="metric">
            <h2>2845</h2>
            <p>Vehicles Sold</p>
          </div>

          <div className="metric">
            <h2>98%</h2>
            <p>Customer Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="counter-section">
        <div className="counter-box">
          <h2>500+</h2>
          <p>Dealerships</p>
        </div>

        <div className="counter-box">
          <h2>15M+</h2>
          <p>Customers</p>
        </div>

        <div className="counter-box">
          <h2>99.9%</h2>
          <p>Platform Uptime</p>
        </div>

        <div className="counter-box">
          <h2>35+</h2>
          <p>Countries</p>
        </div>
      </section>

      {/* Announcement */}
      <section className="announcement">
        <p>
          🚀 New AI Features Released For Dealership
          Operations And Customer Intelligence
        </p>
      </section>

      {/* Features */}
      <section className="features">
        <h2>
          Why Businesses Choose Light Cells Solutions
        </h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>AI Intelligence</h3>
            <p>
              Real-time predictions and revenue insights.
            </p>
          </div>

          <div className="feature-card">
            <h3>Cloud Native</h3>
            <p>
              Fast, scalable and secure infrastructure.
            </p>
          </div>

          <div className="feature-card">
            <h3>Unified Platform</h3>
            <p>
              Manage operations from one solution.
            </p>
          </div>

          <div className="feature-card">
            <h3>Customer Experience</h3>
            <p>
              Create seamless customer journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="brands">
        <h2>
          Trusted By Industry Leaders
        </h2>

        <div className="logo-slider">
          <div>BMW</div>
          <div>AUDI</div>
          <div>TESLA</div>
          <div>HONDA</div>
          <div>FORD</div>
          <div>TOYOTA</div>
        </div>
      </section>

      {/* Products */}
      <section className="products">
        <h2>
          Unified Platform
        </h2>

        <div className="products-grid">
          {products.map((item, index) => (
            <div
              key={index}
              className="product-card"
            >
              <h3>{item}</h3>

              <p>
                AI-powered automotive solution
                for modern dealerships.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Showcase */}
      <section className="product-showcase">
        <div className="showcase-left">
          <span className="showcase-tag">
            PRODUCT PLATFORM
          </span>

          <h2>
            Retail Cloud
            <br />
            Designed For
            <br />
            Modern Dealerships
          </h2>

          <p>
            Manage inventory, sales,
            customer journeys and service
            operations from one unified platform.
          </p>

          <button className="primary-btn">
            Explore Platform
          </button>
        </div>

        <div className="showcase-right">
          <div className="showcase-dashboard">
            <div className="dashboard-header">
              Sales Performance
            </div>

            <div className="dashboard-chart">
              Dashboard Screenshot Here
            </div>

            <div className="dashboard-stats">
              <div>
                <h3>24%</h3>
                <span>Growth</span>
              </div>

              <div>
                <h3>$12M</h3>
                <span>Revenue</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline">
        <h2>Platform Journey</h2>

        <div className="timeline-container">
          <div className="timeline-card">
            <h3>Discover</h3>
            <p>
              Understand customer needs using AI.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Engage</h3>
            <p>
              Connect across every channel.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Convert</h3>
            <p>
              Accelerate sales and operations.
            </p>
          </div>

          <div className="timeline-card">
            <h3>Grow</h3>
            <p>
              Scale your dealership with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="enterprise">
        <div className="enterprise-left">
          <h2>
            One Platform.
            <br />
            Infinite Possibilities.
          </h2>

          <p>
            Connect sales, service,
            inventory and customer
            experiences from one
            AI-native ecosystem.
          </p>
        </div>

        <div className="enterprise-right">
          <div className="glass-card">
            CRM Intelligence
          </div>

          <div className="glass-card">
            Inventory AI
          </div>

          <div className="glass-card">
            Customer Analytics
          </div>

          <div className="glass-card">
            Revenue Forecasting
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="preview">
        <h2>
          Everything Connected
        </h2>

        <p>
          Dealerships, sales, CRM,
          inventory and service
          management unified on
          one platform.
        </p>

        <div className="preview-screen">
          <div className="screen-box">
            CRM
          </div>

          <div className="screen-box">
            Inventory
          </div>

          <div className="screen-box">
            Analytics
          </div>

          <div className="screen-box">
            AI Engine
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial">
        <h2>
          What Customers Say
        </h2>

        <div className="testimonial-card">
          <p>
            “This platform modernized our dealership
            operations and increased efficiency
            across every department.”
          </p>

          <h4>
            Automotive Group CEO
          </h4>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>
          Ready To Transform Your Dealership?
        </h2>

        <button className="primary-btn">
          Schedule A Demo
        </button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-column">
          <h3>Light Cells Solutions</h3>
          <p>
            AI-Native Automotive Retail Platform
          </p>
        </div>

        <div className="footer-column">
          <h4>Products</h4>
          <p>CRM</p>
          <p>Retail</p>
          <p>Inventory</p>
          <p>Analytics</p>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <p>About</p>
          <p>Careers</p>
          <p>News</p>
          <p>Contact</p>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <p>Blogs</p>
          <p>Documentation</p>
          <p>Case Studies</p>
          <p>Support</p>
        </div>
      </footer>
    </>
  );
}

export default Information;
