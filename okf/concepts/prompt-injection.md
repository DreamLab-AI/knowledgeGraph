---
okf_version: "0.2"
type: Class
title: Prompt Injection
resource: urn:ngm:class:prompt-injection
domain: security
description: Prompt injection is a class of adversarial attacks against large language model (LLM) systems in which attacker-controlled text embedded within the model's input context overrides or subverts the developer-specified system prompt, causing the model to follow attacker instructions instead of its intended operating constraints. Direct prompt injection occurs when a user submits malicious instruction
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:adversarial-attack
hasPart:
  - urn:ngm:class:direct-prompt-injection
  - urn:ngm:class:indirect-prompt-injection
requires:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:system-prompt
enables:
  - urn:ngm:class:privilege-escalation
  - urn:ngm:class:adversarial-testing
  - urn:ngm:class:data-exfiltration
dependsOn:
  - urn:ngm:class:instruction-following
  - urn:ngm:class:context-window
contrastsWith:
  - urn:ngm:class:adversarial-robustness
  - urn:ngm:class:input-sanitisation
bridgesTo:
  - urn:ngm:class:governance
  - urn:ngm:class:ai-regulation
uses:
  - urn:ngm:class:retrieval-augmented-generation
  - urn:ngm:class:agentic-ai
standardizedBy:
  - urn:ngm:class:owasp-llm-top-10-2025
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:owasp-llm-top-10-2025
partOf:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:llm-security
relatedTo:
  - urn:ngm:class:jailbreaking
  - urn:ngm:class:red-teaming
  - urn:ngm:class:social-engineering
  - urn:ngm:class:alignment
  - urn:ngm:class:constitutional-ai-training-methodology
  - urn:ngm:class:sql-injection
  - urn:ngm:class:constitutional-ai-training-methodology
---

# Prompt Injection

Prompt injection is a class of adversarial attacks against large language model (LLM) systems in which attacker-controlled text embedded within the model's input context overrides or subverts the developer-specified system prompt, causing the model to follow attacker instructions instead of its intended operating constraints. Direct prompt injection occurs when a user submits malicious instructions directly; indirect prompt injection occurs when the model retrieves or processes external content such as web pages, documents, or tool outputs that contain embedded adversarial instructions. As LLMs are increasingly deployed in agentic pipelines with tool-calling and autonomous action capabilities, prompt injection constitutes a critical security boundary violation that can lead to data exfiltration, privilege escalation, and unauthorised actions on external systems.
