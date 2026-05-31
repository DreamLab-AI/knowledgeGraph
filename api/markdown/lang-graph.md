- ### Definition
  - LangGraph is a library for building stateful, multi-step language model applications by representing control flow as a graph. It is part of the LangChain ecosystem and supports cyclic agent workflows.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:LangGraph
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Agentic Workflow]]
  - bridges-to:: [[AI Agent]], [[Tool Use]]
  - requires:: [[Language Model]], [[State Machine]]
  - enables:: [[Multi-Agent Coordination]], [[Agentic Workflow]]

- ### Content
  - LangGraph models an application as a graph of nodes and edges where nodes perform work and edges decide the next step, including loops and conditional branches. This makes it suited to agent loops that repeatedly call tools and language models until a goal is met.
  - The library carries explicit state between steps, which allows persistence, retries and human review points. It is commonly used to build agents that plan, act and observe over several iterations.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z