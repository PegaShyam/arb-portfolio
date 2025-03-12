import About from "./components/About";
import BlurBackground from "./components/BlurBackground";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Photography from "./components/Photography";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar/>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Photography />
        <Contacts />
      </main>

    </>
  )
}