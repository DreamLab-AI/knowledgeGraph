---
okf_version: "0.2"
type: Class
title: Anomaly Detection
resource: urn:ngm:class:anomaly-detection
domain: artificial-intelligence
description: "Anomaly detection is a machine learning and statistical discipline concerned with identifying observations, sequences, or structural patterns that deviate significantly from a learned or assumed norm, signalling potential faults, threats, or novel phenomena. It operates across three principal modes: point anomaly detection (a single observation is outlying relative to the full dataset), contextual"
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:ai-technique
  - urn:ngm:class:machine-learning-discipline
hasPart:
  - urn:ngm:class:point-anomaly-detection
  - urn:ngm:class:contextual-anomaly-detection
  - urn:ngm:class:collective-anomaly-detection
requires:
  - urn:ngm:class:statistical-modelling
  - urn:ngm:class:threshold-calibration
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:data-preprocessing
enables:
  - urn:ngm:class:fraud-detection
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:predictive-maintenance
  - urn:ngm:class:intrusion-detection-system
  - urn:ngm:class:model-monitoring
dependsOn:
  - urn:ngm:class:feature-engineering
  - urn:ngm:class:data-preprocessing
  - urn:ngm:class:pattern-recognition
implements:
  - urn:ngm:class:isolation-forest
  - urn:ngm:class:one-class-svm
  - urn:ngm:class:local-outlier-factor
  - urn:ngm:class:gaussian-mixture-model
  - urn:ngm:class:dbscan
contrastsWith:
  - urn:ngm:class:supervised-learning
  - urn:ngm:class:classification
bridgesTo:
  - urn:ngm:class:network-security
  - urn:ngm:class:sensor-data
  - urn:ngm:class:sensor-data
uses:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:pattern-recognition
  - urn:ngm:class:deep-learning
  - urn:ngm:class:autoencoder
  - urn:ngm:class:graph-neural-networks
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:vae
  - urn:ngm:class:normalising-flows
  - urn:ngm:class:lstm
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:active-learning
  - urn:ngm:class:shap
supports:
  - urn:ngm:class:network-security
  - urn:ngm:class:sensor-data
relatedTo:
  - urn:ngm:class:time-series-forecasting
  - urn:ngm:class:concept-drift
  - urn:ngm:class:model-monitoring
  - urn:ngm:class:outlier-detection
  - urn:ngm:class:change-point-detection
  - urn:ngm:class:foundation-model
  - urn:ngm:class:time-series
---

# Anomaly Detection

Anomaly detection is a machine learning and statistical discipline concerned with identifying observations, sequences, or structural patterns that deviate significantly from a learned or assumed norm, signalling potential faults, threats, or novel phenomena. It operates across three principal modes: point anomaly detection (a single observation is outlying relative to the full dataset), contextual anomaly detection (an observation is anomalous given its local context, such as a transaction at an unusual time of day), and collective anomaly detection (a subsequence or group of observations is jointly anomalous relative to expected behaviour). The field draws on statistical modelling, machine learning, and signal processing to serve applications ranging from fraud detection and network intrusion detection to industrial fault monitoring, medical diagnostics, and log analysis.
