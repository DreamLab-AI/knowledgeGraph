---
okf_version: "0.2"
type: Class
title: WaveNet
resource: urn:ngm:class:wave-net
domain: machine-learning
description: A deep autoregressive neural network developed by DeepMind for generating raw audio waveforms one sample at a time, using stacks of dilated causal convolutions to capture long-range temporal dependencies in audio.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:convolutional-neural-network
requires:
  - urn:ngm:class:convolution
  - urn:ngm:class:autoregressive-model
  - urn:ngm:class:deep-learning
enables:
  - urn:ngm:class:text-to-speech
  - urn:ngm:class:speech-synthesis
  - urn:ngm:class:audio-generation
  - urn:ngm:class:music-generation
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:generative-adversarial-network
bridgesTo:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:voice-assistant
  - urn:ngm:class:speech-recognition
uses:
  - urn:ngm:class:residual-network
  - urn:ngm:class:softmax-function
relatedTo:
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:neural-audio-codec
  - urn:ngm:class:generative-model
---

# WaveNet

A deep autoregressive neural network developed by DeepMind for generating raw audio waveforms one sample at a time, using stacks of dilated causal convolutions to capture long-range temporal dependencies in audio.
