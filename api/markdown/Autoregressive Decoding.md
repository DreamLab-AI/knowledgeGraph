Autoregressive decoding is the process by which a sequence model, such as a transformer language model, generates output one token at a time, conditioning each new token on all previously generated tokens. At every step the model produces a probability distribution over the vocabulary, a token is selected by a chosen strategy, and the token is appended and fed back as input for the next step. It is the dominant generation paradigm for large language models and is the primary target of inference optimisations such as caching and speculative methods.

### Overview

- In autoregressive generation the model factorises the probability of a sequence into a product of conditionals, predicting the next token given the prefix.
- Generation is inherently sequential: each token depends on the previous output, so steps cannot be trivially parallelised, which makes decoding latency a central performance concern.
- The [[Attention Mechanism]] lets each new token attend to the entire context, and reusing past computation via a [[KV Cache]] avoids recomputing attention over the prefix at every step.

### Key aspects

- Step-by-step conditioning: the next token depends on all prior tokens in the sequence.
- Distribution and selection: a logit vector is turned into probabilities and a token is chosen.
- Selection strategies: greedy, [[Sampling]] with temperature and top-k or top-p, or [[Beam Search]].
- Caching: a [[KV Cache]] stores attention keys and values to make each step cheaper.
- Latency profile: dominated by many sequential, memory-bound steps rather than raw compute.

### Mechanisms

- The model computes logits for the next position, converts them to probabilities, and selects a token.
- The chosen token is appended and fed back as input for the subsequent step.
- [[Speculative Decoding]] uses a small drafter to propose tokens that the large model verifies in parallel, reducing the number of expensive steps.
- Reusing cached keys and values keeps per-step cost roughly constant as the sequence grows.

### Applications

- Text generation, chat and completion in [[Large Language Model]] products.
- Code generation and translation that emit tokens sequentially.
- Streaming generation in [[Model Serving]] systems where tokens are returned as produced.
- Baseline behaviour optimised by batching and speculative techniques.

### Provenance

