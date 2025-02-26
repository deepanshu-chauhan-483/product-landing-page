import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import "../styles/Contact.scss"

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      alert("Form submitted successfully!"); // Replace with actual submission logic
    }
    setValidated(true);
  };

  return (
    <section id="contact" className="py-5 contact section-padding">
      <Container>
        <Row className="align-items-center">
          {/* Left Section: Get in Touch Text */}
          <Col md={6} className="contact-info">
            <FaEnvelope className="contact-icon" />
            <h2 className="section-title">Get in Touch</h2>
            <p>
              Have any questions? Feel free to drop us a message, and we’ll get back to you as soon as possible.
            </p>
          </Col>

          {/* Right Section: Contact Form */}
          <Col md={6}>
            <Form noValidate validated={validated} onSubmit={handleSubmit} className="contact-form">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter your name" />
                <Form.Control.Feedback type="invalid">
                  Please provide your name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter your email" />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control required as="textarea" rows={3} placeholder="Your message" />
                <Form.Control.Feedback type="invalid">
                  Please enter your message.
                </Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" className="custom-btn">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
