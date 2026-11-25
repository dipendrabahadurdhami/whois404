import Sidebar from "./components/Sidebar";
import { About, Experience, Projects, Skills, Education, Footer } from "./components/Sections";

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main className="pt-16 lg:w-[52%] lg:py-16">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
