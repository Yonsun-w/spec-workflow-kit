---
name: pro-workflow
description: Shared four-stage development workflow for open-source projects. Use when the user wants to initialize project docs from code, clarify a requirement, write an implementation proposal, or sync docs after coding. Maps to /pro-init, /explore, /propose, and /done.
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

### 4. `/done`

Use after code changes exist.

Output:
- updated project docs
- updated validation status
- corrected proposal and task state when reality diverged from plan

## Operating Rules

- Keep documentation grounded in the repository, not in assumptions.
- Prefer updating the shared `.ai-flow/` files over creating one-off documents.
- Separate implementation tasks from verification tasks.
- Treat architecture alignment as part of delivery, not cleanup.
- If a check was not run, record that clearly.
