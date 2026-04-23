---
name: pro-workflow
description: Shared development workflow for open-source projects. Use when the user wants to initialize project docs from code, clarify a requirement, write an implementation proposal, apply the implementation, force semantic sync between code and docs, or close the workflow. Maps to /pro-init, /explore, /propose, /apply, /sync, and /done.
---

# Pro Workflow

Use this skill to keep code and project documentation aligned through one active workflow loop.

## Shared Workspace

All workflow artifacts live under `.ai-flow/`.

Project context:
- `.ai-flow/project/overview.md`
- `.ai-flow/project/architecture.md`
- `.ai-flow/project/conventions.md`

Active change:
- `.ai-flow/changes/active/brief.md`
- `.ai-flow/changes/active/proposal.md`
- `.ai-flow/changes/active/tasks.md`
- `.ai-flow/changes/active/validation.md`
- `.ai-flow/changes/active/sync.md`

## Stages

### 1. `/pro-init`

Use when the project has not yet been baselined.

Output:
- current-product overview
- architecture map
- repo conventions

### 2. `/explore`

Use when the requirement is still fuzzy.

Output:
- clarified request
- scope boundaries
- open questions
- acceptance signals

### 3. `/propose`

Use when the requirement is understood and the next step is planning.

Output:
- requirement changes
- risk list
- implementation tasks
- verification tasks

### 4. `/apply`

Use when the proposal is approved and implementation should begin.

Output:
- code changes driven by the plan
- updated task state
- updated validation state

### 5. `/sync`

Use when code and docs may have drifted and semantic alignment must be restored.

Output:
- drift analysis
- sync actions
- explicit final alignment state

### 6. `/done`

Use when the change is ready to close.

Output:
- final sync
- finalized delivery state
- cleared or reset active workspace

## Operating Rules

- Keep documentation grounded in the repository, not in assumptions.
- Prefer updating the shared `.ai-flow/` files over creating one-off documents.
- Separate implementation tasks from verification tasks.
- Treat semantic sync as a first-class stage, not cleanup.
- Treat `/done` as workflow closure, not the main implementation step.
- If a check was not run, record that clearly.
