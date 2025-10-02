import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProblemSolution from "./sections/ProblemSolution";
import Features from "./sections/Features";

function App() {
  return (
    <div className="min-h-screen dark:bg-gray-900">
      <NavBar />
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
            url: "https://dum myimage.com/160x32/000/fff&text=Piper",
          },
          {
            name: "Globex",
            url: "https://dummyimage.com/160x32/000/fff&text=Globex",
          },
        ]}
      />
      <ProblemSolution />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
