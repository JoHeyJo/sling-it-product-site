import { useRef } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./pages/Blog";
import Documentation from "./sections/Documentation";
import { productSite } from "./links";

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
        logo={"SLING IT"}
        links={[
          { label: "Features"},
          { label: "Docs", href: "/docs/?section=getting-started" },
          { label: "Blog", href: "/blog" },
        ]}
        cta={{
          label: "Get Started",
          href: productSite,
        }}
      />
      <section className="Product-Sections">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="docs" element={<Documentation />} />
        </Routes>
        <Footer />
      </section>
    </div>
  );
}

export default App;
