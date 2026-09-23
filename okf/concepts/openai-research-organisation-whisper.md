---
okf_version: "0.2"
type: Class
title: Open AI Whisper
resource: urn:ngm:class:openai-research-organisation-whisper
domain: ai
description: OpenAI Whisper is an open-source automatic speech recognition (ASR) system released by OpenAI in September 2022, trained on approximately 680,000 hours of multilingual and multitask supervised audio data sourced from the internet. It employs a Transformer encoder-decoder architecture that jointly learns transcription, translation, and language identification from weakly supervised training data, a
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:automatic-speech-recognition
enables:
  - urn:ngm:class:real-time-transcription
  - urn:ngm:class:meeting-transcription
uses:
  - urn:ngm:class:audio-processing-system
  - urn:ngm:class:speech-and-voice
relatedTo:
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:openai-research-organisation
---

# Open AI Whisper

OpenAI Whisper is an open-source automatic speech recognition (ASR) system released by OpenAI in September 2022, trained on approximately 680,000 hours of multilingual and multitask supervised audio data sourced from the internet. It employs a Transformer encoder-decoder architecture that jointly learns transcription, translation, and language identification from weakly supervised training data, achieving near-human accuracy across a broad range of accents, recording conditions, and languages. Whisper is released as open weights in multiple sizes (tiny, base, small, medium, large, and subsequent variants), enabling local deployment without API dependency. Its robustness to background noise, accented speech, and domain-specific vocabulary—combined with zero-shot multilingual performance—has made it the de facto baseline for ASR research and a widely deployed component in transcription pipelines, voice interfaces, and accessibility applications.
