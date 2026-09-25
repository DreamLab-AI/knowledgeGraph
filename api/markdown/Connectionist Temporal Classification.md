Connectionist Temporal Classification (CTC) is a sequence-modelling loss function and decoding scheme that trains neural networks to map unsegmented input sequences to output label sequences without requiring pre-aligned data. It introduces a blank symbol and marginalises over all valid alignments, allowing a network to learn the alignment implicitly during training. CTC is widely used in speech recognition and handwriting recognition where input and output lengths differ and frame-level labels are unavailable.

### Overview

- CTC eliminates the need for frame-by-frame labels by defining a probability distribution over all possible alignments between an input sequence and a shorter target sequence.
- The introduction of a blank token lets the network output repeated or null predictions that collapse into the final label sequence during decoding.
- Training maximises the total probability of all alignments consistent with the target, computed efficiently with a forward-backward dynamic programming algorithm.

### Mechanisms

- Blank-augmented label space that allows variable-rate emission of output tokens.
- Forward-backward algorithm computing the marginal likelihood over alignments.
- Greedy or beam-search decoding that collapses repeated tokens and removes blanks.
- Optional fusion with an external language model to improve transcription quality.

### Applications

- End-to-end automatic speech recognition and speech-to-text pipelines.
- Online handwriting and optical character recognition.
- Real-time translation and captioning systems requiring streaming transcription.

### Provenance

