
Standard prompting is the baseline method of querying a large language model by providing an instruction or question, optionally with input-output examples, and expecting an answer without an elicited reasoning process. It establishes the reference behaviour against which more elaborate strategies such as chain-of-thought, self-consistency and tool-augmented prompting are compared. Standard prompting subsumes zero-shot and few-shot formulations that map directly from prompt to answer.

- [[Standard Prompting]] is the baseline way of interacting with a [[Large Language Model]]: supply an instruction or question, optionally with examples, and read the answer. It is the reference point within [[Prompt Engineering]] for evaluating more advanced techniques.
- It encompasses both [[Zero-Shot Prompting]] and [[Few-Shot Prompting]] and relies on the model's [[In-Context Learning]] ability.
- ### Overview
- Standard prompting maps a prompt directly to an output without explicitly eliciting a reasoning trace. The phrase is most useful as a contrast class: research that demonstrates chain-of-thought gains reports them relative to standard prompting.
- Because it does not request intermediate steps, standard prompting is simple, fast and inexpensive, and works well when the task is shallow or the answer is directly recoverable from context.
- It remains the dominant interaction pattern for everyday queries and forms the substrate on which structured, tool-using and agentic patterns are layered.
- ### Mechanisms
- Instruction-only prompts state the task in natural language and expect an answer.
- Few-shot prompts prepend input-output exemplars to steer format and behaviour.
- Demonstrations shape style without parameter updates via in-context learning.
- Output parsing extracts the answer from free-form generation.
- ### Applications
- Quick question answering and information lookup.
- Text classification, summarisation and rewriting baselines.
- Evaluation harnesses that benchmark advanced strategies against a plain baseline.
- Lightweight assistants where reasoning overhead is unnecessary.
- ### Provenance

