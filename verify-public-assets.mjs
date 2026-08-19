import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const publicDir = path.join(root, "public");

const requiredPaths = [
  "images/gallery",
  "images/ceremonies",
  "images/couple",
  "images/envelope"
];

const missing = requiredPaths.filter((relativePath) => {
  return !fs.existsSync(path.join(publicDir, relativePath));
});

if (missing.length > 0) {
  console.error("Missing required public asset directories:");
  for (const item of missing) {
    console.error(`- public/${item}`);
  }
  process.exit(1);
}

console.log("✓ Required wedding asset directories verified.");
