import Sidebar from "./components/Sidebar";
import { profile } from "./data";
import { About, Experience, Projects, Skills, Education, Footer } from "./components/Sections";

// ?banner=code previews the code-drawn banner; the default is the generated image.
const useCode = new URLSearchParams(window.location.search).get("banner") === "code";

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-light">
        Skip to content
      </a>
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:px-24 lg:py-0">
        <div className="relative lg:flex lg:justify-between lg:gap-4">
          {[
            [useCode ? profile.bannerCodeDark : profile.banner, "hidden dark:block bg-black"],
            [profile.bannerLight, "block dark:hidden bg-bg"],
          ].map(([src, mode]) => (
            <img
              key={mode}
              src={src}
              alt=""
              width="1632"
              height="240"
              className={`${mode} mb-8 h-20 w-full rounded-lg object-cover [object-position:65%_center] lg:absolute lg:right-0 lg:top-16 lg:mb-0 lg:w-[50%]`}
            />
          ))}
          <Sidebar />
          <main className="pt-16 lg:w-[50%] lg:pb-16 lg:pt-[178px]">
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
