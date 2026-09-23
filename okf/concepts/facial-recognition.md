---
okf_version: "0.2"
type: Class
title: Facial Recognition
resource: urn:ngm:class:facial-recognition
domain: ai
description: Facial Recognition is a computer vision technology that automatically detects, aligns, and identifies or verifies individuals by analysing facial features extracted from images or video frames, producing compact numerical embeddings that encode discriminative facial geometry and appearance. These embeddings are compared against a gallery of known identities using similarity metrics (cosine similar
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:computer-vision
requires:
  - urn:ngm:class:image-preprocessing
  - urn:ngm:class:training-data
  - urn:ngm:class:face-detection
enables:
  - urn:ngm:class:digital-identity-verification
  - urn:ngm:class:biometric-verification
  - urn:ngm:class:access-control
  - urn:ngm:class:surveillance
  - urn:ngm:class:border-control
contrastsWith:
  - urn:ngm:class:deepfake-detection
  - urn:ngm:class:iris-recognition
  - urn:ngm:class:fingerprint-recognition
bridgesTo:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:smart-city
uses:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:deep-learning
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:camera
  - urn:ngm:class:nearest-neighbor-search
  - urn:ngm:class:face-embedding
  - urn:ngm:class:nearest-neighbor-search
standardizedBy:
  - urn:ngm:class:iso-iec-19794
  - urn:ngm:class:nist-frvt
relatedTo:
  - urn:ngm:class:data-protection
  - urn:ngm:class:privacy
  - urn:ngm:class:algorithmic-bias
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:eu-ai-act-regulatory-instrument
---

# Facial Recognition

Facial Recognition is a computer vision technology that automatically detects, aligns, and identifies or verifies individuals by analysing facial features extracted from images or video frames, producing compact numerical embeddings that encode discriminative facial geometry and appearance. These embeddings are compared against a gallery of known identities using similarity metrics (cosine similarity or L2 distance), operating in one-to-one verification mode (confirming claimed identity) or one-to-many identification mode (searching against a database of enrolled individuals). Modern systems rely on deep convolutional neural networks trained on large-scale labelled datasets and are subject to increasing regulatory oversight relating to accuracy disparities across demographic groups, privacy obligations, and prohibition in high-risk contexts under frameworks such as the EU AI Act.
