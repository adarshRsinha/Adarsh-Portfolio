import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/cursor";
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Fortpolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <NavBar />
        <Hero />
      </section>
      <section id="Skills">
      <Parallax type={"skills"} />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type={"portfolio"} />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
