import { getAvailablePages } from "./wikiContent";

export const pages = [
  { id: "about", title: "About", type: "page" },
  ...getAvailablePages().map((id) => ({
    id,
    title: `${id.charAt(0).toUpperCase()}${id.slice(1)} Component`,
    type: "component",
  })),
];
