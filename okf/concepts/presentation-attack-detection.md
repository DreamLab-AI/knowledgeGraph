---
okf_version: "0.2"
type: Class
title: Presentation Attack Detection
resource: urn:ngm:class:presentation-attack-detection
domain: security
description: Presentation attack detection (PAD) is the set of techniques that determine whether a biometric sample is presented by a genuine, live subject or by an artefact intended to spoof the system. Attacks include printed photographs, replayed video, silicone fingerprints, and three-dimensional masks. PAD, also known as liveness or anti-spoofing analysis, is standardised under ISO/IEC 30107 and is essent
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:biometric-authentication
requires:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:model-training
enables:
  - urn:ngm:class:multi-factor-authentication
dependsOn:
  - urn:ngm:class:face-recognition
contrastsWith:
  - urn:ngm:class:adversarial-attack
bridgesTo:
  - urn:ngm:class:deepfake-detection
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:eye-tracking
supports:
  - urn:ngm:class:authentication
standardizedBy:
  - urn:ngm:class:standards
partOf:
  - urn:ngm:class:biometric-authentication
relatedTo:
  - urn:ngm:class:face-recognition
  - urn:ngm:class:authentication
  - urn:ngm:class:deepfake-detection
---

# Presentation Attack Detection

Presentation attack detection (PAD) is the set of techniques that determine whether a biometric sample is presented by a genuine, live subject or by an artefact intended to spoof the system. Attacks include printed photographs, replayed video, silicone fingerprints, and three-dimensional masks. PAD, also known as liveness or anti-spoofing analysis, is standardised under ISO/IEC 30107 and is essential to the trustworthiness of biometric authentication.
