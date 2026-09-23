---
okf_version: "0.2"
type: Class
title: Acoustic Model
resource: urn:ngm:class:acoustic-model
domain: artificial-intelligence
description: An Acoustic Model is the component of a speech-recognition system that maps audio signal features to the probability of phonetic or sub-word units. It learns the statistical relationship between observed acoustic features and the linguistic sounds that produced them, traditionally using hidden Markov models with Gaussian mixtures and increasingly using deep neural networks. Combined with a languag
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:sequence-model
hasPart:
  - urn:ngm:class:neural-network
  - urn:ngm:class:encoder-decoder-architecture
  - urn:ngm:class:sequence-model
requires:
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:signal-processing
  - urn:ngm:class:audio-signal-processing
  - urn:ngm:class:mel-frequency-cepstral-coefficients
enables:
  - urn:ngm:class:automatic-speech-recognition
  - urn:ngm:class:voice-user-interface
  - urn:ngm:class:multimodal-ai-architecture
  - urn:ngm:class:accessibility
dependsOn:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:speech-processing
  - urn:ngm:class:hidden-markov-model
  - urn:ngm:class:expectation-maximisation
  - urn:ngm:class:graphical-model
implements:
  - urn:ngm:class:pattern-recognition
  - urn:ngm:class:sequence-model
  - urn:ngm:class:end-to-end-learning
contrastsWith:
  - urn:ngm:class:language-model
  - urn:ngm:class:pronunciation-model
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:pattern-recognition
  - urn:ngm:class:transformer
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:connectionist-temporal-classification
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:data-augmentation
  - urn:ngm:class:beam-search
supports:
  - urn:ngm:class:automatic-speech-recognition
  - urn:ngm:class:accessibility-technology
  - urn:ngm:class:speaker-diarisation
standardizedBy:
  - urn:ngm:class:nist
partOf:
  - urn:ngm:class:speech-recognition
relatedTo:
  - urn:ngm:class:language-model
  - urn:ngm:class:audio-processing
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:text-to-speech
  - urn:ngm:class:speaker-diarisation
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:representation-learning
  - urn:ngm:class:model-compression
  - urn:ngm:class:quantisation
  - urn:ngm:class:noise-robustness
  - urn:ngm:class:speaker-adaptation
---

# Acoustic Model

An Acoustic Model is the component of a speech-recognition system that maps audio signal features to the probability of phonetic or sub-word units. It learns the statistical relationship between observed acoustic features and the linguistic sounds that produced them, traditionally using hidden Markov models with Gaussian mixtures and increasingly using deep neural networks. Combined with a language model, it converts spoken audio into the most likely sequence of words.
