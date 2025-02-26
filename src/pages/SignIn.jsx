"use client"

import { useState } from "react"
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import Header from "../components/Header"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Sign in with:", email, password)
  }

  return (
    <>
      <Header />
      <Container className="py-5 mt-5">
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="border-0 shadow">
              <Card.Body className="p-4">
                <h2 className="text-center mb-4 text-dark">Sign In</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-dark">Email address</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-dark">Password</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Check type="checkbox" label="Remember me" className="text-dark" />
                  </Form.Group>

                  <Button variant="dark" type="submit" className="w-100 mb-3">
                    Sign In
                  </Button>

                  <div className="text-center">
                    <Link to="/forgot-password" className="text-dark text-decoration-none">
                      Forgot password?
                    </Link>
                  </div>
                </Form>
              </Card.Body>
            </Card>
            <div className="text-center mt-3 text-dark">
              Don't have an account?{" "}
              <Link to="/register" className="text-dark text-decoration-none">
                Sign up
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SignIn
