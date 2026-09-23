---
okf_version: "0.2"
type: Class
title: Speaker Recognition
resource: urn:ngm:class:speaker-recognition
domain: ai
description: "The automated identification or verification of a person's identity based on characteristics of their voice derived from acoustic speech signals. Speaker recognition encompasses two sub-tasks: speaker verification (confirming a claimed identity) and speaker identification (determining who among a set of known speakers produced a given utterance). Systems extract speaker-discriminative features suc"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:ai-application
hasPart:
  - urn:ngm:class:speaker-embedding
  - urn:ngm:class:speaker-model
requires:
  - urn:ngm:class:audio-processing
  - urn:ngm:class:voice-activity-detection
enables:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:access-control
dependsOn:
  - urn:ngm:class:machine-learning-discipline
contrastsWith:
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:voice-activity-detection
uses:
  - urn:ngm:class:neural-network
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:deep-learning
supports:
  - urn:ngm:class:security
  - urn:ngm:class:personalisation
partOf:
  - urn:ngm:class:speech-processing
relatedTo:
  - urn:ngm:class:biometric-authentication
  - urn:ngm:class:voice-assistant
  - urn:ngm:class:speaker-diarisation
---

# Speaker Recognition

The automated identification or verification of a person's identity based on characteristics of their voice derived from acoustic speech signals. Speaker recognition encompasses two sub-tasks: speaker verification (confirming a claimed identity) and speaker identification (determining who among a set of known speakers produced a given utterance). Systems extract speaker-discriminative features such as MFCCs, i-vectors, or x-vectors from audio, then compare these against enrolled speaker models using distance metrics or neural classifiers. It is distinct from speech recognition, which transcribes words rather than identifies speakers.
