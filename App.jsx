import "./App.css";
import { FiSearch } from "react-icons/fi";
import Particles from "react-tsparticles";
import { Link, Routes, Route } from "react-router-dom";
import Biotechnology from "./pages/Biotechnology";
import Information from "./pages/Information";
import About from "./pages/About";
import ContactUs from "./pages/Contactus";
import Products from "./pages/Products";
import Services from "./pages/Services";

function Home() {
  return (
    <>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: true,
            zIndex: -10,
          },
          background: {
            color: "transparent",
          },
          particles: {
            number: {
              value: 70,
            },
            color: {
              value: ["#60a5fa", "#7c3aed"],
            },
            links: {
              enable: true,
              color: "#60a5fa",
              distance: 150,
              opacity: 0.3,
            },
            move: {
              enable: true,
              speed: 1,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: {
                min: 1,
                max: 4,
              },
            },
          },
        }}
      />

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

        <div className="nav-right">

<Link to="/about">
 <span className="aboutColor">About</span>
</Link>

<Link to="/contact-us" className="nav-link">
    <span className="aboutColor">Contact Us</span>
  </Link>

          <div className="dropdown about-nav">
            <span>Section</span>
            
            

            <ul className="dropdown-menu">
              <li>Company Overview</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="search-box">
            <FiSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search..."
            />
          </div>

          <button className="demo-btn">
            Request Demo
          </button>
        </div>
      </nav>

      {/* Video Section */}
      <section className="video-section">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source
            src="/video/video.mp4"
            type="video/mp4"
          />
        </video>

        <div className="video-overlay">
          <h2>Light Cells Solutions</h2>

          <p>
            Bridging Information Technology and
            Biotechnology through innovation,
            automation and intelligent digital
            solutions.
          </p>
        </div>
      </section>

      {/* Business Section */}
      <section className="business-section">
        <div className="business-card">
          <h2>IT Technology Solutions</h2>

          <p>
            Delivering innovative digital solutions
            including Web Applications, Mobile
            Applications, Artificial Intelligence,
            Cloud Platforms and Enterprise Software
            Development.
          </p>
           <Link to="/Information">
            <button className="primary-btn">
              Explore Information Technology
            </button>
          </Link>

          
        </div>

        <div className="business-card">
          <h2>Biotechnology Solutions</h2>

          <p>
            Providing Laboratory Informatics,
            LIMS, ELN, Scientific Data Management,
            Laboratory Automation and Research
            Analytics Solutions with Protein
            Biology expertise.
          </p>

          <Link to="/biotechnology">
            <button className="primary-btn">
              Explore Bio-Technology
            </button>
          </Link>
        </div>
      </section>

      {/* Services Section */}

<section className="business-section">

  <div className="business-card">

    <h2>Our Services</h2>

    <p>
      We provide end-to-end services across
      Information Technology, Artificial
      Intelligence and Biotechnology domains,
      helping organizations accelerate growth,
      innovation and digital transformation.
    </p>

    <button className="primary-btn">
      Explore Services
    </button>

  </div>

  <div className="business-card">

    <h2>Consulting & Support</h2>

    <p>
      Our experts deliver consulting, implementation,
      validation, migration, training and ongoing
      support services for enterprise and laboratory
      environments.
    </p>

    <button className="primary-btn">
      Learn More
    </button>

  </div>

</section>

{/* Services Section */}

<section className="business-section">

  <div className="business-card">

    <h2>Our Services</h2>

    <p>
      Light Cells Solutions offers comprehensive
      Information Technology, Artificial Intelligence,
      Laboratory Informatics and Biotechnology
      services to support enterprise innovation,
      operational excellence and scientific research.
    </p>

    <button className="primary-btn">
      Explore Services
    </button>

  </div>

</section>

      

      {/* About Company */}
      <section className="about-company">
        <h2>About Light Cells Solutions</h2>

        <p>
          Light Cells Solutions is a technology-driven
          company specializing in Information
          Technology and Biotechnology solutions for
          enterprises, laboratories and research
          organizations.
        </p>

        <p>
          We combine innovation, automation and
          scientific expertise to help organizations
          accelerate digital transformation and
          laboratory excellence.
        </p>
      </section>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/biotechnology"
        element={<Biotechnology />}
      />

      <Route
        path="/Information"
        element={<Information />}
      />

<Route
  path="/about"
  element={<About />}
/>

<Route
  path="/contact-us"
  element={<ContactUs />}
/>

    <Route
        path="/Products"
        element={<Products />}
      />

      <Route
        path="/products"
        element={<Products />}
      />

      <Route
        path="/services"
        element={<Services />}
      />
    </Routes>
  );
}

export default App;