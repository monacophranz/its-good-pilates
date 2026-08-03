import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Method from "./components/Method";
import Navigation from "./components/Navigation";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Method />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
