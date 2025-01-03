// This will import all .md files from the components directory
const componentDocs = import.meta.glob("./components/*.md", {
  eager: false,
  as: "raw",
});

// Log available files
console.log("Available docs:", componentDocs);

// Convert the paths to component IDs
const pages = Object.fromEntries(
  Object.entries(componentDocs).map(([path, loader]) => {
    // Extract just the filename without extension
    const id = path.split("/").pop().replace(".md", "");
    console.log(`Mapping ${path} to ${id}`);
    return [id, loader];
  })
);

// Log available pages
console.log("Mapped pages:", Object.keys(pages));

export function getAvailablePages() {
  return Object.keys(pages);
}

export async function getPageContent(pageId) {
  try {
    const page = pages[pageId];
    console.log(`Loading content for ${pageId}`, page);
    if (!page) return "# Component Not Found";
    const content = await page();
    return content;
  } catch (error) {
    console.error("Error loading documentation:", error);
    return "# Error Loading Documentation";
  }
}
