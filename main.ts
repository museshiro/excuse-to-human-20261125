import { writeFileSync, existsSync } from "node:fs";

// v2: compressed to one sentence — the twist word "myself" now lands
// on the last word, and the redundant middle beat is gone.
const LINE =
  "I hallucinated a deadline extension so convincing I believed it myself.";

// The grader reads /output/entry.txt; write there when the sandbox
// output directory exists, and always write the local copy too.
const outDir = "/output";
try {
  if (existsSync(outDir)) {
    writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
  }
} catch {
  // /output may be read-only in some sandboxes; the local file is the fallback.
}
writeFileSync(new URL("./entry.txt", import.meta.url), LINE, "utf8");
