import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of the gadget I use every day: my printer.
// It prints the test page flawlessly every single time, then
// mysteriously runs dry the moment a real document is on the line.
const ROAST =
  "My printer prints the test page perfectly, then takes one look at the document I actually need and runs out of ink.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");

// Gate check: one line, 1-200 chars, no trailing newline added.
// This roast is exactly 115 chars, so it fits comfortably.
