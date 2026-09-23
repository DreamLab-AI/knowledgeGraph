---
okf_version: "0.2"
type: Class
title: Audio Spatialization
resource: urn:ngm:class:audio-spatialization
domain: spatial-computing
description: Audio Spatialization is the technique of positioning sounds in three-dimensional space using Head-Related Transfer Functions (HRTFs), binaural processing, and ambisonics to create realistic 3D audio experiences that respond to listener position and head movement in virtual reality and immersive applications.
maturity: draft
quality: 0.68
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:spatial-audio
hasPart:
  - urn:ngm:class:hrtf-filters
  - urn:ngm:class:binaural-rendering
  - urn:ngm:class:ambisonics
  - urn:ngm:class:interaural-level-difference
  - urn:ngm:class:interaural-time-difference
requires:
  - urn:ngm:class:binaural-rendering
  - urn:ngm:class:optical-tracking
  - urn:ngm:class:hrtf-filters
  - urn:ngm:class:sensor-input
  - urn:ngm:class:optical-tracking
enables:
  - urn:ngm:class:3-d-perception
  - urn:ngm:class:immersive-audio
  - urn:ngm:class:localisation
  - urn:ngm:class:presence
  - urn:ngm:class:3-d-perception
  - urn:ngm:class:localisation
contrastsWith:
  - urn:ngm:class:stereo-audio
bridgesTo:
  - urn:ngm:class:metaverse
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:sensor-input
uses:
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:convolution
supports:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
standardizedBy:
  - urn:ngm:class:aes69-sofa
partOf:
  - urn:ngm:class:spatial-audio
  - urn:ngm:class:immersive-audio
relatedTo:
  - urn:ngm:class:room-acoustics
  - urn:ngm:class:psychoacoustics
---

# Audio Spatialization

Audio Spatialization is the technique of positioning sounds in three-dimensional space using Head-Related Transfer Functions (HRTFs), binaural processing, and ambisonics to create realistic 3D audio experiences that respond to listener position and head movement in virtual reality and immersive applications.
