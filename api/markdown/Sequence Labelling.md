Sequence labelling is a class of natural-language-processing tasks in which each element of an input sequence is assigned a categorical label from a fixed tag set. It encompasses tasks such as named-entity recognition, part-of-speech tagging and slot filling, where contextual dependencies between adjacent tokens matter. Classical approaches use hidden Markov models and conditional random fields, while modern systems use neural encoders.

### Overview

- Unlike whole-sequence classification, sequence labelling produces one decision per position while respecting transition constraints between labels.
- Tag schemes such as BIO (Begin, Inside, Outside) encode span boundaries for multi-token entities.
- Structured prediction models capture label dependencies so that, for example, an Inside tag cannot follow an Outside tag of a different type.
- Neural encoders followed by a CRF decoding layer remain a strong baseline for many labelling tasks.

### Mechanisms

- Hidden Markov models modelling emission and transition probabilities.
- Conditional random fields performing global normalisation over label sequences.
- BiLSTM and Transformer encoders producing contextual token representations.
- Viterbi decoding to find the highest-scoring label path.
- Subword tokenisation feeding contextual embeddings into the labelling head.

### Applications

- Named-entity recognition extracting people, places and organisations from text.
- Slot filling for task-oriented dialogue and voice assistants.
- Part-of-speech tagging for downstream parsing and information extraction.
- Chunking and shallow parsing in document-processing pipelines.

### Provenance

