---
okf_version: "0.2"
type: Class
title: Domain Adaptation
resource: urn:ngm:class:domain-adaptation
domain: machine-learning
description: "Domain adaptation is a sub-field of transfer learning that addresses the domain shift problem: a model trained on a labelled source distribution degrades when applied to a target distribution whose marginal or conditional statistics differ. Methods fall into feature-alignment approaches (learning domain-invariant representations via adversarial training, maximum mean discrepancy minimisation, or o"
maturity: established
quality: 0
is-a:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:ai-technique
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:representation-learning
hasPart:
  - urn:ngm:class:unsupervised-domain-adaptation
  - urn:ngm:class:semi-supervised-domain-adaptation
  - urn:ngm:class:multi-source-domain-adaptation
  - urn:ngm:class:source-free-domain-adaptation
  - urn:ngm:class:feature-alignment
  - urn:ngm:class:instance-re-weighting
  - urn:ngm:class:self-training
  - urn:ngm:class:pseudo-labelling
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:source-domain
  - urn:ngm:class:target-domain
  - urn:ngm:class:representation-learning
  - urn:ngm:class:pre-training
enables:
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:zero-shot-learning
  - urn:ngm:class:low-resource-nlp
  - urn:ngm:class:cross-domain-generalisation
  - urn:ngm:class:model-deployment
  - urn:ngm:class:synthetic-to-real-transfer
  - urn:ngm:class:clinical-ai-deployment
  - urn:ngm:class:federated-learning
dependsOn:
  - urn:ngm:class:pre-training
  - urn:ngm:class:representation-learning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:foundation-model
implements:
  - urn:ngm:class:adversarial-training
  - urn:ngm:class:maximum-mean-discrepancy
  - urn:ngm:class:optimal-transport
  - urn:ngm:class:self-training
  - urn:ngm:class:pseudo-labelling
  - urn:ngm:class:importance-weighting
  - urn:ngm:class:gradient-reversal
contrastsWith:
  - urn:ngm:class:multi-task-learning
  - urn:ngm:class:meta-learning
  - urn:ngm:class:domain-generalisation
  - urn:ngm:class:continual-learning
  - urn:ngm:class:fine-tuning
  - urn:ngm:class:knowledge-distillation
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:continual-learning
  - urn:ngm:class:causal-inference
  - urn:ngm:class:robust-machine-learning
uses:
  - urn:ngm:class:adversarial-training
  - urn:ngm:class:optimal-transport
  - urn:ngm:class:self-training
  - urn:ngm:class:domain-adversarial-neural-network
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:pseudo-labelling
  - urn:ngm:class:maximum-mean-discrepancy
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:lo-ra
  - urn:ngm:class:adapter-modules
supports:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:automatic-speech-recognition
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:federated-learning
  - urn:ngm:class:scientific-computing
standardizedBy:
  - urn:ngm:class:wilds-benchmark
  - urn:ngm:class:domainbed
  - urn:ngm:class:office-31-benchmark
  - urn:ngm:class:domainnet-benchmark
  - urn:ngm:class:visda-benchmark
partOf:
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:concept-drift
  - urn:ngm:class:parameter-efficient-fine-tuning
  - urn:ngm:class:covariate-shift
  - urn:ngm:class:distribution-shift
  - urn:ngm:class:instruction-tuning
  - urn:ngm:class:foundation-model
  - urn:ngm:class:federated-learning
  - urn:ngm:class:continual-learning
---

# Domain Adaptation

Domain adaptation is a sub-field of transfer learning that addresses the domain shift problem: a model trained on a labelled source distribution degrades when applied to a target distribution whose marginal or conditional statistics differ. Methods fall into feature-alignment approaches (learning domain-invariant representations via adversarial training, maximum mean discrepancy minimisation, or optimal transport), instance re-weighting schemes that correct for covariate shift, and self-training or pseudo-labelling strategies that exploit unlabelled target data. It spans unsupervised, semi-supervised, and multi-source settings and underpins practical deployment of models in NLP, computer vision, speech recognition, and scientific computing wherever labelled target data is scarce or costly.
