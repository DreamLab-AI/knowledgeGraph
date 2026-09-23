
Scratchpad reasoning is a prompting and inference technique in which a language model generates intermediate working steps into an explicit textual workspace before committing to a final answer. The scratchpad externalises latent computation, letting the model decompose a problem, track partial results, and self-correct, which improves performance on multi-step arithmetic, logic, and code tasks. It is a foundational mechanism behind chain-of-thought and related deliberate-reasoning methods.

- ### Overview
	- The scratchpad framing originated from observations that transformer language models perform far better on multi-step problems when allowed to emit step-by-step working tokens rather than predicting the answer in a single forward pass.
	- The generated tokens act as a form of external working memory: each step conditions the next, so the model can carry intermediate quantities, recombine sub-results, and detect inconsistencies it would otherwise miss. The scratchpad can later be discarded or hidden, leaving only the cleaned answer.
	- Scratchpad reasoning is the conceptual precursor to chain-of-thought prompting and to structured deliberate-reasoning schemes such as Tree of Thoughts and self-consistency decoding, which sample and aggregate many scratchpads.
- ### Mechanisms
	- Prompts or fine-tunes the model to emit explicit intermediate steps before the final token sequence.
	- Uses the autoregressive context window as a serial working memory across reasoning steps.
	- Pairs naturally with [[In-Context Learning]], where worked examples demonstrate the desired scratchpad format.
	- Can be aggregated across samples via [[Self-Consistency]] to vote on the most reliable conclusion.
	- Extends to interleaved [[Tool Use]], where scratchpad steps invoke calculators, code execution, or retrieval.
- ### Applications
	- Multi-step arithmetic and word problems where intermediate quantities must be tracked.
	- Code generation and program-execution simulation, emitting line-by-line state.
	- Logical and commonsense reasoning benchmarks that reward decomposition.
	- Agentic pipelines where the scratchpad records a plan before each external action.
- ### Provenance

