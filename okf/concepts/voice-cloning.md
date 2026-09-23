---
okf_version: "0.2"
type: Class
title: Voice Cloning
resource: urn:ngm:class:voice-cloning
domain: artificial-intelligence
description: Voice cloning is a speech synthesis technique that uses a short reference audio recording of a target speaker to condition or fine-tune a neural text-to-speech model so that it reproduces that speaker's vocal characteristics — including timbre, prosody, accent, and speaking rhythm — when given arbitrary text input. Modern systems employ a speaker encoder network that extracts a fixed-dimensional s
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:speech-synthesis
requires:
  - urn:ngm:class:speech-corpus
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:mel-spectrogram
enables:
  - urn:ngm:class:voice-assistant
  - urn:ngm:class:accessibility
  - urn:ngm:class:voice-assistant
  - urn:ngm:class:audiobook-narration
  - urn:ngm:class:accessibility
  - urn:ngm:class:audio-deepfake
contrastsWith:
  - urn:ngm:class:voice-conversion
  - urn:ngm:class:concatenative-synthesis
bridgesTo:
  - urn:ngm:class:ai-ethics
  - urn:ngm:class:digital-watermarking
  - urn:ngm:class:content-provenance
uses:
  - urn:ngm:class:text-to-speech
  - urn:ngm:class:neural-network
  - urn:ngm:class:speaker-embedding
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:transformer
  - urn:ngm:class:vocoder
relatedTo:
  - urn:ngm:class:deepfakes
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:generative-ai
  - urn:ngm:class:synthetic-media
---

# Voice Cloning

Voice cloning is a speech synthesis technique that uses a short reference audio recording of a target speaker to condition or fine-tune a neural text-to-speech model so that it reproduces that speaker's vocal characteristics — including timbre, prosody, accent, and speaking rhythm — when given arbitrary text input. Modern systems employ a speaker encoder network that extracts a fixed-dimensional speaker embedding from reference audio, which conditions a sequence-to-sequence acoustic model and vocoder to produce personalised synthetic speech. Zero-shot voice cloning generalises this capability to entirely unseen speakers without fine-tuning by leveraging large pre-trained generative models. The technology underpins both beneficial applications such as accessibility aids and audiobook narration, and adversarial uses including audio deepfakes and voice fraud.
