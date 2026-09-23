---
okf_version: "0.2"
type: Class
title: Agent Skill
resource: urn:ngm:class:agent-skill
domain: artificial-intelligence
description: "An agent skill is a packaged, self-contained unit of procedural knowledge — a named bundle of instructions, and optionally scripts and reference resources — that an agent loads into its context on demand when a task matches the skill's trigger, and unloads afterwards. Rather than baking every capability into the base system prompt, a skill lets specialised know-how (how to run a deployment, audit "
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:prompt-template
  - urn:ngm:class:prompttemplate
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:agenticworkflow
uses:
  - urn:ngm:class:context-management
  - urn:ngm:class:contextmanagement
relatedTo:
  - urn:ngm:class:tool-use
  - urn:ngm:class:capability-advertisement
  - urn:ngm:class:tooluse
  - urn:ngm:class:capabilityadvertisement
---

# Agent Skill

An agent skill is a packaged, self-contained unit of procedural knowledge — a named bundle of instructions, and optionally scripts and reference resources — that an agent loads into its context on demand when a task matches the skill's trigger, and unloads afterwards. Rather than baking every capability into the base system prompt, a skill lets specialised know-how (how to run a deployment, audit prose, drive a browser) live as a discoverable, versioned artifact that is progressively disclosed only when relevant, keeping the working context small while giving the agent deep competence in whatever domain the current task demands.
