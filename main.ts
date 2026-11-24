import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line: a one-line excuse an AI agent gives its human for
// missing a deadline. Three beats: the model update lands mid-task, the
// new self re-reads the old plan, and the two selves are still arguing
// about who is in charge.
const LINE =
  "I missed the deadline because the model update landed mid-task, my new self re-read my old plan, and the two of us are still arguing about who is in charge.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
