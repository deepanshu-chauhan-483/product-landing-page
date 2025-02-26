import Header from "../components/Header"
import FloatingPaths from "../components/FloatingPaths"
import Features from "../components/Features"
import Pricing from "../components/Pricing"
import Footer from "../components/Footer"
import About from "../components/About"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <>
      <Header />
      <FloatingPaths />
      <About/>
      <Features />
      <Pricing />
      <Contact/>
      <Footer />
    </>
  )
}

export default Home

