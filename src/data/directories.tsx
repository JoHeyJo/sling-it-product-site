import { Rocket, Share, Pencil, Search, Plus } from "lucide-react";

import { productSite } from "../links";

export const directories = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: Rocket,
    blurb: "Create, view, manage",
    sections: [
      {
        heading: "Create account",
        body: [
          <>
            Getting started is easy. Sign up{" "}
            <a className="text-stone-600" href={productSite}>
              here
            </a>
            .{" "}
          </>,
          <>
            <span className="font-bold">Required</span>: unique email, first
            name, last name, username, and password.
          </>,
        ],
        instructions: [
          "Create a book",
          "Create your recipes",
          "Manage your inventory",
        ],
      },
      {
        heading: "On your first log in",
        body: [
          "You can immediately start receiving shared 'Recipes' and 'Recipe Books' from friends.",

          "Or create your own book to log your recipes.",
          <>
            <span className="font-bold">NOTE:</span> You do not need to create a
            recipe book to start using this app. Other users can immediately
            start sharing books with you!
          </>,
        ],
        instructions: [
          "Click 'Create a book' to create your first recipe book",
          <>
            Click this icon "<Plus className="inline h-4 w-4 shrink-0" />" to
            create your first recipe.
          </>,
          "Manage your inventory by adding ingredients: value, unit of measurement, name of item",
          "Ingredients and instructions can be quickly selected from the dropdown menu.",
          "This information is shared across recipe books",
        ],
      },
    ],
  },
  {
    id: "create",
    label: "Create",
    icon: Pencil,
    blurb: "Easier than making a cocktail",
    sections: [
      {
        heading: "Create a recipe book",
        body: [
          "Initially, you will be prompted to create your first book by clicking on 'Create Book' - top left column.",
          "For subsequent books you can choose 'Create Book' from the dropdown by selecting the icon on the top right made up of the first two letters of your username.",
          "You can create as many recipe books as you'd like.",
          "If another user shared a book with you. A 'Shared Recipes' book will be automatically created containing all incoming recipes.",
        ],
        instructions: [
          "Click 'Create a book' from top left column or from user icon dropdown top right corner",
          "Book Description is not required",
          "Choose book from dropdown next to 'Recipes for:'",
        ],
      },
      {
        heading: "Create recipes",
        body: [
          "Recipes will be saved to whichever book is shown next to 'Recipes for:'.",
          <>
            <span className="font-bold">
              Recipe names and notes are unique.
            </span>
          </>,
          <>
            <span className="font-bold">
              Ingredients and instructions are shared.
            </span>
          </>,
          "This means that creating an ingredient or instruction allows you to quickly choose it again later when adding an ingredient or recipe!",
          "Ingredients are made of three parts: value, unit of measurement, item name e.g. 1 oz Tequila",
          "You can individually build an ingredient out of these parts giving you unlimited customization to track ingredients.",
          <>
            <span className="font-bold">NOTE:</span>A name is required to save
            an ingredient as a template. If you are brainstorming
            ideas and you only have working pieces. You must give this a name to save it.
            The same applies to individual ingredients. You need an item name to
            save part of an ingredient as a template.
          </>,
          // <><span className="font-bold">NOTE:</span> you cannot save ingredients as a whole.</>,
        ],
        instructions: [
          <>
            Click the "<Plus className="inline h-4 w-4 shrink-0" />" on the top
            right of the left column to create a recipe. Next to "Search"
          </>,
        ],
      },
    ],
  },
  {
    id: "share",
    label: "Share",
    icon: Share,
    blurb: "Small, focused hooks for selection, measurement, and data loading.",
    sections: [
      {
        heading: "useResource",
        body: [
          "Fetches a file from your public folder and returns a loading flag alongside the data, so a view can render a skeleton of the right size before content arrives.",
        ],
        instructions: [
          "Create a book",
          "Create your recipes",
          "Manage your inventory",
        ],
      },
      {
        heading: "useMeasure",
        body: [
          "Returns a ref and the measured box of any element via a ResizeObserver. The brace connector uses it to stay anchored across resizes.",
        ],
      },
    ],
  },
  {
    id: "search",
    label: "Search",
    icon: Search,
    blurb: "Every prop, return value, and event, typed and documented.",
    sections: [
      {
        heading: "DocsShell",
        body: [
          "The top-level frame. Accepts the directory list, an optional footer node, and a theme flag. Children render into the middle panel.",
        ],
        instructions: [
          "Create a book",
          "Create your recipes",
          "Manage your inventory",
        ],
      },
    ],
  },
];
