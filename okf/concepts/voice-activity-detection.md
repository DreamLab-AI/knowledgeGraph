---
okf_version: "0.2"
type: Class
title: Voice Activity Detection
resource: urn:ngm:class:voice-activity-detection
domain: ai
description: "The automated process of classifying audio frames as containing human speech or non-speech (silence, background noise, music) in order to segment an audio stream before downstream processing. Voice activity detection (VAD) reduces computational load on speech-sensitive systems by forwarding only speech-active segments to recognition, enhancement, or analysis modules. Modern VAD systems use neural "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:audio-frame-classification
  - urn:ngm:class:noise-suppression
requires:
  - urn:ngm:class:audio-processing
  - urn:ngm:class:feature-extraction
enables:
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:speaker-recognition
  - urn:ngm:class:speaker-diarisation
dependsOn:
  - urn:ngm:class:machine-learning-discipline
contrastsWith:
  - urn:ngm:class:speaker-recognition
  - urn:ngm:class:speech-recognition
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:signal-processing
supports:
  - urn:ngm:class:efficiency
  - urn:ngm:class:privacy
partOf:
  - urn:ngm:class:speech-processing
relatedTo:
  - urn:ngm:class:noise-robustness
  - urn:ngm:class:voice-assistant
  - urn:ngm:class:telephony
---

# Voice Activity Detection

The automated process of classifying audio frames as containing human speech or non-speech (silence, background noise, music) in order to segment an audio stream before downstream processing. Voice activity detection (VAD) reduces computational load on speech-sensitive systems by forwarding only speech-active segments to recognition, enhancement, or analysis modules. Modern VAD systems use neural classifiers trained on diverse acoustic conditions to achieve robust detection under noise, reverberation, and overlapping sounds. It is a foundational pre-processing stage in speech pipelines.
