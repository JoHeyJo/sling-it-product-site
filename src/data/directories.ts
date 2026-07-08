import {
  Rocket,
  Boxes,
  Anchor,
  Terminal,
  Palette,
  Rocket as Deploy,
} from "lucide-react";

export const directories = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: Rocket,
    blurb: "Install the library and render your first documented view.",
    sections: [
      {
        heading: "Install",
        body: "Add the package with your workspace's package manager. It ships as ESM with types included, no extra @types package required.",
        code: "npm install @acme/docs\n# or\npnpm add @acme/docs",
      },
      {
        heading: "Mount the shell",
        body: "Wrap your routes in the layout shell once. The sidebar and footer stay mounted while only the middle panel swaps, so switching directories never remounts the frame.",
        code: '<DocsShell>\n  <Route path=":dir" element={<Directory />} />\n</DocsShell>',
      },
    ],
  },
  {
    id: "components",
    label: "Components",
    icon: Boxes,
    blurb:
      "Composable building blocks with sensible defaults and full theming.",
    sections: [
      {
        heading: "Sidebar",
        body: "A persistent navigation column. Pass an array of entries; the active entry is derived from the route so you never track selection by hand.",
        code: "<Sidebar entries={dirs} activeId={dirId} />",
      },
      {
        heading: "Panel",
        body: "The content surface on the right. It reserves a stable minimum height while resources load, which keeps the footer pinned instead of flashing upward.",
      },
    ],
  },
  {
    id: "hooks",
    label: "Hooks",
    icon: Anchor,
    blurb: "Small, focused hooks for selection, measurement, and data loading.",
    sections: [
      {
        heading: "useResource",
        body: "Fetches a file from your public folder and returns a loading flag alongside the data, so a view can render a skeleton of the right size before content arrives.",
        code: "const { data, loading } = useResource('/data/api.json')",
      },
      {
        heading: "useMeasure",
        body: "Returns a ref and the measured box of any element via a ResizeObserver. The brace connector uses it to stay anchored across resizes.",
      },
    ],
  },
  {
    id: "api",
    label: "API Reference",
    icon: Terminal,
    blurb: "Every prop, return value, and event, typed and documented.",
    sections: [
      {
        heading: "DocsShell",
        body: "The top-level frame. Accepts the directory list, an optional footer node, and a theme flag. Children render into the middle panel.",
        code: "type DocsShellProps = {\n  entries: DirEntry[]\n  footer?: ReactNode\n  theme?: 'light' | 'dark'\n}",
      },
    ],
  },
  {
    id: "theming",
    label: "Theming",
    icon: Palette,
    blurb: "One token layer drives both light and dark surfaces.",
    sections: [
      {
        heading: "Dark mode",
        body: "Toggle a single class on the root. Every surface reads from the same paired tokens, so light and dark stay in sync without duplicated markup.",
        code: "<div className={dark ? 'dark' : ''}>\n  {/* dark: variants resolve here */}\n</div>",
      },
    ],
  },
  {
    id: "deployment",
    label: "Deployment",
    icon: Deploy,
    blurb: "Ship a static build to any host in a single step.",
    sections: [
      {
        heading: "Build",
        body: "Produce an optimized static bundle. Assets from the public folder are copied verbatim, so referenced resources resolve the same in production.",
        code: "npm run build",
      },
    ],
  },
];
