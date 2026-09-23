---
okf_version: "0.2"
type: Class
title: Guardrail
resource: urn:ngm:class:guardrail
domain: security
description: "A programmable safety control placed around a language model or agent that inspects, constrains, or rewrites inputs and outputs to keep behaviour within a defined policy envelope. Guardrails operate at runtime as input filters, output validators, topic and PII detectors, schema or format enforcers, and tool-permission gates; they block, redact, or re-prompt when a violation is detected, providing "
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:aisafety
enables:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:aisafety
contrastsWith:
  - urn:ngm:class:constitutional-ai-training-methodology
  - urn:ngm:class:constitutionalai
uses:
  - urn:ngm:class:content-moderation
  - urn:ngm:class:constrained-decoding
  - urn:ngm:class:contentmoderation
  - urn:ngm:class:constraineddecoding
---

# Guardrail

A programmable safety control placed around a language model or agent that inspects, constrains, or rewrites inputs and outputs to keep behaviour within a defined policy envelope. Guardrails operate at runtime as input filters, output validators, topic and PII detectors, schema or format enforcers, and tool-permission gates; they block, redact, or re-prompt when a violation is detected, providing an enforcement layer that is independent of, and complementary to, the alignment baked into the model itself.
