- ### Definition
  - In artificial intelligence, hallucination is the generation of plausible but factually incorrect or unsupported content by a model. It is a recognised failure mode of large language models and other generative systems.

- ### Semantic Classification
  - owl-class:: ai-safety:Hallucination
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[AI Risk]]
  - bridges-to:: [[Tool-Augmented Reasoning]], [[Conversational AI]]

- ### Content
  - Hallucination occurs when a generative model produces fluent output that is not grounded in its training data or provided context, asserting false facts, fabricated citations or invented details. The behaviour arises because such models predict likely text rather than verifying truth.
  - Mitigations include retrieval grounding, tool-augmented reasoning, fine-tuning and output verification, though none fully eliminate the problem. Hallucination is a significant concern for deploying language models in settings that demand factual reliability.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z