---
okf_version: "0.2"
type: Class
title: Speech Recognition
resource: urn:ngm:class:speech-recognition
domain: artificial-intelligence
description: "Speech Recognition (also called Automatic Speech Recognition, ASR) is the computational task of converting spoken acoustic signals into a textual representation, enabling machines to interpret and act on human voice input. Modern systems use end-to-end deep learning architectures — principally transformer-based encoder-decoder models such as Wav2Vec 2.0 and Whisper — trained on thousands of hours "
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:natural-language-processing
requires:
  - urn:ngm:class:acoustic-model
  - urn:ngm:class:language-model
  - urn:ngm:class:audio-signal-processing
  - urn:ngm:class:feature-extraction
enables:
  - urn:ngm:class:language-translation
  - urn:ngm:class:question-answering
  - urn:ngm:class:voice-user-interface
  - urn:ngm:class:virtual-assistant
  - urn:ngm:class:real-time-captioning
  - urn:ngm:class:clinical-documentation
dependsOn:
  - urn:ngm:class:annotated-training-data
  - urn:ngm:class:model-compression
  - urn:ngm:class:annotated-training-data
contrastsWith:
  - urn:ngm:class:speaker-recognition
  - urn:ngm:class:voice-activity-detection
bridgesTo:
  - urn:ngm:class:voice-user-interface
  - urn:ngm:class:multimodal-ai-architecture
  - urn:ngm:class:accessibility
  - urn:ngm:class:accessibility
uses:
  - urn:ngm:class:transformer
  - urn:ngm:class:neural-network
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:connectionist-temporal-classification
standardizedBy:
  - urn:ngm:class:nist
  - urn:ngm:class:w3-c-web-speech-api
relatedTo:
  - urn:ngm:class:sentiment-analysis
  - urn:ngm:class:speaker-diarisation
  - urn:ngm:class:text-to-speech
  - urn:ngm:class:speech-synthesis
  - urn:ngm:class:named-entity-recognition
  - urn:ngm:class:speech-synthesis
---

# Speech Recognition

Speech Recognition (also called Automatic Speech Recognition, ASR) is the computational task of converting spoken acoustic signals into a textual representation, enabling machines to interpret and act on human voice input. Modern systems use end-to-end deep learning architectures — principally transformer-based encoder-decoder models such as Wav2Vec 2.0 and Whisper — trained on thousands of hours of labelled audio to achieve near-human word-error rates across diverse speakers, languages, and acoustic environments. Key technical challenges include robustness to background noise, speaker variability, dialectal and accent diversity, and code-switching; deployment challenges include latency constraints for real-time streaming, on-device inference under power and memory limits, and domain adaptation for specialised vocabularies such as clinical or legal terminology.
