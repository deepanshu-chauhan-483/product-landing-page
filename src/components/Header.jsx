import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Navbar bg="white" expand="lg" fixed="top" className="shadow-sm" expanded={expanded}>
        <Container>
          {/* Brand Name */}
          <Navbar.Brand as={Link} to="/" className="fw-bold fs-4 text-dark">
            Product
          </Navbar.Brand>

          {/* Navbar Toggle */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />

          {/* Navbar Links */}
          <Navbar.Collapse id="basic-navbar-nav">
            
            <Nav className="me-auto">
            <ScrollLink
                to="about"
                smooth={true}
                duration={700}
                offset={-70}
                className="nav-link text-dark"
                onClick={() => setExpanded(false)}
              >
                About
              </ScrollLink>
              <ScrollLink
                to="features"
                smooth={true}
                duration={700}
                offset={-70}
                className="nav-link text-dark"
                onClick={() => setExpanded(false)}
              >
                Features
              </ScrollLink>
              <ScrollLink
                to="pricing"
                smooth={true}
                duration={700}
                offset={-70}
                className="nav-link text-dark"
                onClick={() => setExpanded(false)}
              >
                Pricing
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={700}
                offset={-70}
                className="nav-link text-dark"
                onClick={() => setExpanded(false)}
              >
                Contact
              </ScrollLink>
              
            </Nav>

            {/* Auth Buttons */}
            <Nav>
              <Nav.Link as={Link} to="/signin">
                <Button variant="outline-dark" className="me-2">
                  Sign In
                </Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                <Button variant="dark">Get Started</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.nav>
  );
};

export default Header;
