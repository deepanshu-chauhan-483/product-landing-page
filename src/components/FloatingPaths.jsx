import { motion } from "framer-motion";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function FloatingPaths({ position }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="position-absolute top-0 start-0 w-100 h-100">
      <svg className="w-100 h-100 text-dark" viewBox="0 0 696 316" fill="none">
        <title>Product Name</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function BackgroundPaths({ title = "Welcome to Product Name" }) {
  const words = title.split(" ");

  return (
    <div className="position-relative min-vh-100 d-flex align-items-center justify-content-center bg-light text-dark overflow-hidden">
      {/* Floating Paths */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Content */}
      <div className="position-relative text-center px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
          <h1 className="display-3 fw-bold mb-4">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="me-2">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="d-inline-block text-gradient"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            className="text-secondary fs-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Building the future of Discord bots, one click at a time.
          </motion.p>


          
          {/* Button */}
          <div className="d-inline-block position-relative rounded-pill shadow-lg overflow-hidden">

          
          <Button
  className="btn btn-dark px-5 py-3 fw-semibold position-relative d-flex align-items-center gap-2"
  style={{ fontSize: "1.2rem", cursor: "pointer" }}
  onClick={() => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  }}
>
  <span>Discover Excellence</span>
  <motion.span
    className="ms-2"
    animate={{ x: [0, 5, 0] }}
    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
  >
    →
  </motion.span>
</Button>

          </div>
        </motion.div>
      </div>
      
    </div>
    
  );
}
