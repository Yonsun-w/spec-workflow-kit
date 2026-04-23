---
name: /apply
id: apply
category: Workflow
description: Execute the approved proposal by implementing tasks from the active plan
---

Implement the approved proposal.

Goal:
- turn the active proposal into concrete code changes
- execute implementation tasks in order
- keep validation and plan state accurate while coding

Workflow:

1. Read:
   - `.ai-flow/changes/active/proposal.md`
   - `.ai-flow/changes/active/tasks.md`
   - `.ai-flow/changes/active/validation.md`
   - relevant project docs under `.ai-flow/project/`
2. Implement the active change according to the proposal.
3. Update `.ai-flow/changes/active/tasks.md` as tasks are completed or revised.
4. Update `.ai-flow/changes/active/validation.md` with checks run during implementation.
5. If the implementation has to diverge from the proposal, record that clearly in `.ai-flow/changes/active/proposal.md`.
6. Return:
   - what was implemented
   - which tasks are complete
   - what remains blocked or unverified

Guardrails:
- do not silently drift from the proposal
- keep implementation tasks and verification tasks separate
- record incomplete or deferred work explicitly
