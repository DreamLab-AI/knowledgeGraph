
LangGraph is a library for building stateful, multi-step language model applications by representing control flow as a graph. It is part of the LangChain ecosystem and supports cyclic agent workflows.

- ### Semantic Classification

- ### Content
  - LangGraph models an application as a graph of nodes and edges where nodes perform work and edges decide the next step, including loops and conditional branches. This makes it suited to agent loops that repeatedly call tools and language models until a goal is met.
  - The library carries explicit state between steps, which allows persistence, retries and human review points. It is commonly used to build agents that plan, act and observe over several iterations.

- ### Provenance

