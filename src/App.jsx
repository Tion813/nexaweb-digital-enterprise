import Header from "./components/header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Process from "./sections/Process";
import WhyUs from "./sections/WhyUs";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Process />
        <WhyUs />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;