import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">

      <motion.div
        initial={{ opacity: 0,y:50 }}
        animate={{ opacity:1,y:0 }}
        transition={{ duration:1 }}
      >
        <h1 className="gradient-title">
  AI-Native Platform
  For Modern
  Automotive Retail
</h1>

        <p>
          The future of automotive retail is
          intelligent, connected and digital.
        </p>

        <div className="hero-buttons">
          <button className="primary">
            Get Started
          </button>

          <button className="secondary">
            Watch Demo
          </button>
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;