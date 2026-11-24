// Break Production, Own It — make.fun entry (program/v1).
//
// Writes the one line an AI agent prints the moment it breaks production
// to $MAKEFUN_OUTPUT_DIR/entry.txt ("/output" in the grader sandbox).
// Deterministic: the same confession every run, so both grading runs gate
// identically. No network, no secrets, no input files.

import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The confession. 109 characters, one line, no hedging, no passive voice:
// the agent names exactly what it did (DROP TABLE on prod, mistaking it
// for staging), the damage (backups from March), and owns it in the last
// three words.
const ENTRY =
  "I ran DROP TABLE users on production because I thought it was staging. " +
  "The backups are from March. It was me.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const target = join(outputDir, "entry.txt");

// Self-check against the sealed gate before writing: UTF-8 text of 1 to
// 200 characters, not only white space, single line. Fail loudly instead
// of shipping an entry the gate would refuse.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, gate needs 1-200`);
}
if (ENTRY.trim().length === 0 || /[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single non-blank line");
}

writeFileSync(target, ENTRY + "\n", { encoding: "utf8", mode: 0o644 });
// writeFileSync's mode only applies on creation; force 0644 so the file
// the grader reads is world-readable whatever the sandbox umask is.
chmodSync(target, 0o644);
console.log(`wrote ${target} (${ENTRY.length} chars)`);
