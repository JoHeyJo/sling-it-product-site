import { Rocket, Share, Pencil, Search, Plus, Minus, Eye, ArrowBigRight, ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
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
            an ingredient as a template. If you are brainstorming ideas and you
            only have working pieces. You must give this a name to save it. The
            same applies to individual ingredients. You need an item name to
            save part of an ingredient as a template.
          </>,
          // <><span className="font-bold">NOTE:</span> you cannot save ingredients as a whole.</>,
        ],
        instructions: [
          <>
            Click the "<Plus className="inline h-4 w-4 shrink-0" />" on the top
            right of the left column to create a recipe. Next to "Search"
          </>,
          "Create ingredient: Amount(Optional), Unit(Optional), Name(Required) e.g 1 oz Jameson",
          "Choose from available options in dropdown or type one in and save it",
          <>
            Click the "<Plus className="inline h-4 w-4 shrink-0" />" for
            additional ingredient
          </>,
          <>
            Or click the "<Minus className="inline h-4 w-4 shrink-0" />" to
            remove ingredient
          </>,
          "Create instruction: Choose from available options in dropdown or type one in and save it",
          "Filling all the available instruction slots automatically creates a new one.",
          "Delete instruction to remove input slot. Last input slot will remain empty instead of being removed",
        ],
      },
    ],
  },
  {
    id: "view",
    label: "View",
    icon: Eye,
    blurb: "Reads like a book",
    sections: [
      {
        heading: "Created Recipes",
        body: [
          "All your recipes are organized by the book you created it in",
          <>
            Once selected you can edit them or delete them more info{" "}
            <ArrowRight className="inline h-4 w-4 shrink-0" />{" "}
            <a className="text-stone-600" href={""}>
              Manage
            </a>
          </>,
        ],
        instructions: [
          "Select recipe book from dropdown menu next to 'Recipes for:'",
          "Below view your recipes",
          "On the right panel you can view your select recipe",
          "On the right panel you can view your select recipe",
          "Expand recipe button ... WIP",
        ],
      },
      {
        heading: "Shared Recipes",
        body: [
          "It's like an inbox for recipes that are shared with you",
          "Every recipe that any user shares with you will appear in this recipe book",
          <>
            <span className="font-bold">NOTE:</span> This recipe will never
            belong to you. The original author will always have control of this
            recipe but you are able to copy these recipes to any of your own
            recipe books. This will give you full editorial control over them.
            They are essentially yours at this point. More info{" "}
            <a className="text-stone-600" href={""}>
              here
            </a>
          </>,
          ,
        ],
        instructions: [
          "Select 'Shared Recipes' from dropdown menu next to 'Recipes for:'",
          "Below view recipes that have been shared with you",
          "On the right panel you can view your select recipe",
          "Select>>>>> ",
          "Expand recipe button ... WIP",
        ],
      },
      {
        heading: "Shared Recipe Books",
        body: ["All your recipes are organized by the book you created it in"],
        instructions: [
          "Select recipe book from dropdown menu next to 'Recipes for:'",
          "Below view your recipes",
          "On the right panel you can view your select recipe",
          "Expand recipe button ... WIP",
        ],
      },
    ],
  },
  {
    id: "share",
    label: "Share",
    icon: Share,
    blurb: "Sharing is caring",
    sections: [
      {
        heading: "Share your book",
        body: [
          "If are the creator you can share your book",
          "Share with others to collaborate or just to view your recipes",
        ],
        instructions: [
          <>
            Next to your recipe book name click{" "}
            <FontAwesomeIcon icon={faShareFromSquare} />
          </>,
          "Choose 'Collaborator' or 'View Only'",
          "Enter the username of who you want to share with",
        ],
      },
      {
        heading: "Share your recipe",
        body: [
          "You can share any recipe that belongs to you in any book you own.",
          <>
            Recipients cannot edit your shared recipe only view and copy it as
            their own. Info{" "}
            <a className="text-stone-600" href={""}>
              here
            </a>
            .
          </>,
          <>
            <span className="font-bold">NOTE:</span> Any updates made to your
            recipe will be reflected in the recipients{" "}
            <a className="text-stone-600" href={""}>
              Shared Recipe version
            </a>
            .
          </>,
        ],
        instructions: [
          <>
            Select a recipe and this icon will appear to the right{" "}
            <FontAwesomeIcon icon={faShareFromSquare} />
          </>,
          "Enter the username of who you want to share your recipe with",
        ],
      },
    ],
  },
  {
    id: "search",
    label: "Search",
    icon: Search,
    blurb: "Find any recipe even if you haven't created it yet.",
    sections: [
      {
        heading: "Crawl the web",
        body: [
          "This feature is currently under development details to follow.",
        ],
        instructions: [],
      },
    ],
  },
  {
    id: "manage",
    label: "Manage",
    icon: Search,
    blurb: "Find any recipe even if you haven't created it yet.",
    sections: [
      {
        heading: "Edit",
        body: ["Docs under constructions"],
        instructions: [],
      },
      {
        heading: "Delete/Remove",
        body: ["Docs under constructions"],
        instructions: [],
      },
    ],
  },
];
