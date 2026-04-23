# spec-workflow-kit

Open-source workflow kit for `Cursor`, `Claude Code`, and `Codex`.

It installs one shared workspace and four default stage commands:

- `/pro-init`: baseline project docs from the current codebase
- `/explore`: clarify the requirement and capture the change brief
- `/propose`: generate the proposal, risks, implementation tasks, and verification tasks
- `/done`: sync project docs back to the actual code changes

## Design

The package follows a doc-aligned workflow rather than a prompt-only workflow:

- code is the source for initialization
- active change docs live in a stable shared workspace
- proposal and validation are explicit artifacts
- completion means architecture and docs are updated to match reality

Default workspace:

```text
.ai-flow/
  project/
    overview.md
    architecture.md
    conventions.md
  changes/
    active/
      brief.md
      proposal.md
      tasks.md
      validation.md
```

## Install

```bash
npm install -D spec-workflow-kit
npx spec-workflow-kit init
```

That writes:

- `.ai-flow/` shared workflow docs
- `.cursor/commands/` and `.cursor/skills/`
- `.claude/commands/` and `.claude/skills/`
- `.agents/skills/` for Codex

## CLI

```bash
spec-workflow-kit init [path] [--targets=cursor,claude,codex,shared] [--force] [--dry-run]
```

Examples:

```bash
npx spec-workflow-kit init
npx spec-workflow-kit init . --targets=shared,cursor,claude
npx spec-workflow-kit init . --dry-run
```

## Compatibility

- `Cursor`: installs slash commands plus a matching skill
- `Claude Code`: installs slash commands plus a matching skill
- `Codex`: installs the workflow as a project-local skill under `.agents/skills/`

`Codex` does not rely on slash-command files here. The workflow is exposed through the `pro-workflow` skill and the stage names `pro-init`, `explore`, `propose`, and `done`.

## Publish

Typical npm publish flow:

```bash
npm login
npm version patch
npm publish --access public
```

If the unscoped name is already taken, publish under a scope such as `@your-scope/spec-workflow-kit`.
