---
okf_version: "0.2"
type: Class
title: Speaker Embedding
resource: urn:ngm:class:speaker-embedding
domain: artificial-intelligence
description: "A Speaker Embedding is a fixed-dimensional vector representation of a speaker's vocal identity, extracted from variable-length speech segments by a neural network trained to encode speaker-discriminative acoustic features while remaining invariant to spoken content, channel conditions, and background noise. Models such as d-vectors (deep speaker embeddings), x-vectors (TDNN-based), and ECAPA-TDNN "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:embedding
hasPart:
  - urn:ngm:class:embedding
  - urn:ngm:class:embedding-space
enables:
  - urn:ngm:class:automatic-speech-recognition
  - urn:ngm:class:real-time-ai
dependsOn:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:embedding-model
implements:
  - urn:ngm:class:automatic-speech-recognition
  - urn:ngm:class:speech-recognition
contrastsWith:
  - urn:ngm:class:document-retrieval
bridgesTo:
  - urn:ngm:class:cross-modal-retrieval
uses:
  - urn:ngm:class:embedding-model
  - urn:ngm:class:embedding-space
  - urn:ngm:class:embedding-layer
supports:
  - urn:ngm:class:privacy-preserving-ai
  - urn:ngm:class:real-time-ai-inference
relatedTo:
  - urn:ngm:class:graph-embedding
  - urn:ngm:class:embeddings
  - urn:ngm:class:embedding-search
---

# Speaker Embedding

A Speaker Embedding is a fixed-dimensional vector representation of a speaker's vocal identity, extracted from variable-length speech segments by a neural network trained to encode speaker-discriminative acoustic features while remaining invariant to spoken content, channel conditions, and background noise. Models such as d-vectors (deep speaker embeddings), x-vectors (TDNN-based), and ECAPA-TDNN produce embeddings that cluster in a metric space where same-speaker utterances lie close together and different-speaker utterances are well-separated. Speaker embeddings enable downstream tasks including speaker verification, speaker identification, speaker diarisation, and personalised speech synthesis without storing raw audio. They are trained using discriminative objectives such as softmax classification over training speakers, generalised end-to-end loss, or angular prototypical loss.
