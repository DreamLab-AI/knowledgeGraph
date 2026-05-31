- ### Definition
  - Zero-shot prompting is the technique of instructing a language model to perform a task using only a description, without providing worked examples. It relies on knowledge the model acquired during pretraining.

- ### Semantic Classification
  - owl-class:: natural-language-processing:ZeroShotPrompting
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Prompt Engineering]]
  - bridges-to:: [[Few-Shot Learning]], [[Large Language Models]]
  - requires:: [[Language Model]], [[Prompt Engineering]]
  - enables:: [[In-Context Learning]]

- ### Content
  - Zero-shot prompting asks a model to carry out a task from instructions alone, such as classifying or summarising text, without including example input-output pairs in the prompt. It contrasts with few-shot prompting, which supplies several demonstrations to guide the model.
  - The approach works because large language models generalise from broad pretraining, though clear task descriptions and output formats improve reliability. It is the simplest form of in-context learning and a baseline against which few-shot methods are compared.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z