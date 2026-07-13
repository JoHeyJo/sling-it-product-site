import { Rocket, Share, Pencil, Search, Plus } from "lucide-react";

import { productSite } from "../links";

export const directories = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: Rocket,
    blurb: "Create book, create recipes, view, manage",
    sections: [
      {
        heading: "Create account",
        body: (
          <>
            Getting started is easy. Sign up{" "}
            <a className="text-stone-600" href={productSite}>
              here
            </a>
            . <span className="font-bold">Required</span>: unique email, first
            name, last name, username, and password.
          </>
        ),
        instructions: [
          "Create a book",
          "Create your recipes",
          "Manage your inventory",
        ],
      },
      {
        heading: "On your first log in",
        body: (
          <>
            You can immediately start receiving shared 'Recipes' and 'Recipe
            Books' from friends.
            <br />
            Or create your own book to log your recipes
            <br />
            <span className="font-bold">NOTE:</span> you do not need to create a
            recipe book to start using this app.
          </>
        ),
        instructions: [
          "Create a book",
          "Create your recipes",
          "Manage your inventory",
        ],
      },
    ],
  },
  // {
  //   id: "create",
  //   label: "Create Books/Recipes",
  //   icon: Pencil,
  //   blurb:
  //     "Composable building blocks with sensible defaults and full theming.",
  //   sections: [
  //     {
  //       heading: "Sidebar",
  //       body: "A persistent navigation column. Pass an array of entries; the active entry is derived from the route so you never track selection by hand.",
  //       instructions: "<Sidebar entries={dirs} activeId={dirId} />",
  //     },
  //     {
  //       heading: "Panel",
  //       body: "The content surface on the right. It reserves a stable minimum height while resources load, which keeps the footer pinned instead of flashing upward.",
  //     },
  //   ],
  // },
  // {
  //   id: "share",
  //   label: "Share",
  //   icon: Share,
  //   blurb: "Small, focused hooks for selection, measurement, and data loading.",
  //   sections: [
  //     {
  //       heading: "useResource",
  //       body: "Fetches a file from your public folder and returns a loading flag alongside the data, so a view can render a skeleton of the right size before content arrives.",
  //       instructions: "const { data, loading } = useResource('/data/api.json')",
  //     },
  //     {
  //       heading: "useMeasure",
  //       body: "Returns a ref and the measured box of any element via a ResizeObserver. The brace connector uses it to stay anchored across resizes.",
  //     },
  //   ],
  // },
  // {
  //   id: "search",
  //   label: "Search",
  //   icon: Search,
  //   blurb: "Every prop, return value, and event, typed and documented.",
  //   sections: [
  //     {
  //       heading: "DocsShell",
  //       body: "The top-level frame. Accepts the directory list, an optional footer node, and a theme flag. Children render into the middle panel.",
  //       instructions:
  //         "type DocsShellProps = {\n  entries: DirEntry[]\n  footer?: ReactNode\n  theme?: 'light' | 'dark'\n}",
  //     },
  //   ],
  // },
];
