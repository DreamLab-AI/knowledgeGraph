---
okf_version: "0.2"
type: Class
title: Neural Audio Codec
resource: urn:ngm:class:neural-audio-codec
domain: ai
description: A neural audio codec is a learned compression model that encodes audio into a compact discrete or latent representation and decodes it back to a waveform using neural networks. Unlike hand-designed codecs, it is trained end-to-end with reconstruction and adversarial objectives to maximise perceptual quality at very low bitrates. The discrete tokens it produces also serve as a representation for ge
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:generative-model
  - urn:ngm:class:ai-model-architecture
relatedTo:
  - urn:ngm:class:music-and-audio
---

# Neural Audio Codec

A neural audio codec is a learned compression model that encodes audio into a compact discrete or latent representation and decodes it back to a waveform using neural networks. Unlike hand-designed codecs, it is trained end-to-end with reconstruction and adversarial objectives to maximise perceptual quality at very low bitrates. The discrete tokens it produces also serve as a representation for generative audio and speech models.
