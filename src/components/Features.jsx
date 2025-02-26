import { Container, Row, Col, Card } from "react-bootstrap";
import { Lightning, Shield, Robot, Cpu, Globe, Magic } from "react-bootstrap-icons";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Lightning className="fs-1 text-muted" />,
    title: "Lightning Fast",
    description: "Deploy your bots in seconds, not hours",
  },
  {
    icon: <Shield className="fs-1 text-muted" />,
    title: "Secure & Reliable",
    description: "Bank-grade security for your Discord community",
  },
  {
    icon: <Robot className="fs-1 text-muted" />,
    title: "AI-Powered",
    description: "Leverage cutting-edge AI for smarter bots",
  },
  {
    icon: <Cpu className="fs-1 text-muted" />,
    title: "Advanced Automation",
    description: "Automate tasks with powerful workflows",
  },
  {
    icon: <Globe className="fs-1 text-muted" />,
    title: "Global Scaling",
    description: "Scale your bots to millions of users effortlessly",
  },
  {
    icon: <Magic className="fs-1 text-muted" />,
    title: "Easy Integration",
    description: "Connect with your favorite tools seamlessly",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-5 bg-light">
      <Container>
        {/* Animated Title */}
        <motion.h2
          className="text-center display-5 mb-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Powerful Features
        </motion.h2>

        <Row>
          {features.map((feature, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              {/* Animated Feature Cards */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Card className="feature-card h-100 border-0 shadow-sm">
                  <Card.Body className="text-center p-4">
                    <div className="mb-3">{feature.icon}</div>
                    <h3 className="h4 mb-3">{feature.title}</h3>
                    <p className="text-muted mb-0">{feature.description}</p>
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

export default Features;
