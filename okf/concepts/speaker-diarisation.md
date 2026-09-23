---
okf_version: "0.2"
type: Class
title: Speaker Diarisation
resource: urn:ngm:class:speaker-diarisation
domain: ai
description: Speaker diarisation is the automated process of partitioning a continuous multi-speaker audio stream into temporally contiguous, speaker-homogeneous segments and assigning a speaker label to each segment, answering the question 'who spoke when?' without necessarily mapping labels to real-world identities. A canonical pipeline comprises voice activity detection, acoustic feature extraction, speaker
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:speech-processing
hasPart:
  - urn:ngm:class:voice-activity-detection
  - urn:ngm:class:speaker-embedding
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:spectral-clustering
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:overlap-detection
requires:
  - urn:ngm:class:audio-processing-system
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transformer-architecture
enables:
  - urn:ngm:class:meeting-transcription
  - urn:ngm:class:real-time-transcription
  - urn:ngm:class:speaker-identification
  - urn:ngm:class:dialogue-act-recognition
  - urn:ngm:class:clinical-note-generation
dependsOn:
  - urn:ngm:class:automatic-speech-recognition
  - urn:ngm:class:signal-processing
contrastsWith:
  - urn:ngm:class:speaker-verification
  - urn:ngm:class:speaker-recognition
bridgesTo:
  - urn:ngm:class:real-time-collaboration
  - urn:ngm:class:multimodal-ai-architecture-learning
relatedTo:
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:emotion-recognition
  - urn:ngm:class:noise-reduction
  - urn:ngm:class:forced-alignment
---

# Speaker Diarisation

Speaker diarisation is the automated process of partitioning a continuous multi-speaker audio stream into temporally contiguous, speaker-homogeneous segments and assigning a speaker label to each segment, answering the question 'who spoke when?' without necessarily mapping labels to real-world identities. A canonical pipeline comprises voice activity detection, acoustic feature extraction, speaker embedding (via models such as x-vectors or ECAPA-TDNN), agglomerative or spectral clustering to group embeddings into speaker clusters, optional overlap detection, and a resegmentation or ViterBI refinement step. End-to-end neural approaches such as EEND (End-to-End Neural Diarisation) unify segmentation and assignment into a single sequence-labelling model capable of handling overlapping speech. Speaker diarisation is a foundational component in meeting transcription systems, clinical consultation recording, broadcast media indexing, and any dialogue-analytic pipeline that requires utterance attribution.
