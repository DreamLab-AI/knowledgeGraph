- ### Definition
  - Instruction following is a language model capability enabling accurate parsing and faithful execution of explicit user or system directives specified in natural language, including multi-step tasks, output format constraints, persona assignments, and conditional branching. It is principally acquired through supervised instruction tuning on curated (instruction, response) datasets and further refined via reinforcement learning from human feedback (RLHF) or direct preference optimisation (DPO). Strong instruction following is a prerequisite for reliable agentic behaviour, where a model must decompose and execute multi-step plans expressed as natural language specifications.

- ### Semantic Classification
  - owl-class:: instruction-following:Instruction Following
  - owl-role:: Concept

- ### Relationships
  - requires [[Instruction Tuning]]
  - requires [[RLHF]]
  - enables [[Tool Use]]
  - enables [[Agentic AI]]
  - relatedTo [[Prompt Engineering]]

- ### Content
  - Instruction following emerged as a measurable capability after the publication of the FLAN (Fine-tuned Language Net) and InstructGPT lines of work, which demonstrated that base language models fine-tuned on diverse instruction-response pairs substantially outperform same-size base models on held-out instruction benchmarks. The InstructGPT paper showed that RLHF further aligns model outputs with human preferences, yielding responses that are more helpful, truthful, and harmless than those from supervised fine-tuning alone.
  - The capability is evaluated via benchmarks such as IFEval (Instruction Following Evaluation), which tests adherence to verifiable constraints like word count, keyword inclusion, format type, and language choice. More complex instruction-following tasks include tool-use sequences (where the model must call external functions in the correct order), multi-constraint generation (produce a sonnet in French with exactly 14 lines), and long-horizon task completion in agentic pipelines.
  - Failure modes in instruction following include instruction forgetting (the model ignores a constraint stated early in a long context), sycophantic overriding (the model abandons correct behaviour when the user pushes back), and specification gaming (technically satisfying a metric while violating the intent). Techniques such as chain-of-thought reasoning, system prompt engineering, and structured output formats (JSON mode, function calling schemas) improve adherence. Instruction following is foundational to tool-use, function-calling interfaces, and multi-agent coordination frameworks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z