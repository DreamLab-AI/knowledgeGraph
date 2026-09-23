---
okf_version: "0.2"
type: Class
title: Biometric Identification
resource: urn:ngm:class:biometric-identification
domain: spatial-computing
description: Biometric identification is the recognition of an individual by measuring and matching distinctive physiological or behavioural characteristics, such as fingerprints, facial geometry, iris patterns, voice or gait. It captures a sample, extracts a feature template and compares it against enrolled templates to verify a claimed identity (one-to-one) or identify an unknown subject (one-to-many). It un
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:identity-verification
hasPart:
  - urn:ngm:class:iris-recognition
  - urn:ngm:class:facial-recognition
requires:
  - urn:ngm:class:liveness-detection
  - urn:ngm:class:deep-learning
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:liveness-detection
dependsOn:
  - urn:ngm:class:neural-network
contrastsWith:
  - urn:ngm:class:privacy-preserving
bridgesTo:
  - urn:ngm:class:authentication
  - urn:ngm:class:identity-verification
uses:
  - urn:ngm:class:facial-recognition
  - urn:ngm:class:fingerprint-recognition
supports:
  - urn:ngm:class:identity-verification
relatedTo:
  - urn:ngm:class:privacy-preserving
  - urn:ngm:class:liveness-detection
---

# Biometric Identification

Biometric identification is the recognition of an individual by measuring and matching distinctive physiological or behavioural characteristics, such as fingerprints, facial geometry, iris patterns, voice or gait. It captures a sample, extracts a feature template and compares it against enrolled templates to verify a claimed identity (one-to-one) or identify an unknown subject (one-to-many). It underpins access control, border management and device authentication, and raises significant privacy considerations.
