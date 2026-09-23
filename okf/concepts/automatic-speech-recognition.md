---
okf_version: "0.2"
type: Class
title: Automatic Speech Recognition
resource: urn:ngm:class:automatic-speech-recognition
domain: ai
description: Automatic Speech Recognition (ASR) is the technology that converts spoken language into written text by jointly modelling acoustic signals — frame-level spectral features derived from raw audio waveforms — and linguistic context, using neural sequence-to-sequence architectures trained on large corpora of paired audio and transcripts. Modern ASR systems built on transformer and conformer encoder-de
maturity: mature
quality: 0.89
is-a:
  - urn:ngm:class:speech-processing
  - urn:ngm:class:deep-learning
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:audio-signal-processing
hasPart:
  - urn:ngm:class:acoustic-model
  - urn:ngm:class:language-model
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:connectionist-temporal-classification
  - urn:ngm:class:rnn-transducer
  - urn:ngm:class:beam-search
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:positional-encoding
requires:
  - urn:ngm:class:audio-signal-processing
  - urn:ngm:class:training-data
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:deep-learning
  - urn:ngm:class:gpu-computing
enables:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:voice-interaction
  - urn:ngm:class:spoken-language-understanding
  - urn:ngm:class:real-time-captioning
  - urn:ngm:class:machine-translation
  - urn:ngm:class:large-language-models
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:training-data
implements:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:connectionist-temporal-classification
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:attention-mechanism
contrastsWith:
  - urn:ngm:class:text-to-speech
  - urn:ngm:class:keyword-spotting
bridgesTo:
  - urn:ngm:class:distributed-collaboration
  - urn:ngm:class:spatial-audio
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:connectionist-temporal-classification
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:beam-search
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:quantisation
supports:
  - urn:ngm:class:accessibility
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:distributed-collaboration
relatedTo:
  - urn:ngm:class:speaker-diarisation
  - urn:ngm:class:speaker-recognition
  - urn:ngm:class:language-modeling
  - urn:ngm:class:word-error-rate
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:model-compression
  - urn:ngm:class:spatial-audio
  - urn:ngm:class:distributed-collaboration
---

# Automatic Speech Recognition

Automatic Speech Recognition (ASR) is the technology that converts spoken language into written text by jointly modelling acoustic signals — frame-level spectral features derived from raw audio waveforms — and linguistic context, using neural sequence-to-sequence architectures trained on large corpora of paired audio and transcripts. Modern ASR systems built on transformer and conformer encoder-decoder designs achieve near-human word error rates on clean speech benchmarks (Whisper Large-v3 at 2.7% WER on LibriSpeech test-clean) and have been extended to multilingual and low-resource settings through large-scale self-supervised pre-training on unlabelled audio. ASR serves as a foundational component for voice assistants, real-time transcription services, accessibility tooling, and spoken language understanding pipelines, and underpins multimodal AI systems that must bridge the speech and text modalities.
