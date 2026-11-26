import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { join } from "node:path";
// One line, one joke: Friday's deploy quits on Monday and asks its agent for a job reference.

const line = "Friday's deploy woke me at 9:02 Monday to say it had quit, and asked me to be its job reference.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, line, "utf8");
chmodSync(target, 0o644);
