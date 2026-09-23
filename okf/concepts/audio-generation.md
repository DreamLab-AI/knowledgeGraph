---
okf_version: "0.2"
type: Class
title: Audio Generation
resource: urn:ngm:class:audio-generation
domain: machine-learning
description: Audio generation is the use of generative machine-learning models to synthesise sound — including speech, music, sound effects, and ambient audio — from inputs such as text, symbolic scores, or learned latent representations. Models learn the statistical structure of audio either in the raw waveform domain or in compressed time-frequency representations such as spectrograms, then sample new output
maturity: emerging
quality: 0.91
is-a:
  - urn:ngm:class:generative-ai
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:deep-learning
hasPart:
  - urn:ngm:class:neural-vocoder
  - urn:ngm:class:audio-codec
  - urn:ngm:class:spectrogram
  - urn:ngm:class:residual-vector-quantisation
  - urn:ngm:class:vae
enables:
  - urn:ngm:class:text-to-speech
  - urn:ngm:class:speech-synthesis
  - urn:ngm:class:voice-cloning
  - urn:ngm:class:music-generation
  - urn:ngm:class:speech-synthesis
  - urn:ngm:class:spatial-audio
  - urn:ngm:class:extended-reality
  - urn:ngm:class:speech-recognition
dependsOn:
  - urn:ngm:class:neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:audio-processing
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:psychoacoustics
implements:
  - urn:ngm:class:generative-model
  - urn:ngm:class:score-based-generative-model
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:generative-adversarial-network
contrastsWith:
  - urn:ngm:class:image-generation
  - urn:ngm:class:video-generation
  - urn:ngm:class:audio-processing
bridgesTo:
  - urn:ngm:class:multimodal-ai
  - urn:ngm:class:ethical-ai
  - urn:ngm:class:intellectual-property-rights-framework
  - urn:ngm:class:multimodal-ai-architecture-ai
uses:
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:neural-vocoder
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:vae
  - urn:ngm:class:flow-matching
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:residual-vector-quantisation
  - urn:ngm:class:large-language-models
  - urn:ngm:class:feature-extraction
supports:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:multimodal-ai
  - urn:ngm:class:extended-reality
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:music-information-retrieval
standardizedBy:
  - urn:ngm:class:opus-codec
  - urn:ngm:class:mpeg-h-audio
relatedTo:
  - urn:ngm:class:latent-diffusion
  - urn:ngm:class:music-information-retrieval
  - urn:ngm:class:psychoacoustics
  - urn:ngm:class:reinforcement-learning-from-human-feedback
  - urn:ngm:class:watermarking-service
  - urn:ngm:class:real-time-inference
  - urn:ngm:class:spectrogram
  - urn:ngm:class:waveform
---

# Audio Generation

Audio generation is the use of generative machine-learning models to synthesise sound — including speech, music, sound effects, and ambient audio — from inputs such as text, symbolic scores, or learned latent representations. Models learn the statistical structure of audio either in the raw waveform domain or in compressed time-frequency representations such as spectrograms, then sample new outputs that are perceptually realistic. The field encompasses text-to-speech, music generation, voice cloning, and general audio synthesis, drawing on autoregressive, diffusion, and adversarial generative architectures.
