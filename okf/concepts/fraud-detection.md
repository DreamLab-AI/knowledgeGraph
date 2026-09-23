---
okf_version: "0.2"
type: Class
title: Fraud Detection
resource: urn:ngm:class:fraud-detection
domain: security
description: Fraud detection is the automated or semi-automated identification of deceptive, unauthorised, or anomalous activities—such as payment fraud, account takeover, synthetic identity creation, and insurance claim manipulation—using statistical models, machine learning classifiers, graph analytics, and rule-based engines applied to transactional, behavioural, and network data. The field operates under s
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:ai-application
requires:
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:data-labelling
  - urn:ngm:class:real-time-data-pipelines
enables:
  - urn:ngm:class:aml
  - urn:ngm:class:risk-management
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:identity-verification
dependsOn:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:explainable-ai
contrastsWith:
  - urn:ngm:class:threat-intelligence
  - urn:ngm:class:intrusion-detection-systems
bridgesTo:
  - urn:ngm:class:blockchain-analytics
  - urn:ngm:class:federated-learning
uses:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:graph-neural-networks
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:stream-processing
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:behavioural-biometrics
  - urn:ngm:class:stream-processing
relatedTo:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:digital-identity
  - urn:ngm:class:kyc
  - urn:ngm:class:credit-risk
---

# Fraud Detection

Fraud detection is the automated or semi-automated identification of deceptive, unauthorised, or anomalous activities—such as payment fraud, account takeover, synthetic identity creation, and insurance claim manipulation—using statistical models, machine learning classifiers, graph analytics, and rule-based engines applied to transactional, behavioural, and network data. The field operates under severe class-imbalance constraints where fraudulent events are rare relative to legitimate activity, demanding specialised sampling strategies such as SMOTE and evaluation metrics including precision-recall curves and F1 scores. Modern production systems combine ensemble methods such as gradient-boosted trees for rapid inference with deep learning approaches including graph neural networks and LSTM sequence models to capture both point-in-time anomalies and temporal patterns indicative of coordinated fraud schemes. Explainability of model decisions is increasingly mandated by financial regulators to support human review of adverse determinations and compliance with consumer protection law.
