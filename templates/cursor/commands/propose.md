---
name: /propose
id: propose
category: Workflow
description: Generate the implementation proposal, risks, and task split for the active change
---

Create the implementation proposal for the active change.

Goal:
- convert the active brief into a concrete proposal
- record requirement changes, risks, and tasks
- update:
  - `.ai-flow/changes/active/proposal.md`
  - `.ai-flow/changes/active/tasks.md`
  - `.ai-flow/changes/active/validation.md`

Workflow:

1. Read:
   - `.ai-flow/project/overview.md`
   - `.ai-flow/project/architecture.md`
   - `.ai-flow/project/conventions.md`
   - `.ai-flow/changes/active/brief.md`
2. Inspect the code paths that are likely to change.
3. Write `.ai-flow/changes/active/proposal.md` with:
   - summary
   - explicit requirement changes
   - non-goals if helpful
   - risks
   - design notes and affected modules
4. Write `.ai-flow/changes/active/tasks.md` with two sections:
   - implementation tasks
   - verification tasks
5. Write `.ai-flow/changes/active/validation.md` with planned checks and residual risk assumptions.
6. Return:
   - the proposed approach
   - the risk list
   - the task split

Guardrails:
- each task should be independently actionable
- verification tasks must be specific, not generic "test it"
- call out migrations, compatibility, and rollback concerns when relevant
