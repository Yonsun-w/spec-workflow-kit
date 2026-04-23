---
name: /sync
id: sync
category: Workflow
description: Force semantic alignment between project code and workflow documents
---

Synchronize code and docs in both directions.

Goal:
- detect semantic drift between the actual code, the active proposal, and the project docs
- force the workflow documents back into alignment with reality
- record sync status in `.ai-flow/changes/active/sync.md`

Workflow:

1. Inspect:
   - current code changes
   - `.ai-flow/project/*.md`
   - `.ai-flow/changes/active/proposal.md`
   - `.ai-flow/changes/active/tasks.md`
   - `.ai-flow/changes/active/validation.md`
2. Identify semantic mismatches, not just text diffs.
3. Update the affected docs so the workflow state matches the real codebase and the current architecture.
4. If documentation reveals missing implementation work, call that out explicitly as remaining code-side drift.
5. Write the sync result to `.ai-flow/changes/active/sync.md`, including:
   - drift found
   - sync actions taken
   - final alignment status
6. Return:
   - what drift was found
   - what was updated
   - what still needs alignment

Guardrails:
- do not treat wording-only edits as full semantic sync
- prefer reality in code over stale plan text
- preserve unresolved drift instead of hiding it
