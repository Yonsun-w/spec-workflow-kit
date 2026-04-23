import test from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, existsSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { runCli } from "../src/cli.js";

test("init installs shared, cursor, claude, and codex artifacts", async () => {
  const dir = mkdtempSync(path.join(tmpdir(), "spec-workflow-kit-"));

  await runCli(["init", dir]);

  assert.equal(existsSync(path.join(dir, ".ai-flow", "project", "overview.md")), true);
  assert.equal(existsSync(path.join(dir, ".cursor", "commands", "pro-init.md")), true);
  assert.equal(existsSync(path.join(dir, ".claude", "commands", "propose.md")), true);
  assert.equal(existsSync(path.join(dir, ".agents", "skills", "pro-workflow", "SKILL.md")), true);

  const skillContent = readFileSync(
    path.join(dir, ".agents", "skills", "pro-workflow", "SKILL.md"),
    "utf8"
  );

  assert.match(skillContent, /pro-workflow/);
  assert.match(skillContent, /done/);
});
