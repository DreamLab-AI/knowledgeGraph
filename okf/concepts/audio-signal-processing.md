---
okf_version: "0.2"
type: Class
title: Audio Signal Processing
resource: urn:ngm:class:audio-signal-processing
domain: ai
description: Audio Signal Processing is the application of signal processing theory and algorithms to the analysis, transformation, synthesis, and encoding of audio-frequency signals, operating in either the time domain or frequency domain. It encompasses filtering, equalisation, dynamic range control, time-frequency analysis, psychoacoustic coding, and spatial rendering as applied to sound reproduction, commu
maturity: mature
quality: 0.92
is-a:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:audio-processing
hasPart:
  - urn:ngm:class:digital-filter
  - urn:ngm:class:fast-fourier-transform
  - urn:ngm:class:equalisation
  - urn:ngm:class:dynamic-range-compression
  - urn:ngm:class:echo-cancellation
  - urn:ngm:class:beamforming
  - urn:ngm:class:noise-cancellation
  - urn:ngm:class:source-separation
requires:
  - urn:ngm:class:real-time-computing
  - urn:ngm:class:digital-signal-processor
  - urn:ngm:class:pulse-code-modulation
  - urn:ngm:class:fourier-analysis
enables:
  - urn:ngm:class:spatial-audio
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:speech-synthesis
  - urn:ngm:class:audio-compression
  - urn:ngm:class:noise-suppression
  - urn:ngm:class:speech-synthesis
  - urn:ngm:class:binaural-audio
  - urn:ngm:class:audio-spatialization
  - urn:ngm:class:music-information-retrieval
  - urn:ngm:class:automatic-speech-recognition
dependsOn:
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:audio-parameters
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:embedded-systems
implements:
  - urn:ngm:class:convolution
  - urn:ngm:class:fourier-transform
  - urn:ngm:class:psychoacoustics
contrastsWith:
  - urn:ngm:class:audio-synthesis
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:audio-parameters
  - urn:ngm:class:pulse-code-modulation
  - urn:ngm:class:convolution
  - urn:ngm:class:mfcc
  - urn:ngm:class:mel-spectrogram
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:deep-learning
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:transformer
  - urn:ngm:class:diffusion-model
supports:
  - urn:ngm:class:telecommunications
  - urn:ngm:class:audio-engine
  - urn:ngm:class:audio-system
  - urn:ngm:class:adaptive-music
  - urn:ngm:class:hearing-aids
  - urn:ngm:class:web-rtc
standardizedBy:
  - urn:ngm:class:telecommunications
relatedTo:
  - urn:ngm:class:audio-engine
  - urn:ngm:class:audio-processing-system
  - urn:ngm:class:neural-audio-codec
  - urn:ngm:class:audio-codec
  - urn:ngm:class:audio-generation
  - urn:ngm:class:audio-technology
  - urn:ngm:class:generative-ai
---

# Audio Signal Processing

Audio Signal Processing is the application of signal processing theory and algorithms to the analysis, transformation, synthesis, and encoding of audio-frequency signals, operating in either the time domain or frequency domain. It encompasses filtering, equalisation, dynamic range control, time-frequency analysis, psychoacoustic coding, and spatial rendering as applied to sound reproduction, communication, and computational audition systems.
