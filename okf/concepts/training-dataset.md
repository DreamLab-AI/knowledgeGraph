---
okf_version: "0.2"
type: Class
title: Training Dataset
resource: urn:ngm:class:training-dataset
domain: machine-learning
description: A Training Dataset is a curated collection of labelled or unlabelled data used to fit the parameters of a machine learning model, establishing the empirical foundation from which the model generalises to unseen inputs. Its composition—size, diversity, label quality, representational balance, and provenance—fundamentally determines the capabilities and failure modes of the resulting model. Training
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:training-data
hasPart:
  - urn:ngm:class:training-dataset-metadata
  - urn:ngm:class:data-annotation
requires:
  - urn:ngm:class:data-governance
  - urn:ngm:class:data-labelling
  - urn:ngm:class:data-preprocessing
enables:
  - urn:ngm:class:model-training
  - urn:ngm:class:machine-learning-model
  - urn:ngm:class:evaluation-benchmarks-and-leaderboards
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:foundation-model
dependsOn:
  - urn:ngm:class:data-collection
  - urn:ngm:class:training-data-repository
contrastsWith:
  - urn:ngm:class:validation-dataset
  - urn:ngm:class:test-dataset
bridgesTo:
  - urn:ngm:class:data-privacy
  - urn:ngm:class:intellectual-property-rights-framework
  - urn:ngm:class:algorithmic-bias
uses:
  - urn:ngm:class:synthetic-data
  - urn:ngm:class:benchmark-standard
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:crowdsourcing
relatedTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:data-centric-ai
---

# Training Dataset

A Training Dataset is a curated collection of labelled or unlabelled data used to fit the parameters of a machine learning model, establishing the empirical foundation from which the model generalises to unseen inputs. Its composition—size, diversity, label quality, representational balance, and provenance—fundamentally determines the capabilities and failure modes of the resulting model. Training datasets range from manually annotated corpora (ImageNet, SQuAD) to web-scraped large-scale collections (Common Crawl, LAION-5B) and synthetically generated data. Questions of copyright, consent, bias, and traceability in training datasets have become central to AI governance and legal disputes.
