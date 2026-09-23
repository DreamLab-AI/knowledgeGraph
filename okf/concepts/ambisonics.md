---
okf_version: "0.2"
type: Class
title: Ambisonics
resource: urn:ngm:class:ambisonics
domain: spatial-computing
description: Ambisonics is a full-sphere surround sound technique that represents a sound field independently of any specific loudspeaker layout by encoding it into spherical harmonic components. A captured or synthesised scene is stored as B-format channels and later decoded to an arbitrary speaker array or to binaural headphones, allowing the same recording to be rendered for many playback configurations. It
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:spatial-audio
hasPart:
  - urn:ngm:class:spherical-harmonics
enables:
  - urn:ngm:class:spatial-audio
  - urn:ngm:class:immersive-audio
dependsOn:
  - urn:ngm:class:signal-processing
implements:
  - urn:ngm:class:audio-spatialization
uses:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:audio-codec
supports:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
relatedTo:
  - urn:ngm:class:audio-system
  - urn:ngm:class:psychoacoustics
---

# Ambisonics

Ambisonics is a full-sphere surround sound technique that represents a sound field independently of any specific loudspeaker layout by encoding it into spherical harmonic components. A captured or synthesised scene is stored as B-format channels and later decoded to an arbitrary speaker array or to binaural headphones, allowing the same recording to be rendered for many playback configurations. It is widely used for immersive and head-tracked audio in virtual and augmented reality.
