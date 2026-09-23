---
okf_version: "0.2"
type: Class
title: Healthcare AI
resource: urn:ngm:class:healthcare-ai
domain: artificial-intelligence
description: "Healthcare AI is the systematic application of machine learning, natural language processing, computer vision, and large language models to clinical and operational problems in medicine—encompassing diagnostic imaging analysis, clinical decision support, drug discovery, genomic interpretation, patient outcome prediction, and administrative automation. The field operates under stringent regulatory "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-application
requires:
  - urn:ngm:class:electronic-health-record
  - urn:ngm:class:data-privacy
  - urn:ngm:class:explainability
  - urn:ngm:class:electronic-health-record
  - urn:ngm:class:health-data-governance
  - urn:ngm:class:explainability
enables:
  - urn:ngm:class:clinical-decision-support
  - urn:ngm:class:drug-discovery
  - urn:ngm:class:precision-medicine
  - urn:ngm:class:patient-risk-stratification
  - urn:ngm:class:genomic-analysis
dependsOn:
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:health-data-interoperability
contrastsWith:
  - urn:ngm:class:clinical-decision-support
  - urn:ngm:class:expert-systems
  - urn:ngm:class:clinical-decision-support
  - urn:ngm:class:expert-systems
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:blockchain-health-data
uses:
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:deep-learning
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:large-language-models
  - urn:ngm:class:computer-vision
  - urn:ngm:class:federated-learning
standardizedBy:
  - urn:ngm:class:hl7-fhir
  - urn:ngm:class:dicom
  - urn:ngm:class:fda-samd-regulation
  - urn:ngm:class:eu-mdr
relatedTo:
  - urn:ngm:class:radiology-ai
  - urn:ngm:class:pathology-ai
  - urn:ngm:class:bias-in-ai
  - urn:ngm:class:ai-ethics
---

# Healthcare AI

Healthcare AI is the systematic application of machine learning, natural language processing, computer vision, and large language models to clinical and operational problems in medicine—encompassing diagnostic imaging analysis, clinical decision support, drug discovery, genomic interpretation, patient outcome prediction, and administrative automation. The field operates under stringent regulatory oversight (FDA, MHRA, EU MDR/IVDR) requiring prospective clinical validation, post-market surveillance, and clearly defined human-AI workflow integration to ensure patient safety. Fairness, explainability, and bias auditing are central technical and ethical concerns given the high-stakes nature of clinical decisions, where model underperformance across demographic subgroups can directly harm patients. Federated learning, differential privacy, and synthetic data generation are increasingly adopted to enable model training without centralising sensitive patient records.
