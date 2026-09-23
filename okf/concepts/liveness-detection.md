---
okf_version: "0.2"
type: Class
title: Liveness Detection
resource: urn:ngm:class:liveness-detection
domain: security
description: Liveness detection is a set of techniques used during biometric capture to verify that the presented sample originates from a live, present human rather than a spoof such as a photograph, mask, recording or deepfake. It distinguishes genuine presentations from presentation attacks by analysing physiological signals, motion, texture and challenge responses, and is standardised under ISO/IEC 30107 a
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:biometric-verification
hasPart:
  - urn:ngm:class:anomaly-detection
requires:
  - urn:ngm:class:facial-recognition
  - urn:ngm:class:image-processing
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:fraud-detection
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:convolutional-neural-network
supports:
  - urn:ngm:class:kyc
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:kyc
partOf:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:identity-verification
relatedTo:
  - urn:ngm:class:access-control
  - urn:ngm:class:cybersecurity
---

# Liveness Detection

Liveness detection is a set of techniques used during biometric capture to verify that the presented sample originates from a live, present human rather than a spoof such as a photograph, mask, recording or deepfake. It distinguishes genuine presentations from presentation attacks by analysing physiological signals, motion, texture and challenge responses, and is standardised under ISO/IEC 30107 as presentation attack detection. Liveness detection is essential to the integrity of remote identity verification, biometric authentication and onboarding flows.
