---
okf_version: "0.2"
type: Class
title: Open-Source AI
resource: urn:ngm:class:open-source-ai
domain: artificial-intelligence
description: "Open-Source AI denotes artificial intelligence systems—including model weights, training code, datasets, evaluation benchmarks, and inference tooling—released under licences that permit public inspection, reproduction, modification, and redistribution. The degree of openness varies widely: fully open releases expose weights, training data, and procedures; open-weights releases share weights and in"
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:open-source-software
hasPart:
  - urn:ngm:class:model-weights
  - urn:ngm:class:training-dataset
  - urn:ngm:class:inference-engine
  - urn:ngm:class:benchmark-evaluation
  - urn:ngm:class:benchmark-evaluation
requires:
  - urn:ngm:class:open-source-licence
  - urn:ngm:class:compute-infrastructure
enables:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:red-teaming
  - urn:ngm:class:neural-network-quantisation
  - urn:ngm:class:federated-learning
  - urn:ngm:class:edge-ai
  - urn:ngm:class:model-quantization
dependsOn:
  - urn:ngm:class:large-language-model
  - urn:ngm:class:neural-network-architecture
contrastsWith:
  - urn:ngm:class:proprietary-ai
  - urn:ngm:class:closed-source-model
bridgesTo:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:regulatory-compliance
supports:
  - urn:ngm:class:ai-governance
  - urn:ngm:class:ai-safety
  - urn:ngm:class:reproducibility
  - urn:ngm:class:reproducibility
standardizedBy:
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:osi-open-source-ai-definition
  - urn:ngm:class:eu-ai-act-regulatory-instrument
partOf:
  - urn:ngm:class:open-source-software
relatedTo:
  - urn:ngm:class:hugging-face-model-hub
  - urn:ngm:class:hugging-face-model-hub
  - urn:ngm:class:community-fine-tuning
  - urn:ngm:class:dual-use-risk
---

# Open-Source AI

Open-Source AI denotes artificial intelligence systems—including model weights, training code, datasets, evaluation benchmarks, and inference tooling—released under licences that permit public inspection, reproduction, modification, and redistribution. The degree of openness varies widely: fully open releases expose weights, training data, and procedures; open-weights releases share weights and inference code while withholding training data; and open-API systems expose neither. This transparency gradient determines reproducibility, auditability, and dual-use risk, and is formalised by frameworks such as the OSI Open Source AI Definition. Open-source AI accelerates community safety research, enables fine-tuning on proprietary data, and reduces vendor lock-in, while simultaneously raising governance questions about capability proliferation and misuse.
