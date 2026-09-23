---
okf_version: "0.2"
type: Class
title: Face Recognition
resource: urn:ngm:class:face-recognition
domain: artificial-intelligence
description: Face recognition is a biometric identification and verification technology that locates human faces in images or video frames, extracts a compact numerical embedding of facial geometry and texture, and compares that embedding against one or more enrolled templates to establish identity. It is a specialised subfield of Computer Vision and Biometric Authentication that combines deep convolutional fe
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:computer-vision
hasPart:
  - urn:ngm:class:face-detection
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:face-alignment
  - urn:ngm:class:embedding-generation
  - urn:ngm:class:presentation-attack-detection
requires:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:metric-learning
  - urn:ngm:class:image-processing
  - urn:ngm:class:pattern-recognition
enables:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:digital-identity-verification
  - urn:ngm:class:surveillance-systems
  - urn:ngm:class:emotion-recognition
  - urn:ngm:class:access-control
dependsOn:
  - urn:ngm:class:annotated-dataset
  - urn:ngm:class:gpu-computing
implements:
  - urn:ngm:class:arc-face
  - urn:ngm:class:adaface
contrastsWith:
  - urn:ngm:class:iris-recognition
  - urn:ngm:class:fingerprint-recognition
supports:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:facial-action-coding-system
  - urn:ngm:class:affective-computing
standardizedBy:
  - urn:ngm:class:iso-iec-19794
  - urn:ngm:class:nist-frvt
  - urn:ngm:class:iso-iec-30107
relatedTo:
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:gdpr
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:facial-action-coding-system
  - urn:ngm:class:deepfake-detection
  - urn:ngm:class:data-protection
  - urn:ngm:class:motion-tracking
  - urn:ngm:class:object-detection
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:medical-imaging-ai
  - urn:ngm:class:transfer-learning
---

# Face Recognition

Face recognition is a biometric identification and verification technology that locates human faces in images or video frames, extracts a compact numerical embedding of facial geometry and texture, and compares that embedding against one or more enrolled templates to establish identity. It is a specialised subfield of Computer Vision and Biometric Authentication that combines deep convolutional feature learning with metric-learning loss functions such as ArcFace and AdaFace to achieve sub-second, high-accuracy identification at scale.
