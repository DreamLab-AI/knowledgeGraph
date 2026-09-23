---
okf_version: "0.2"
type: Class
title: Digital Watermarking
resource: urn:ngm:class:digital-watermarking
domain: artificial-intelligence
description: "Digital watermarking is the technique of embedding identifying or authenticating information directly into digital content such as images, audio, video, text, or model outputs, ideally so the mark is imperceptible yet recoverable. A watermark may be robust, surviving compression and editing, or fragile, breaking on tampering to signal alteration. It is increasingly used to mark AI-generated media "
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:content-provenance
  - urn:ngm:class:information-hiding
  - urn:ngm:class:media-security
  - urn:ngm:class:digital-media-authentication
hasPart:
  - urn:ngm:class:robustness
  - urn:ngm:class:imperceptibility
  - urn:ngm:class:watermark-capacity
  - urn:ngm:class:watermark-encoder
  - urn:ngm:class:watermark-detector
  - urn:ngm:class:watermark-payload
  - urn:ngm:class:cover-medium
  - urn:ngm:class:cryptographic-key
requires:
  - urn:ngm:class:metadata
  - urn:ngm:class:cryptographic-key
  - urn:ngm:class:cover-medium
  - urn:ngm:class:statistical-signal-model
  - urn:ngm:class:error-correction
enables:
  - urn:ngm:class:content-authentication
  - urn:ngm:class:copyright-protection
  - urn:ngm:class:attribution
  - urn:ngm:class:leak-tracing
  - urn:ngm:class:ai-origin-declaration
  - urn:ngm:class:provenance-verification
  - urn:ngm:class:tamper-detection
  - urn:ngm:class:model-ownership-verification
dependsOn:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:information-theory
  - urn:ngm:class:deep-learning
  - urn:ngm:class:cryptography
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:large-language-model
implements:
  - urn:ngm:class:steganographic-embedding
  - urn:ngm:class:frequency-domain-encoding
  - urn:ngm:class:latent-space-perturbation
  - urn:ngm:class:token-probability-biasing
  - urn:ngm:class:spread-spectrum-signalling
contrastsWith:
  - urn:ngm:class:visible-watermark
  - urn:ngm:class:cryptographic-signing
  - urn:ngm:class:steganography
  - urn:ngm:class:c2pa-manifest
  - urn:ngm:class:fingerprinting
  - urn:ngm:class:perceptual-hashing
bridgesTo:
  - urn:ngm:class:c2-pa
  - urn:ngm:class:data-provenance
uses:
  - urn:ngm:class:steganography
  - urn:ngm:class:discrete-cosine-transform
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:large-language-model
  - urn:ngm:class:error-correction
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:zero-knowledge-proof
supports:
  - urn:ngm:class:ai-origin-declaration
  - urn:ngm:class:deepfake-detection
  - urn:ngm:class:digital-rights-management
  - urn:ngm:class:content-moderation
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:data-provenance
  - urn:ngm:class:c2-pa
standardizedBy:
  - urn:ngm:class:c2-pa-standard
  - urn:ngm:class:iso-12639
  - urn:ngm:class:jpeg-ai-working-group
  - urn:ngm:class:nist-digital-media-forensics
  - urn:ngm:class:ieee-wifs
relatedTo:
  - urn:ngm:class:synthetic-media
  - urn:ngm:class:generative-ai
  - urn:ngm:class:digital-rights-management
  - urn:ngm:class:content-provenance
  - urn:ngm:class:data-provenance
  - urn:ngm:class:c2-pa
  - urn:ngm:class:deepfakes
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:information-security
  - urn:ngm:class:neural-network
---

# Digital Watermarking

Digital watermarking is the technique of embedding identifying or authenticating information directly into digital content such as images, audio, video, text, or model outputs, ideally so the mark is imperceptible yet recoverable. A watermark may be robust, surviving compression and editing, or fragile, breaking on tampering to signal alteration. It is increasingly used to mark AI-generated media for provenance and to support copyright protection and content authentication.
