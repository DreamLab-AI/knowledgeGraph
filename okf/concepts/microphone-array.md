---
okf_version: "0.2"
type: Class
title: Microphone Array
resource: urn:ngm:class:microphone-array
domain: spatial-computing
description: A microphone array is an arrangement of multiple microphone elements at known spatial positions whose signals are combined to infer or shape the directional properties of captured sound. By exploiting the time and phase differences between elements, an array supports beamforming, source localisation and spatial noise suppression that a single microphone cannot achieve. Microphone arrays underpin f
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:audio-system
hasPart:
  - urn:ngm:class:microphone
  - urn:ngm:class:sensor
requires:
  - urn:ngm:class:digital-signal-processor
  - urn:ngm:class:signal-processing
enables:
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:spatial-audio
uses:
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:sensor-fusion
supports:
  - urn:ngm:class:immersive-audio
  - urn:ngm:class:ambisonics
partOf:
  - urn:ngm:class:audio-system
relatedTo:
  - urn:ngm:class:binaural-audio
  - urn:ngm:class:head-related-transfer-function
---

# Microphone Array

A microphone array is an arrangement of multiple microphone elements at known spatial positions whose signals are combined to infer or shape the directional properties of captured sound. By exploiting the time and phase differences between elements, an array supports beamforming, source localisation and spatial noise suppression that a single microphone cannot achieve. Microphone arrays underpin far-field voice capture, conferencing systems and spatial-audio acquisition.
