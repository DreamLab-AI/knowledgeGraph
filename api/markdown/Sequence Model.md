
Any machine learning model that captures dependencies across ordered data — text, speech, video frames, genomic strings, time series — by assigning probabilities to sequences or mapping input sequences to outputs; the family spans n-gram models and hidden Markov models through recurrent networks (LSTM, GRU) to transformers and modern state space models, and underlies language modelling, speech recognition, machine translation and time-series forecasting.

- ### Semantic Classification

- ### Content

  ## Definition

  A **sequence model** treats its data as ordered: the probability or meaning of an element depends on what came before (and sometimes after) it. Formally, generative sequence models factorise the joint probability of a sequence autoregressively, P(x₁…xₙ) = ∏ P(xᵢ | x₁…xᵢ₋₁), and differ in how much of that history they can actually condition on. Classical n-gram models truncate the context to a fixed window; the [[Hidden Markov Model]] posits a latent state chain that emits observations, giving tractable inference via the forward-backward and Viterbi algorithms and powering a generation of speech recognisers and part-of-speech taggers.

  Neural sequence models removed the fixed-context limitation. The [[Recurrent Neural Network]] threads a hidden state through time, with LSTM and GRU gating mitigating vanishing gradients; sequence-to-sequence architectures paired an encoder with a decoder to map between sequences of different lengths, and the attention mechanism developed for them led directly to the [[Transformer]], which replaced recurrence entirely with self-attention and now dominates the field as the substrate of large language models. A newer branch revives the continuous [[State Space Model]] in selective, hardware-efficient form (S4, Mamba), offering linear-time inference over very long sequences. Across all of these, decoding structured outputs at inference time typically relies on [[Beam Search]] or sampling strategies over the model's next-token distribution.

  In this graph, sequence model is the abstract parent that acoustic models, language models and translation systems specialise: any component that consumes or emits ordered symbols instantiates it.

  ## Technical Details

  Sequence modelling tasks come in canonical shapes: sequence classification (sentiment), sequence labelling (named-entity recognition, one output per input step), sequence transduction (translation, speech-to-text) and unconditional or conditional generation (language modelling). Training objectives are usually next-step prediction under teacher forcing or, for alignment-free transduction such as speech recognition, connectionist temporal classification (CTC). The trade-offs between families are concrete: HMMs offer interpretable latent structure but weak expressiveness; RNNs process tokens serially, limiting training parallelism; transformers train in parallel but pay quadratic attention cost in sequence length, motivating long-context research and the linear-time state-space alternatives. Evaluation is task-specific — perplexity for language models, word error rate for speech, BLEU and its successors for translation.

  ## Current Landscape

  - **Selective state space models**: Mamba (Gu & Dao, December 2023) made SSM parameters input-dependent, closing the content-based-reasoning gap that had held earlier SSMs behind attention; it reported ~5x higher inference throughput than Transformers and linear scaling to million-length sequences, with a 3B model matching Transformers twice its size.
  - **The SSM-attention duality**: the 2024 "Transformers are SSMs" (Mamba-2) work showed certain structured SSMs and certain linear-attention variants are mathematically equivalent, unifying the two lines of long-context research.
  - **Continued iteration**: Mamba-3 (March 2026) added exponential-trapezoidal discretisation, complex-valued state updates for state tracking, and a MIMO formulation, improving downstream accuracy by up to 1.8 points at the 1.5B scale over the strongest prior sub-quadratic model.
  - **Transformers still dominate, but hybridise**: attention remains the substrate of frontier LLMs for its precise long-context retrieval; the practical trend is hybrid stacks that interleave attention with linear-time SSM/linear-attention layers to cut the quadratic cost of very long contexts.

  **Sources**:
  - https://arxiv.org/abs/2312.00752
  - https://arxiv.org/abs/2603.15569
  - https://arxiv.org/html/2404.16112v1

