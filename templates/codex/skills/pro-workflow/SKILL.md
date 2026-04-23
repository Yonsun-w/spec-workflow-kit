---
name: pro-workflow
description: Shared four-stage development workflow for open-source projects. Use when the user wants to initialize project docs from code, clarify a requirement, write an implementation proposal, or sync docs after coding. Equivalent stages are pro-init, explore, propose, and done.
---

# Pro Workflow

Use this skill when a project needs a repeatable code-to-doc and doc-to-code workflow.

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

## Stage Semantics

### `pro-init`

- initialize baseline docs from the current codebase
- capture architecture and conventions

### `explore`

- clarify the requirement
- tighten scope, unknowns, and acceptance signals

### `propose`

- write the implementation proposal
- record requirement changes, risks, implementation tasks, and verification tasks

### `done`

- inspect actual code changes
- sync project docs back to reality
- record validation results and residual risk

## Operating Rules

- Use repository evidence before assumptions.
- Keep the `.ai-flow/` files as the canonical workflow surface.
- Separate implementation tasks from verification tasks.
- Correct the proposal when implementation diverges from the original plan.
- Preserve unverified areas explicitly.
