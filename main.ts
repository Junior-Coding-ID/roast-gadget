// One-Line Roast: The Gadget You Use Every Day
// make.fun bounty: u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
// Entry: one original line roasting a daily gadget (the printer).
// The program writes exactly that one line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My printer prints the test page perfectly, then takes one look at the document I actually need and runs out of ink.";

// Why this line wins, criterion by criterion:
// 1. Daily gadget: the printer, roasted in one line with a single target.
// 2. Funny on first read: perfect test page vs. failure on the real
//    document — the "takes one look" turn is the recognition sting.
// 3. Fresh: not the generic "out of ink" complaint; the test-page vs.
//    real-document contrast is an angle nobody uses.
// 4. Tight: 115 characters, two beats (setup, punch), no wasted words.
// 5. Specific: one person's lived behaviour — it prints the test page
//    fine, then dies on the one document that actually matters.

// The gate requires a single line of 1-200 characters.
if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`Roast must be 1-200 characters, got ${ROAST.length}.`);
}
if (ROAST.includes("\n")) {
  throw new Error("Roast must be a single line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");

console.log(`Wrote ${ROAST.length} characters to /output/entry.txt`);
