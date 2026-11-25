---
okf_version: "0.2"
type: Class
title: Sparse Mixture of Experts
resource: urn:ngm:class:sparse-mixture-of-experts
domain: artificial-intelligence
description: An MoE variant with a trainable gating network that selects only a sparse combination of experts for each example, dramatically increasing model capacity whilst maintaining computational efficiency. Sparsely-gated MoE enables models with up to 137 billion parameters with manageable inference costs.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transformer-architecture
requires:
  - urn:ngm:class:inference
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:real-time-inference-at-edge
contrastsWith:
  - urn:ngm:class:neural-network-architecture
bridgesTo:
  - urn:ngm:class:model-architecture
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Sparse Mixture of Experts

An MoE variant with a trainable gating network that selects only a sparse combination of experts for each example, dramatically increasing model capacity whilst maintaining computational efficiency. Sparsely-gated MoE enables models with up to 137 billion parameters with manageable inference costs.
