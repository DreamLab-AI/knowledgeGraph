---
okf_version: "0.2"
type: Class
title: Real-time Transcription
resource: urn:ngm:class:real-time-transcription
domain: artificial-intelligence
description: Real-time transcription is the automated conversion of streaming audio to text with latency sufficiently low (typically below 500 ms word latency) to support synchronous human use cases such as live captioning, voice-controlled interfaces, meeting assistance, and broadcast subtitling. It requires streaming automatic speech recognition (ASR) architectures that produce partial and final hypotheses i
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-application
requires:
  - urn:ngm:class:automatic-speech-recognition
  - urn:ngm:class:real-time-processing
enables:
  - urn:ngm:class:voice-interaction
  - urn:ngm:class:accessibility
relatedTo:
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:natural-language-processing
---

# Real-time Transcription

Real-time transcription is the automated conversion of streaming audio to text with latency sufficiently low (typically below 500 ms word latency) to support synchronous human use cases such as live captioning, voice-controlled interfaces, meeting assistance, and broadcast subtitling. It requires streaming automatic speech recognition (ASR) architectures that produce partial and final hypotheses incrementally as audio frames arrive, rather than processing complete utterances offline. Modern systems combine acoustic models (typically based on conformer or whisper-encoder architectures), language models for hypothesis rescoring, and punctuation/formatting post-processors to produce readable output in real time.
