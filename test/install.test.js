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
  assert.equal(existsSync(path.join(dir, ".ai-flow", "changes", "active", "sync.md")), true);
  assert.equal(
    existsSync(path.join(dir, ".ai-flow", "references", "UI素材库", "00_聊天UI约束.md")),
    true
  );
  assert.equal(
    existsSync(path.join(dir, ".ai-flow", "references", "UI素材库", "微信官方", "微信_消息列表_官方截图.jpg")),
    true
  );
  assert.equal(
    existsSync(path.join(dir, ".ai-flow", "references", "UI素材库", "X官方", "X_首页信息流_官方截图.jpg")),
    true
  );
  assert.equal(
    existsSync(path.join(dir, ".ai-flow", "references", "UI素材库", "小红书官方", "小红书_消息列表_官方截图.jpg")),
    true
  );
  assert.equal(existsSync(path.join(dir, ".cursor", "commands", "pro-init.md")), true);
  assert.equal(existsSync(path.join(dir, ".cursor", "commands", "apply.md")), true);
  assert.equal(existsSync(path.join(dir, ".cursor", "commands", "sync.md")), true);
  assert.equal(existsSync(path.join(dir, ".claude", "commands", "propose.md")), true);
  assert.equal(existsSync(path.join(dir, ".claude", "commands", "apply.md")), true);
  assert.equal(existsSync(path.join(dir, ".claude", "commands", "sync.md")), true);
  assert.equal(existsSync(path.join(dir, ".agents", "skills", "pro-workflow", "SKILL.md")), true);

  const skillContent = readFileSync(
    path.join(dir, ".agents", "skills", "pro-workflow", "SKILL.md"),
    "utf8"
  );

  assert.match(skillContent, /pro-workflow/);
  assert.match(skillContent, /apply/);
  assert.match(skillContent, /sync/);
  assert.match(skillContent, /done/);
});
