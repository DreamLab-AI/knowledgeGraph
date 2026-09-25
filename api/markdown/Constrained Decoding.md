A family of inference-time techniques that restrict the token choices of a language model during generation so that output is guaranteed to satisfy formal constraints — a JSON schema, a context-free grammar, a regular expression, or required lexical content. At each decoding step the sampler masks tokens that would violate the constraint, typically by intersecting the model's next-token distribution with the valid transitions of a compiled automaton, yielding syntactically valid structured output without retraining the model.

### Semantic Classification

### Content

## Definition

**Constrained decoding** modifies the token-by-token sampling loop of a language model so that every emitted sequence is, by construction, a member of a formally specified language. Instead of hoping a prompt persuades the model to produce valid JSON or SQL, the decoder compiles the constraint — a regular expression, JSON Schema, or context-free grammar — into an automaton, tracks the automaton state as tokens are emitted, and sets the logits of all invalid next tokens to negative infinity before [[Sampling]]. The model's probability mass is thereby renormalised over only the legal continuations.

The approach has two main lineages. **Lexically constrained decoding** originated in machine translation, where variants of [[Beam Search]] (grid beam search, dynamic beam allocation) force required words or phrases to appear in the output. **Grammar-constrained decoding** is the modern LLM incarnation: libraries such as Outlines, XGrammar, llguidance, and llama.cpp's GBNF grammars compile schemas to token-level finite-state or pushdown automata, and inference engines like vLLM, TensorRT-LLM, and SGLang integrate them so masking adds negligible per-token latency. OpenAI's structured outputs mode and similar vendor features are productised grammar-constrained decoding.

The key subtlety is the mismatch between characters and tokens: a byte-level constraint must be lifted to the model's subword vocabulary, since a single token may span a structural boundary (for example `",` closing a string and starting the next key). Efficient implementations precompute, for each automaton state, the exact set of vocabulary tokens that keep the sequence valid. A known limitation is distributional distortion — greedy masking guarantees validity but can push the model off its preferred phrasing, occasionally degrading semantic quality even as syntactic accuracy reaches 100%.

## Current Landscape

- **Guaranteed-valid JSON** is now table stakes for LLM tool calling and agent frameworks; constrained decoding is what makes [[Structured Output]] reliable enough for machine-to-machine pipelines. OpenAI's Structured Outputs feature (generally available since August 2024) is powered internally by llguidance for JSON Schema enforcement.
- **Open-source stack**: Outlines (FSM-based regex/JSON), XGrammar (CFG-based with adaptive token-mask caching, from the MLC-AI team), llguidance (Lark-style CFGs at ~50 µs of CPU per token on a 128k-token vocabulary), and GBNF in llama.cpp; llguidance is also integrated into TensorRT-LLM and Azure AI.
- **Serving-engine integration**: vLLM shipped first-class structured output support from v0.8.5 (2025) with XGrammar and llguidance as selectable backends, and its V1 API renamed `guided_*` parameters to `structured_outputs` (choice, regex, JSON schema, grammar, and structural tags); SGLang and TGI expose equivalent parameters.
- **Benchmarking matured**: JSONSchemaBench (January 2025, arXiv:2501.10868) evaluates six frameworks — Guidance, Outlines, llama.cpp, XGrammar, OpenAI, and Gemini — over 10,000 real-world JSON schemas, standardising comparison of coverage, compliance, and efficiency.
- **Research directions**: minimising distribution shift (adaptive or approximate constraining), constrained decoding for code with type systems and static analysis in the loop, and combining constraints with speculative decoding without breaking draft-model acceptance.
- **Trade-off in practice**: constraint compilation cost is paid once per schema; per-token overhead is tens of microseconds, so the technique is effectively free at serving time compared with retry-and-repair approaches.

  **Sources**:

- https://github.com/guidance-ai/llguidance
- https://docs.vllm.ai/en/latest/features/structured_outputs/
- https://developers.redhat.com/articles/2025/06/03/structured-outputs-vllm-guiding-ai-responses
- https://arxiv.org/html/2501.10868v1

