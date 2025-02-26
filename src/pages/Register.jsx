"use client"

import { useState } from "react"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Header from "../components/Header"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Register with:", formData)
  }

  return (
    <>
      <Header />
      <Container className="py-5 mt-5">
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="border-0 shadow">
              <Card.Body className="p-4">
                <h2 className="text-center mb-4 text-dark">Create Account</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-dark">Full Name</Form.Label>
                    <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-dark">Email address</Form.Label>
                    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-dark">Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="text-dark">Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Button variant="dark" type="submit" className="w-100 mb-3">
                    Create Account
                  </Button>
                </Form>
              </Card.Body>
            </Card>
            <div className="text-center mt-3 text-dark">
              Already have an account?{" "}
              <Link to="/signin" className="text-dark text-decoration-none">
                Sign in
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Register
