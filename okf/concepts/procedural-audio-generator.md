---
okf_version: "0.2"
type: Class
title: Procedural Audio Generator
resource: urn:ngm:class:procedural-audio-generator
domain: spatial-computing
description: System that produces context-sensitive sound effects algorithmically in real-time, generating audio content through computational rules rather than playing back pre-recorded samples.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-content-and-assets
hasPart:
  - urn:ngm:class:audio-engine
  - urn:ngm:class:parameter-modulation-system
  - urn:ngm:class:audio-engine
  - urn:ngm:class:context-analysis-module
  - urn:ngm:class:real-time-mixer
requires:
  - urn:ngm:class:context-awareness-system
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:audio-api
enables:
  - urn:ngm:class:adaptive-music
  - urn:ngm:class:dynamic-soundscapes
  - urn:ngm:class:interactive-audio
  - urn:ngm:class:responsive-sound-effects
dependsOn:
  - urn:ngm:class:synthesis-algorithms
  - urn:ngm:class:audio-parameters
  - urn:ngm:class:event-system
partOf:
  - urn:ngm:class:audio-rendering-pipeline
---

# Procedural Audio Generator

System that produces context-sensitive sound effects algorithmically in real-time, generating audio content through computational rules rather than playing back pre-recorded samples.
