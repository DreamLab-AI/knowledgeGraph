Masked language modelling is a self-supervised pre-training objective in which random tokens of an input sequence are hidden and the model learns to predict them from the surrounding bidirectional context. By conditioning on both left and right context, it produces deep contextual representations of language. It is the objective popularised by BERT and underpins many encoder-based transformer models.

- Masked language modelling hides a random subset of input tokens and trains a model to reconstruct them from the full surrounding context. As a [[Pre Training]] objective it is a canonical form of [[Self Supervised Learning]], requiring no human labels because the masked tokens supply their own targets.
- Because prediction is conditioned on both preceding and following tokens, it yields bidirectional [[Contextual Embedding]] representations, contrasting with the left-to-right framing of [[Next Token Prediction]].

### Definition continued

- It is most associated with [[BERT]] and related encoder [[Transformer]] models, which fine-tune the pre-trained representations for downstream tasks.

### Overview

- During pre-training, a fixed proportion of tokens are replaced with a mask symbol, a random token, or left unchanged, and the model predicts the original token at masked positions.
- The training signal is a [[Cross Entropy Loss]] over the vocabulary at each masked position, a standard [[Loss Function]] for classification over discrete tokens.
- Bidirectional attention lets each masked position attend to the entire sequence, producing rich [[Representation Learning]] suited to understanding tasks.
- The resulting encoder is then adapted via [[Fine Tuning]] to tasks such as classification, extraction and retrieval.

### Mechanisms

- Masking strategy: random selection of token positions to corrupt, with a mix of mask, random and unchanged substitutions.
- Bidirectional encoding: transformer self-attention integrates context from both directions.
- Objective: maximise the likelihood of the original tokens at masked positions.
- Transfer: the pre-trained encoder is reused as a feature extractor or fine-tuned end to end.

### Applications

- Pre-training encoder language models for natural-language understanding.
- Producing contextual sentence and token embeddings for downstream tasks.
- Initialising models later adapted via [[Fine Tuning]].
- Powering retrieval, classification and sequence-labelling systems.

### Provenance

