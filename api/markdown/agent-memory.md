- ### Definition
  - Agent memory is the mechanism by which an autonomous agent stores and retrieves information across steps and sessions. It allows an agent to recall past observations, decisions and facts beyond the immediate context window.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AgentMemory
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[AI Agent]]
  - bridges-to:: [[Retrieval-Augmented Generation]], [[Context Window]]
  - requires:: [[Vector Database]], [[Embeddings]]
  - enables:: [[Agentic Workflow]]

- ### Content
  - Agent memory gives a language model agent persistent state, distinguishing short-term working memory held in the prompt context from long-term memory stored externally. Long-term stores are commonly built on vector databases that index past content by embedding for later retrieval.
  - Memory designs separate episodic records of what happened from semantic facts and procedural skills, and retrieval brings relevant items back into context when needed. This extends an agent beyond the limits of a single context window and supports coherent behaviour over time.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z