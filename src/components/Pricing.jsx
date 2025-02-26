import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { CheckCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "0",
    features: [
      { text: "1 bot", available: true },
      { text: "Up to 100 users", available: true },
      { text: "Basic commands", available: true },
      { text: "Community support", available: true },
      { text: "Custom branding", available: false },
      { text: "Analytics dashboard", available: false },
    ],
  },
  {
    name: "Pro",
    price: "29",
    features: [
      { text: "Unlimited bots", available: true },
      { text: "Unlimited users", available: true },
      { text: "Advanced commands", available: true },
      { text: "Priority support", available: true },
      { text: "Custom branding", available: true },
      { text: "Analytics dashboard", available: true },
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-5 bg-light">
      <Container>
        {/* Title Animation */}
        <motion.h2
          className="text-center display-5 mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Simple, Transparent Pricing
        </motion.h2>

        <Row className="justify-content-center">
          {plans.map((plan, index) => (
            <Col key={index} md={6} lg={5} className="mb-4">
              {/* Card Animation */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="pricing-card h-100 border-1 shadow-sm d-flex flex-column">
                  <Card.Body className="p-5 d-flex flex-column">
                    <h3 className="h2 mb-3 text-center">{plan.name}</h3>
                    <div className="display-4 mb-4 text-center">
                      ${plan.price}
                      <span className="fs-6 text-muted">/month</span>
                    </div>
                    <ul className="list-unstyled flex-grow-1 mb-4">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className={`mb-3 d-flex align-items-center ${
                            !feature.available ? "text-muted text-decoration-line-through" : ""
                          }`}
                        >
                          <CheckCircle
                            className={`me-2 ${
                              feature.available ? "text-success" : "text-secondary"
                            }`}
                          />
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="dark"
                      size="lg"
                      className="w-100"
                      style={{
                        backgroundColor: index === 0 ? "white" : "black",
                        color: index === 0 ? "black" : "white",
                        border: "2px solid black",
                        transition: "all 0.3s ease-in-out",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = index === 0 ? "black" : "white";
                        e.target.style.color = index === 0 ? "white" : "black";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = index === 0 ? "white" : "black";
                        e.target.style.color = index === 0 ? "black" : "white";
                      }}
                    >
                      {index === 0 ? "Start Free" : "Upgrade to Pro"}
                    </Button>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Pricing;
