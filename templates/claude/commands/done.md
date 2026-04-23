---
name: /done
id: done
category: Workflow
description: Finish the workflow, submit the final state, clear the active workspace, and trigger a last sync
---

Finish the current workflow loop.

Goal:
- finalize the active change
- trigger one final semantic sync
- prepare the active workspace to be cleared or reset for the next change

Workflow:

1. Inspect repository state:
   - `git status --short`
   - `git diff --stat`
   - the main changed files
2. Run the `/sync` stage logic so code and workflow docs are semantically aligned before closure.
3. Ensure the active docs reflect final reality:
   - `.ai-flow/changes/active/proposal.md`
   - `.ai-flow/changes/active/tasks.md`
   - `.ai-flow/changes/active/validation.md`
   - `.ai-flow/changes/active/sync.md`
   - relevant `.ai-flow/project/*.md`
4. Finish submission work if requested by the repository workflow:
   - prepare commit or PR summary
   - ensure validation state is explicit
5. Clear or reset the active workspace for the next change. At minimum, leave it in a clean reusable state instead of stale in-progress notes.
6. Return:
   - final code/doc alignment status
   - what was submitted or finalized
   - what was cleared from the workspace
   - what remains unresolved

Guardrails:
- do not claim tests passed unless they were actually run
- keep the final sync grounded in current code, not original intent
- do not silently discard unresolved issues when clearing the workspace
- preserve unresolved risks instead of hiding them
