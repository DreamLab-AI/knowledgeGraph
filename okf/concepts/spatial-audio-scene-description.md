---
okf_version: "0.2"
type: Class
title: Spatial Audio Scene Description
resource: urn:ngm:class:spatial-audio-scene-description
domain: spatial-computing
description: A data model for encoding sound sources, listener positions, acoustic environments, and spatial audio metadata in three-dimensional space to enable immersive and realistic audio experiences in virtual environments.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-standards-and-interop
hasPart:
  - urn:ngm:class:spatial-metadata
  - urn:ngm:class:audio-object
  - urn:ngm:class:sound-source-position
  - urn:ngm:class:listener-position
  - urn:ngm:class:acoustic-properties
  - urn:ngm:class:ambisonics-representation
requires:
  - urn:ngm:class:coordinate-system
  - urn:ngm:class:audio-codec
  - urn:ngm:class:rendering-engine
  - urn:ngm:class:spatial-audio-processor
  - urn:ngm:class:coordinate-system
enables:
  - urn:ngm:class:binaural-rendering
  - urn:ngm:class:object-based-audio
  - urn:ngm:class:ambisonics-playback
  - urn:ngm:class:dynamic-audio-mixing
  - urn:ngm:class:acoustic-realism
dependsOn:
  - urn:ngm:class:head-tracking-system
  - urn:ngm:class:room-acoustics-model
  - urn:ngm:class:audio-streaming-protocol
partOf:
  - urn:ngm:class:scene-graph
  - urn:ngm:class:immersive-audio-system
  - urn:ngm:class:virtual-environment-specification
  - urn:ngm:class:scene-graph
---

# Spatial Audio Scene Description

A data model for encoding sound sources, listener positions, acoustic environments, and spatial audio metadata in three-dimensional space to enable immersive and realistic audio experiences in virtual environments.
