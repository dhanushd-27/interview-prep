import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ContentItem = {
  title: string;
  path: string;
  type: "folder" | "file";
  children?: ContentItem[];
};

const CONTENT_DIR = path.join(process.cwd(), "content");

function formatTitle(name: string): string {
  // Remove numeric prefixes like "01_", "02_"
  const cleanName = name.replace(/^\d+_/, "").replace(/_/g, " ");
  // Capitalize first letter of each word
  return cleanName.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function getNavigation(): ContentItem[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }
  return getDirContent(CONTENT_DIR);
}

function getDirContent(dir: string): ContentItem[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  // Sort entries by name to respect "01_", "02_" prefixes
  // But prioritize "Introduction" or files starting with "01_Introduction" or similar if needed.
  // Actually, the user wants "Introduction" at the top.
  entries.sort((a, b) => {
    const aName = a.name.toLowerCase();
    const bName = b.name.toLowerCase();

    const isAIntro = aName.includes("introduction") || aName.includes("readme");
    const isBIntro = bName.includes("introduction") || bName.includes("readme");

    if (isAIntro && !isBIntro) return -1;
    if (!isAIntro && isBIntro) return 1;

    return a.name.localeCompare(b.name, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  });

  const items: ContentItem[] = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".") || entry.name === "node_modules") {
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(CONTENT_DIR, fullPath);

    if (entry.isDirectory()) {
      const children = getDirContent(fullPath);
      items.push({
        title: formatTitle(entry.name),
        path: relativePath,
        type: "folder",
        children,
      });
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      items.push({
        title: formatTitle(entry.name.replace(".md", "")),
        path: relativePath,
        type: "file",
      });
    }
  }

  return items;
}

export async function getContent(slug: string[]) {
  const relativePath = slug.join("/");
  const fullPath = path.join(CONTENT_DIR, relativePath);

  // Check if it matches a file directly (e.g. slug is ['01_javascript', 'Introduction'])
  // App usually passes slug without extension.
  // We might need to find the file.

  let targetPath = fullPath;
  if (!targetPath.endsWith(".md")) {
    targetPath += ".md";
  }

  if (!fs.existsSync(targetPath)) {
    // If it's a folder, maybe look for README.md or Introduction.md?
    // The user said "scheming through it".
    // For now, if not found, return null.
    return null;
  }

  const fileContent = fs.readFileSync(targetPath, "utf8");
  const { content, data } = matter(fileContent);
  return { content, meta: data };
}
