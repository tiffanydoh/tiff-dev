import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Highlights from "./components/Highlights";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      <main className="max-w-3xl mx-auto px-8 py-16">
        <Highlights />
        <Experience />
        <Skills />
        <Projects />
        <Education />
      </main>
    </>
  );
}
