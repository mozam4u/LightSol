//import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        TEKION
      </div>

      <ul className="menu">
        <li>Platform</li>
        <li>Products</li>
        <li>Solutions</li>
        <li>Company</li>
      </ul>

      <button className="demo-btn">
        Request Demo
      </button>
    </nav>
  );
}

export default Navbar;