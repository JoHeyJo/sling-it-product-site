import CardGrid from "../sections/CardGrid";
import Features from "../sections/Features";
import UseCases from "../sections/UseCases";
import Hero from "./Hero";
import { information } from "../data/content";
import { productSite } from "../links";

function Home() {
  return (
    <>
      <Hero
        eyebrow="NEW"
        title="Manage recipes, Sling drinks!"
        subtitle="Create, manage, and share your recipes."
        primaryCta={{
          label: "Get Started",
          href: productSite,
        }}
        videoUrl="/test.mp4"
        secondaryCta={{ label: "View Docs", href: "/docs/?section=getting-started" }}
        screenshotUrl="/poster.jpg"
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
            name: "Sable",
            url: "https://dummyimage.com/160x32/000/fff&text=Globex",
          },
        ]}
      />
      <Features  />
      {information.map((data, index) => (
        <CardGrid
          key={index}
          id={index}
          leftCard={data.leftCard}
          leftInfo={data.leftInfo}
          leftLink={data.leftLink}
          rightCard={data.rightCard}
          rightInfo={data.rightInfo}
          rightLink={data.rightLink}
        />
      ))}
      <UseCases />
    </>
  );
}

export default Home;


