---
okf_version: "0.2"
type: Class
title: Head Related Transfer Function
resource: urn:ngm:class:head-related-transfer-function
domain: spatial-computing
description: A head-related transfer function (HRTF) describes how sound from a point in space is filtered by the listener's head, torso and outer ears before reaching each eardrum. It captures the frequency-dependent level, time and spectral cues that the auditory system uses to localise sound. Convolving a mono source with the appropriate left and right HRTFs synthesises a convincing three-dimensional positi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:spatial-audio
requires:
  - urn:ngm:class:digital-signal-processor
enables:
  - urn:ngm:class:binaural-audio
  - urn:ngm:class:immersive-audio
implements:
  - urn:ngm:class:spatial-audio
uses:
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:signal-processing
supports:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:ambisonics
partOf:
  - urn:ngm:class:spatial-audio
relatedTo:
  - urn:ngm:class:audio-system
  - urn:ngm:class:microphone-array
---

# Head Related Transfer Function

A head-related transfer function (HRTF) describes how sound from a point in space is filtered by the listener's head, torso and outer ears before reaching each eardrum. It captures the frequency-dependent level, time and spectral cues that the auditory system uses to localise sound. Convolving a mono source with the appropriate left and right HRTFs synthesises a convincing three-dimensional position over headphones, making the HRTF the mathematical core of binaural and spatial audio rendering.
