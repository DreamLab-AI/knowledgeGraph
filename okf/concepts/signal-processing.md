---
okf_version: "0.2"
type: Class
title: Signal Processing
resource: urn:ngm:class:signal-processing
domain: ai
description: Signal processing is the mathematical and engineering discipline concerned with the representation, analysis, transformation, synthesis, filtering, and compression of signals — time-varying or spatially varying quantities such as audio, video, sensor telemetry, radio-frequency waveforms, biomedical readings, and seismic data. It encompasses both continuous (analogue) and discrete (digital) domains
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:fourier-transform
  - urn:ngm:class:sampling-theory
  - urn:ngm:class:filter-design
requires:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:probability-theory
enables:
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:spatial-audio
  - urn:ngm:class:image-processing
  - urn:ngm:class:radar
  - urn:ngm:class:depth-sensing
  - urn:ngm:class:radar
contrastsWith:
  - urn:ngm:class:symbolic-ai
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:neural-network
uses:
  - urn:ngm:class:fast-fourier-transform
  - urn:ngm:class:wavelet-transform
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:compressed-sensing
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:telecommunications
  - urn:ngm:class:motion-capture
relatedTo:
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:noise-reduction
  - urn:ngm:class:data-compression
  - urn:ngm:class:render-pipeline
  - urn:ngm:class:data
---

# Signal Processing

Signal processing is the mathematical and engineering discipline concerned with the representation, analysis, transformation, synthesis, filtering, and compression of signals — time-varying or spatially varying quantities such as audio, video, sensor telemetry, radio-frequency waveforms, biomedical readings, and seismic data. It encompasses both continuous (analogue) and discrete (digital) domains, applying techniques from Fourier analysis, linear algebra, probability theory, and optimisation to extract information, remove noise, encode data, and control systems. Digital signal processing (DSP) executes these operations on sampled data using algorithms implemented in hardware or software, making it foundational to telecommunications, audio engineering, image processing, radar, and AI feature extraction pipelines. Modern signal processing increasingly fuses classical deterministic methods with statistical and machine-learning approaches, enabling adaptive filters, compressed sensing, and deep neural network-based feature representations.
