import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProblemSolution from "./sections/ProblemSolution";
import Features from "./sections/Features";
import UseCases from "./sections/UseCases";

function App() {
  return (
    <div
      className="min-h-screen dark:bg-gray-900 
    left-1/2 top-[-10%] 
    dark:bg-gradient-to-t
    bg-slate-200
    dark:from-indigo-800/40 dark:via-sky-800/40"
    >
      <NavBar
        logo={<span className="font-semibold">SLING IT</span>}
        links={[
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Docs", href: "#docs" },
          { label: "Blog", href: "#blog" },
        ]}
        cta={{ label: "Get Started", href: "#get-started" }}
      />
      <div className="relative">
        <Hero
          eyebrow="NEW"
          title="Manage your recipes faster while slinging drinks! "
          subtitle="Easy to use and polished application to share and organize recipes"
          primaryCta={{
            label: "Get Started",
            href: "https://slingitdrinks.com/",
          }}
          secondaryCta={{ label: "View Docs", href: "#" }}
          screenshotUrl="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1800&auto=format&fit=crop"
          stats={[
            { label: "Teams", value: "3k+" },
            { label: "Uptime", value: "99.99%" },
          ]}
          logos={[
            {
              name: "Room 389",
              url: "https://dummyimage.com/160x32/000/fff&text=Acme",
            },
            {
              name: "MadOak",
              url: "https://dummyimage.com/160x32/000/fff&text=Piper",
            },
            {
              name: "Globex",
              url: "https://dummyimage.com/160x32/000/fff&text=Globex",
            },
          ]}
        />
        <Features />
        <ProblemSolution />
        <UseCases />
        <Footer />
      </div>
    </div>
  );
}

export default App;
