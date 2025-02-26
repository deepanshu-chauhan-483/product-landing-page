"use client"

import { useState } from "react"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Facebook, Twitter, Github, Linkedin, Discord } from "react-bootstrap-icons"

const Footer = () => {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      setError("Please enter your email")
      return
    }
    // Simulate API call
    setSubscribed(true)
    setError("")
    setEmail("")
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <footer className="py-5 bg-light border-top">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <h4 className="h3 mb-4 text-primary text-dark">Product</h4>
            <p className="mb-4 text-secondary">
              Building the future of Discord bots, one click at a time. Join thousands of communities using Product to
              enhance their Discord experience.
            </p>
            <div className="d-flex gap-3 mb-4">
              <a href="https://facebook.com" className="text-secondary hover-primary fs-5" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="https://twitter.com" className="text-secondary hover-primary fs-5" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="https://github.com" className="text-secondary hover-primary fs-5" aria-label="GitHub">
                <Github />
              </a>
              <a href="https://linkedin.com" className="text-secondary hover-primary fs-5" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="https://discord.com" className="text-secondary hover-primary fs-5" aria-label="Discord">
                <Discord />
              </a>
            </div>
          </Col>
          <Col lg={2} md={6}>
            <h5 className="mb-3">Product</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#features" className="text-secondary text-decoration-none hover-primary">
                  Features
                </a>
              </li>
              <li className="mb-2">
                <a href="#pricing" className="text-secondary text-decoration-none hover-primary">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <Link to="/docs" className="text-secondary text-decoration-none hover-primary">
                  Documentation
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/templates" className="text-secondary text-decoration-none hover-primary">
                  Templates
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/integrations" className="text-secondary text-decoration-none hover-primary">
                  Integrations
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={6}>
            <h5 className="mb-3">Company</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/about" className="text-secondary text-decoration-none hover-primary">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="text-secondary text-decoration-none hover-primary">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/careers" className="text-secondary text-decoration-none hover-primary">
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/press" className="text-secondary text-decoration-none hover-primary">
                  Press Kit
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-secondary text-decoration-none hover-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={6}>
            <h5 className="mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/community" className="text-secondary text-decoration-none hover-primary">
                  Community
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/support" className="text-secondary text-decoration-none hover-primary">
                  Support
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/status" className="text-secondary text-decoration-none hover-primary">
                  Status
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/tutorials" className="text-secondary text-decoration-none hover-primary">
                  Tutorials
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/changelog" className="text-secondary text-decoration-none hover-primary">
                  Changelog
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={2} md={6}>
            <h5 className="mb-3">Legal</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/privacy" className="text-secondary text-decoration-none hover-primary">
                  Privacy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="text-secondary text-decoration-none hover-primary">
                  Terms
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/security" className="text-secondary text-decoration-none hover-primary">
                  Security
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/cookies" className="text-secondary text-decoration-none hover-primary">
                  Cookies
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/licenses" className="text-secondary text-decoration-none hover-primary">
                  Licenses
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        <div className="newsletter-section border rounded-3 p-4 bg-white mt-5 mb-4">
          <Row className="align-items-center">
            <Col lg={6}>
              <h5 className="mb-3 mb-lg-0">Subscribe to our newsletter</h5>
            </Col>
            <Col lg={6}>
              <Form onSubmit={handleSubmit} className="d-flex gap-2">
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow-1"
                  isInvalid={!!error}
                />
                <Button type="submit" variant="primary" className="bg-black">
                  Subscribe
                </Button>
              </Form>
              {error && <Form.Text className="text-danger">{error}</Form.Text>}
              {subscribed && (
                <Alert variant="success" className="mt-2 mb-0 py-2">
                  Thanks for subscribing!
                </Alert>
              )}
            </Col>
          </Row>
        </div>

        <div className="pt-4 border-top">
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              <span className="text-secondary">© {new Date().getFullYear()} Product. All rights reserved.</span>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <div className="d-flex gap-3 justify-content-center justify-content-md-end">
                <Link to="/terms" className="text-secondary text-decoration-none hover-primary">
                  Terms
                </Link>
                <Link to="/privacy" className="text-secondary text-decoration-none hover-primary">
                  Privacy
                </Link>
                <Link to="/cookies" className="text-secondary text-decoration-none hover-primary">
                  Cookies
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

