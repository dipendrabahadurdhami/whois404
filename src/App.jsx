import Sidebar from "./components/Sidebar";
import { useEffect } from "react";
import Banner from "./components/Banner";
import { watchAutoTheme } from "./theme";
import { About, Experience, Projects, Skills, Education, Contact } from "./components/Sections";

export default function App() {
  useEffect(() => watchAutoTheme(), []);

  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-light">
        Skip to content
      </a>
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-0">
        <div className="relative lg:flex lg:justify-between lg:gap-4">
          <Banner />
          <Sidebar />
          <main className="pt-16 lg:w-[50%] lg:pb-16 lg:pt-[178px]">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </main>
        </div>
      </div>
    </>
  );
}
