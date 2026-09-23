---
okf_version: "0.2"
type: Class
title: Audio Processing
resource: urn:ngm:class:audio-processing
domain: ai
description: Audio processing is the computational manipulation of digital audio signals to transform, analyse, enhance, or synthesise sound, encompassing operations such as filtering, compression, equalisation, spatialisation, and feature extraction. It operates on discrete-time representations of acoustic waveforms using algorithms drawn from digital signal processing theory, spanning both time-domain and fr
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:digital-signal-processing
hasPart:
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:audio-codec
  - urn:ngm:class:noise-cancellation
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:audio-spatialisation
  - urn:ngm:class:source-separation
  - urn:ngm:class:spectrogram
  - urn:ngm:class:waveform
requires:
  - urn:ngm:class:analogue-to-digital-conversion
  - urn:ngm:class:fast-fourier-transform
  - urn:ngm:class:spectrogram
  - urn:ngm:class:psychoacoustics
  - urn:ngm:class:nyquist-shannon-sampling-theorem
enables:
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:spatial-audio-system
  - urn:ngm:class:immersive-audio-system
  - urn:ngm:class:text-to-speech
  - urn:ngm:class:music-generation
  - urn:ngm:class:voice-activity-detection
  - urn:ngm:class:audio-generation
  - urn:ngm:class:music-information-retrieval
  - urn:ngm:class:noise-cancellation
dependsOn:
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:fourier-analysis
  - urn:ngm:class:psychoacoustics
  - urn:ngm:class:nyquist-shannon-sampling-theorem
  - urn:ngm:class:machine-learning-discipline
contrastsWith:
  - urn:ngm:class:image-processing
  - urn:ngm:class:analogue-signal-processing
bridgesTo:
  - urn:ngm:class:audio-spatialization
  - urn:ngm:class:spatial-audio
  - urn:ngm:class:extended-reality
  - urn:ngm:class:audio-spatialisation
  - urn:ngm:class:audio-generation
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:audio-parameters
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:residual-vector-quantisation
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
supports:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:telecommunications
  - urn:ngm:class:extended-reality
  - urn:ngm:class:music-information-retrieval
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:audio-generation
standardizedBy:
  - urn:ngm:class:mpeg-h-audio
  - urn:ngm:class:opus-codec
partOf:
  - urn:ngm:class:multimedia-processing
  - urn:ngm:class:signal-processing
relatedTo:
  - urn:ngm:class:music-information-retrieval
  - urn:ngm:class:psychoacoustics
  - urn:ngm:class:audio-processing-system
  - urn:ngm:class:waveform
  - urn:ngm:class:audio-generation
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:deep-learning
  - urn:ngm:class:natural-language-processing
---

# Audio Processing

Audio processing is the computational manipulation of digital audio signals to transform, analyse, enhance, or synthesise sound, encompassing operations such as filtering, compression, equalisation, spatialisation, and feature extraction. It operates on discrete-time representations of acoustic waveforms using algorithms drawn from digital signal processing theory, spanning both time-domain and frequency-domain approaches. Applications range from consumer media playback and telecommunications to professional studio production, speech recognition pipelines, neural audio codecs, and immersive spatial audio for extended reality environments. Machine learning has significantly expanded the discipline, enabling source separation, generative synthesis, and zero-shot audio enhancement that were previously intractable.
