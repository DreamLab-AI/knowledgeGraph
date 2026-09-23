
ReAct prompting is a prompting strategy that interleaves verbal reasoning traces with discrete actions, enabling a language model to think step by step while interacting with external tools or environments. The model alternates between generating a thought, taking an action such as a search or API call, and observing the result, then folding that observation back into subsequent reasoning. This synergy of reasoning and acting reduces hallucination and grounds the model's conclusions in retrieved evidence.

- ### Overview
  - ReAct emerged as a way to make large language models more reliable on knowledge-intensive and decision-making tasks. Rather than producing an answer in a single forward pass, the model is prompted to externalise its reasoning as a sequence of thought-action-observation triples. Thoughts decompose the problem, actions query the outside world, and observations supply fresh, factual context that the next thought can incorporate.
- ### Mechanisms
  - Thought-action-observation loop that alternates internal reasoning with external interaction
  - Action space typically includes search, retrieval, calculator, or arbitrary tool invocations
  - Observations are appended to the context window, grounding subsequent reasoning in evidence
  - Few-shot exemplars demonstrate the interleaved trace format to the model
  - Terminates when the model emits a final answer action rather than a further tool call
- ### Applications
  - Question answering grounded in live retrieval rather than parametric memory
  - Autonomous agents that plan and execute multi-step tasks against tools and APIs
  - Fact verification where each claim is checked against an external source
  - Web navigation and interactive decision-making environments
- ### Provenance

