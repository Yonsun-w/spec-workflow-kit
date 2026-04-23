---
name: /pro-init
id: pro-init
category: Workflow
description: Initialize project docs from the current codebase into the shared .ai-flow workspace
---

Initialize the project for this workflow.

Goal:
- treat the current repository as the source of truth
- generate baseline project documentation under `.ai-flow/project/`
- leave the project in a state where later `/explore`, `/propose`, and `/done` commands can build on stable docs

Workflow:

1. Inspect the repository structure, stack, and existing docs.
2. Update these files from the current codebase:
   - `.ai-flow/project/overview.md`
   - `.ai-flow/project/architecture.md`
   - `.ai-flow/project/conventions.md`
3. Keep the docs concise, factual, and aligned to the repository as it exists now.
4. If the repo already has better docs elsewhere, summarize and link their role instead of duplicating them.
5. Return:
   - what was initialized
   - major architecture findings
   - any gaps that still need clarification

Guardrails:
- do not invent requirements that are not visible in code or docs
- prefer updating existing files over creating ad hoc new files
- if the repository is too large, document only the areas relevant to active development
