Multi-hop reasoning is the capability to answer a question or draw a conclusion by chaining together several intermediate inferences or retrieved facts, rather than relying on a single piece of evidence. In language models and retrieval systems it requires composing information across multiple documents or knowledge-graph edges. It is central to complex question answering and is a known weak point for shallow retrieval and single-pass models.

### Content

- Solving multi-hop queries requires decomposing the question, retrieving evidence for each hop, and composing the partial results, often iteratively. Knowledge graphs make the hops explicit as traversable edges, while iterative or agentic RAG performs successive retrieval steps to assemble the reasoning chain.

