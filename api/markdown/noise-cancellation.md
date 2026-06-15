- ### Definition
  - [[Noise Cancellation]] is a [[Signal Processing]] technique that removes unwanted sound from audio streams.
  - Active approaches generate anti-phase waveforms; modern AI-based methods leverage [[Neural Network]] models trained on large corpora of noise samples.
  - It is foundational to quality [[Speech Recognition]] and effective [[Voice Communication]] in noisy environments.

- ### Overview
  - Noise cancellation divides into active (ANC), passive, and hybrid variants. ANC microphones sample ambient noise and produce an inverted waveform in real time. AI-driven noise suppression uses models such as RNNoise or Nvidia RTX Voice to separate speech from background noise in the frequency domain. Latency and compute constraints determine which approach is feasible per deployment.

- ### Key aspects
  - **Anti-phase generation** — matched amplitude, inverted phase waveform destructively interferes with noise.
  - **Deep-learning suppression** — spectral masking networks trained on labelled noise datasets.
  - **Adaptive filtering** — LMS and RLS algorithms update filter coefficients in real time.
  - **Multi-microphone beamforming** — spatial filtering selects desired sound direction.

- ### Mechanisms
  - Signal is captured, transformed to frequency domain (FFT), noise profile is estimated, a suppression mask is applied, and the cleaned signal is reconstructed via inverse FFT. AI models replace or augment the mask-estimation step.

- ### Applications
  - Headphones and hearables with ANC (consumer and professional).
  - Video-conferencing clients (noise suppression plugins).
  - Hearing aids and cochlear implant pre-processors.
  - Automotive cabin audio systems.
  - AR/VR headsets requiring clean voice input.

- ### Relationships
  - hasPart:: [[Signal Processing]]
  - hasPart:: [[Audio Processing]]
  - enables:: [[Speech Recognition]]
  - enables:: [[Voice Communication]]
  - uses:: [[Machine Learning]]
  - uses:: [[Deep Learning]]
  - uses:: [[Neural Network]]
  - supports:: [[Teleconferencing]]
  - supports:: [[Spatial Audio]]
  - relatedTo:: [[Natural Language Processing]]
  - relatedTo:: [[Edge Computing]]
  - contrastsWith:: [[Passive Noise Isolation]]

- ### Provenance
  - updated:: 2026-06-15