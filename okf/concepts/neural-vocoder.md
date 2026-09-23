---
okf_version: "0.2"
type: Class
title: Neural Vocoder
resource: urn:ngm:class:neural-vocoder
domain: machine-learning
description: A neural vocoder is a deep generative model that synthesises a raw audio waveform from a compact intermediate representation, most commonly a mel-spectrogram produced by the acoustic model in a text-to-speech pipeline. Beginning with WaveNet in 2016 and evolving through flow-based, GAN-based designs such as HiFi-GAN, and diffusion-based approaches, neural vocoders replaced signal-processing method
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:neural-network
enables:
  - urn:ngm:class:speech-synthesis
  - urn:ngm:class:audio-generation
  - urn:ngm:class:speech-synthesis
uses:
  - urn:ngm:class:deep-learning
partOf:
  - urn:ngm:class:text-to-speech
  - urn:ngm:class:audio-synthesis
relatedTo:
  - urn:ngm:class:acoustic-model
---

# Neural Vocoder

A neural vocoder is a deep generative model that synthesises a raw audio waveform from a compact intermediate representation, most commonly a mel-spectrogram produced by the acoustic model in a text-to-speech pipeline. Beginning with WaveNet in 2016 and evolving through flow-based, GAN-based designs such as HiFi-GAN, and diffusion-based approaches, neural vocoders replaced signal-processing methods such as Griffin-Lim and WORLD, delivering near-natural speech quality at real-time or faster generation speeds on commodity hardware.
