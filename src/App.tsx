import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import WorkDesign from "./pages/WorkDesign";
import WorkWebDev from "./pages/WorkWebDev";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section id="home" className="m-0 p-0">
          <Home />
        </section>
        <section id="works" className="m-0 p-0">
          <WorkWebDev />
          <WorkDesign />
        </section>
        <section id="about" className="m-0 p-0">
          <About />
        </section>
        <section id="contact" className="m-0 p-0">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
