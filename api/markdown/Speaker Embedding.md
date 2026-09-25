A Speaker Embedding is a fixed-dimensional vector representation of a speaker's vocal identity, extracted from variable-length speech segments by a neural network trained to encode speaker-discriminative acoustic features while remaining invariant to spoken content, channel conditions, and background noise. Models such as d-vectors (deep speaker embeddings), x-vectors (TDNN-based), and ECAPA-TDNN produce embeddings that cluster in a metric space where same-speaker utterances lie close together and different-speaker utterances are well-separated. Speaker embeddings enable downstream tasks including speaker verification, speaker identification, speaker diarisation, and personalised speech synthesis without storing raw audio. They are trained using discriminative objectives such as softmax classification over training speakers, generalised end-to-end loss, or angular prototypical loss.

### Overview

- Early speaker representations (i-vectors from GMM-UBM systems) have been superseded by deep learning approaches that yield richer, more robust [[Embedding]] vectors.
- The d-vector (Google, 2014), x-vector (TDNN, 2018), and ECAPA-TDNN (2020) represent successive generations with improving performance on VoxCeleb benchmarks.
- Speaker embeddings underpin voice biometric authentication systems deployed in banking call centres and smart assistants.

### Key aspects

- **Architecture**: Time Delay Neural Networks (TDNN), ResNets, and attention-pooling transformers aggregate frame-level features into a single utterance-level vector.
- **Training objectives**: softmax speaker classification, triplet loss, generalised end-to-end (GE2E) loss, and angular prototypical loss promote metric-space clustering.
- **Evaluation**: Equal Error Rate (EER) and minimum detection cost function (minDCF) on NIST SRE and VoxSRC challenges benchmark systems.
- **Diarisation**: clustering speaker embeddings over a long audio recording assigns speaker identity to each time segment.

### Mechanisms

- Audio is chunked into short segments; each chunk is processed by the network to produce a frame-level feature sequence.
- Temporal pooling (statistics, attentive) aggregates frame features into a single fixed-length vector via the [[Embedding Layer]].
- During inference, cosine similarity between a test embedding and enrolled speaker embeddings determines identity.

### Applications

- Voice authentication for banking and government identity services.
- Speaker diarisation in meeting transcription systems ([[Automatic Speech Recognition]] pipelines).
- Personalised text-to-speech synthesis using speaker conditioning.
- Forensic voice analysis in law enforcement and judicial contexts.
- Multi-speaker separation ("cocktail party problem") as a conditioning signal.

### Provenance

