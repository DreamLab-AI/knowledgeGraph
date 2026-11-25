---
okf_version: "0.2"
type: Class
title: Safety Evaluation
resource: urn:ngm:class:safety-evaluation
domain: ai
description: Safety evaluation is the systematic assessment of whether an AI system behaves acceptably under a defined threat and risk model, measuring propensities for harmful outputs, susceptibility to misuse, robustness under adversarial pressure, and the presence of dangerous capabilities. It combines automated benchmarks, red-teaming, and structured human review to produce evidence used in deployment deci
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:ai-safety
uses:
  - urn:ngm:class:red-teaming
supports:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:ai-alignment
relatedTo:
  - urn:ngm:class:risk-assessment
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Safety Evaluation

Safety evaluation is the systematic assessment of whether an AI system behaves acceptably under a defined threat and risk model, measuring propensities for harmful outputs, susceptibility to misuse, robustness under adversarial pressure, and the presence of dangerous capabilities. It combines automated benchmarks, red-teaming, and structured human review to produce evidence used in deployment decisions and governance reporting. Distinct from capability evaluation, safety evaluation asks not only what a model can do but how reliably it refrains from causing harm.
