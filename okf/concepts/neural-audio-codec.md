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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Neural Audio Codec

A neural audio codec is a learned compression model that encodes audio into a compact discrete or latent representation and decodes it back to a waveform using neural networks. Unlike hand-designed codecs, it is trained end-to-end with reconstruction and adversarial objectives to maximise perceptual quality at very low bitrates. The discrete tokens it produces also serve as a representation for generative audio and speech models.
