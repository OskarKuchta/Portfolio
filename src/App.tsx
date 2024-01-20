import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import "./App.css";

const App = () => {
  return (
    <main className="bg-[#0a192f]">
      <Navbar />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
};

export default App;
