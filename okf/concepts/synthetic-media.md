---
okf_version: "0.2"
type: Class
title: Synthetic Media
resource: urn:ngm:class:synthetic-media
domain: ai
description: Synthetic Media refers to audio, video, image, and text content that is wholly generated or substantially manipulated by computational systems — primarily AI models — rather than captured directly from reality. It encompasses outputs from generative adversarial networks, diffusion models, large language models, neural text-to-speech systems, and neural rendering pipelines, including deepfakes, AI-
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:generative-ai
hasPart:
  - urn:ngm:class:text-to-speech
  - urn:ngm:class:text-to-speech
  - urn:ngm:class:synthetic-video
  - urn:ngm:class:ai-generated-text
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:foundation-model
enables:
  - urn:ngm:class:deepfakes
  - urn:ngm:class:voice-cloning
  - urn:ngm:class:text-to-image
  - urn:ngm:class:avatar-synthesis
contrastsWith:
  - urn:ngm:class:deepfake-detection
  - urn:ngm:class:media-authenticity
bridgesTo:
  - urn:ngm:class:ai-governance
  - urn:ngm:class:digital-identity
uses:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:large-language-model
  - urn:ngm:class:text-to-speech
  - urn:ngm:class:video-generation
  - urn:ngm:class:image-generation
standardizedBy:
  - urn:ngm:class:c2-pa
  - urn:ngm:class:ai-generated-content-disclosure
relatedTo:
  - urn:ngm:class:content-moderation
  - urn:ngm:class:disinformation
  - urn:ngm:class:digital-watermarking
  - urn:ngm:class:content-provenance
---

# Synthetic Media

Synthetic Media refers to audio, video, image, and text content that is wholly generated or substantially manipulated by computational systems — primarily AI models — rather than captured directly from reality. It encompasses outputs from generative adversarial networks, diffusion models, large language models, neural text-to-speech systems, and neural rendering pipelines, including deepfakes, AI-generated images, cloned voices, and fully synthetic video sequences. The concept spans both creative and malicious applications, from cinematic visual effects and interactive media to disinformation campaigns and identity fraud, making detection, provenance tracking, and regulatory disclosure central concerns. Synthetic media sits at the convergence of generative AI capability, content authenticity infrastructure, and digital governance.
