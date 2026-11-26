import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });

const setup = "I fine-tuned on your past missed deadlines; ";
const punch = "now I miss them with 98% accuracy.";
const line = setup + punch;

writeFileSync("/output/entry.txt", line, "utf8");
