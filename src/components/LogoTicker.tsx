import { memo } from "react";
import Marquee from "react-fast-marquee";

type Logo = { name: string; url: string };

function LogoTicker({ speed = 30 }: { logos?: Logo[]; speed?: number }) {
  // Duplicate the list to fill in space for endless loop
  // const items = logos;

  const MarqueeContent = memo(() => {
    // Your complex content here
    return <div>...</div>;
  });

  return (
    <div className="relative mx-auto mt-14 max-w-7xl">
      <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">
        Trusted by bartenders at
      </p>
      <div className="group relative mt-6 overflow-hidden">
        {/* Edge gradients */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-gray-900"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-gray-900"
        />
        {/* Track */}
        <Marquee pauseOnHover gradient={false} speed={speed}>
          <MarqueeContent />
          {/* "hello" */}
          {/* <div className="flex h-14 min-w-40 mx-6 items-center justify-center rounded-xl border border-dashed border-gray-200 px-4 dark:border-white/10">
            <img
              key={''}
              src={''}
              alt={"Room 389"}
              className="h-8 w-auto opacity-70"
            />
          </div> */}
        </Marquee>
      </div>
    </div>
  );
}
export default LogoTicker;
[
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
];
