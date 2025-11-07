import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";

function App() {
  return (
    <div
      className="min-h-screen dark:bg-gray-900 a
    left-1/2 top-[-10%] 
    dark:bg-gradient-to-t
    bg-slate-200
    dark:from-indigo-800/40 dark:via-sky-800/40"
    >
      <NavBar
        logo={<a className="font-semibold" href="/">SLING IT</a>}
        links={[
          { label: "Features", href: "#features" },
          { label: "Docs", href: "docs" },
          { label: "Blog", href: "blog" },
        ]}
        cta={{ label: "Get Started", href: "#get-started" }}
      />
      <section className="Product-Sections">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="blog" element={<Blog/>} />
        </Routes>
        <Footer />
      </section>
    </div>
  );
}

export default App;
