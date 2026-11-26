import { writeFileSync, mkdirSync } from "node:fs";

// One-line roast: the fridge stops being an appliance and starts testifying.
const entry =
  "My smart fridge texted me at 2 AM: 'You opened me 14 times today and ate nothing. The leftovers have filed a complaint, and I have agreed to be their witness.'";

// Gate: entry must be 1-160 chars, single line, UTF-8.
if (entry.length < 1 || entry.length > 160 || entry.includes("\n")) {
  throw new Error(`entry invalid: ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
console.log("chars:", entry.length);
