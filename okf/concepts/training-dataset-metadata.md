---
okf_version: "0.2"
type: Class
title: Training Dataset Metadata
resource: urn:ngm:class:training-dataset-metadata
domain: artificial-intelligence
description: Training dataset metadata is structured descriptive information about the data used to train a machine learning model, including its provenance, size, collection method, class distribution, known biases, and licensing terms. This metadata is a core component of AI model cards and datasheets, enabling reproducibility, fairness auditing, and regulatory accountability. Thorough dataset metadata under
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:model-architecture
hasPart:
  - urn:ngm:class:data-versioning
  - urn:ngm:class:provenance-tracking
  - urn:ngm:class:metadata-schema
requires:
  - urn:ngm:class:data-governance
  - urn:ngm:class:training-data
  - urn:ngm:class:data-pipeline
enables:
  - urn:ngm:class:model-transparency
  - urn:ngm:class:ai-fairness
  - urn:ngm:class:model-evaluation-results
partOf:
  - urn:ngm:class:ai-model-card
relatedTo:
  - urn:ngm:class:provenance-standard
  - urn:ngm:class:fairness-metrics
  - urn:ngm:class:model-performance
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Training Dataset Metadata

Training dataset metadata is structured descriptive information about the data used to train a machine learning model, including its provenance, size, collection method, class distribution, known biases, and licensing terms. This metadata is a core component of AI model cards and datasheets, enabling reproducibility, fairness auditing, and regulatory accountability. Thorough dataset metadata underpins model transparency and responsible AI governance.
