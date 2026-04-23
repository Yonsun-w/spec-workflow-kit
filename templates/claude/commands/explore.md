---
name: /explore
id: explore
category: Workflow
description: Clarify the request and capture a clean change brief before implementation
---

Explore the requested change before proposing implementation.

Goal:
- turn the conversation into a precise change brief
- identify ambiguity, hidden assumptions, affected areas, and acceptance signals
- update `.ai-flow/changes/active/brief.md`

Workflow:

1. Read the active project docs under `.ai-flow/project/`.
2. Read `.ai-flow/changes/active/brief.md`.
3. Use the current conversation to tighten the brief:
   - user problem
   - target behavior
   - scope boundaries
   - open questions
   - acceptance signals
4. Ask only the minimum questions needed to remove ambiguity.
5. Write the clarified result back to `.ai-flow/changes/active/brief.md`.
6. Return:
   - the clarified problem statement
   - the main unknowns that remain
   - what looks risky or coupled

Guardrails:
- do not start implementation
- do not generate a full plan here
- prefer concrete tradeoffs over generic brainstorming
