import Hero from "./components/Hero";
import ThemeToggle from "./components/ToggleTheme";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ThemeToggle />
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
    </div>
  );
}

export default App;
