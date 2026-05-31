- ### Definition
  - The coordination of multiple calls to one or more large language models, together with tools, retrieval and control logic, to accomplish a task that a single prompt cannot reliably handle.

- ### Semantic Classification
  - owl-class:: natural-language-processing:LLMOrchestration
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Large Language Models]]
  - bridges-to:: [[LangChain]]
  - requires:: [[Large Language Models]], [[Tool Use]]
  - enables:: [[Retrieval-Augmented Generation]]

- ### Content
  - LLM orchestration structures the flow of information between model calls, external tools and data sources. Patterns include sequential chains, conditional routing, parallel calls and iterative loops in which model output drives the next step.
  - Orchestration handles concerns such as prompt construction, state and memory, error handling and the integration of retrieval for grounding. It is the layer that turns a general-purpose model into a reliable component of an application, and it is commonly provided by LLM application frameworks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z