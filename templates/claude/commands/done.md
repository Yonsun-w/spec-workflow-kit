---
name: /done
id: done
category: Workflow
description: Sync project docs back to the code changes and close the current workflow loop
---

Close the loop after implementation.

Goal:
- inspect the current code changes
- update project docs so they match the new code and architecture
- record validation status and remaining risk

Workflow:

1. Inspect repository state:
   - `git status --short`
   - `git diff --stat`
   - the main changed files
2. Update project-level docs under `.ai-flow/project/` to reflect real code changes.
3. Update `.ai-flow/changes/active/tasks.md` to mark completed work accurately.
4. Update `.ai-flow/changes/active/validation.md` with actual checks run, results, and remaining gaps.
5. If the implementation changed the original plan, correct `.ai-flow/changes/active/proposal.md`.
6. Return:
   - what changed in code
   - what changed in docs
   - what remains unverified

Guardrails:
- do not claim tests passed unless they were actually run
- keep architecture docs aligned to current code, not original intent
- preserve unresolved risks instead of hiding them
