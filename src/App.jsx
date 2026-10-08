import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import WhatICanDo from "./components/WhatICanDo";
import DevelopmentApproach from "./components/DevelopmentApproach";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <Skills />
        <WhatICanDo />
        <DevelopmentApproach />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;