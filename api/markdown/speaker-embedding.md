- ### Definition
  - [[Speaker Embedding]] is a compact vector in [[Embedding Space]] that encodes the vocal identity of a speaker, extracted from speech segments by a purpose-trained neural [[Embedding Model]].
  - The representation abstracts away spoken content and environmental variation while preserving speaker-discriminative acoustic characteristics such as vocal tract shape, prosody, and speaking style.
  - Downstream usage spans [[Automatic Speech Recognition]] personalisation, speaker diarisation, and voice cloning for synthesis.

- ### Overview
  - Early speaker representations (i-vectors from GMM-UBM systems) have been superseded by deep learning approaches that yield richer, more robust [[Embedding]] vectors.
  - The d-vector (Google, 2014), x-vector (TDNN, 2018), and ECAPA-TDNN (2020) represent successive generations with improving performance on VoxCeleb benchmarks.
  - Speaker embeddings underpin voice biometric authentication systems deployed in banking call centres and smart assistants.

- ### Key aspects
  - **Architecture**: Time Delay Neural Networks (TDNN), ResNets, and attention-pooling transformers aggregate frame-level features into a single utterance-level vector.
  - **Training objectives**: softmax speaker classification, triplet loss, generalised end-to-end (GE2E) loss, and angular prototypical loss promote metric-space clustering.
  - **Evaluation**: Equal Error Rate (EER) and minimum detection cost function (minDCF) on NIST SRE and VoxSRC challenges benchmark systems.
  - **Diarisation**: clustering speaker embeddings over a long audio recording assigns speaker identity to each time segment.

- ### Mechanisms
  - Audio is chunked into short segments; each chunk is processed by the network to produce a frame-level feature sequence.
  - Temporal pooling (statistics, attentive) aggregates frame features into a single fixed-length vector via the [[Embedding Layer]].
  - During inference, cosine similarity between a test embedding and enrolled speaker embeddings determines identity.

- ### Applications
  - Voice authentication for banking and government identity services.
  - Speaker diarisation in meeting transcription systems ([[Automatic Speech Recognition]] pipelines).
  - Personalised text-to-speech synthesis using speaker conditioning.
  - Forensic voice analysis in law enforcement and judicial contexts.
  - Multi-speaker separation ("cocktail party problem") as a conditioning signal.

- ### Relationships
  - implements:: [[Automatic Speech Recognition]], [[Speech Recognition]]
  - uses:: [[Embedding Model]], [[Embedding Space]], [[Embedding Layer]]
  - hasPart:: [[Embedding]], [[Embedding Space]]
  - enables:: [[Automatic Speech Recognition]], [[Real-Time AI]]
  - dependsOn:: [[Machine Learning]], [[Embedding Model]]
  - relatedTo:: [[Graph Embedding]], [[Embeddings]], [[Embedding Search]]
  - supports:: [[Privacy-Preserving AI]], [[Real-Time AI Inference]]
  - contrastsWith:: [[Document Retrieval]]
  - bridgesTo:: [[Cross Modal Retrieval]]

- ### Provenance
  - updated:: 2026-06-15