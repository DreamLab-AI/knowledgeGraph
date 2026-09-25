Context management is the set of techniques for assembling, prioritising, compressing, and maintaining the information supplied to a language model within its bounded context window across a task or conversation. It governs what prompts, retrieved documents, prior turns, tool outputs, and state are placed in context, in what order, and at what fidelity, so that the model has the most relevant evidence without exceeding token limits. Effective context management is central to retrieval-augmented generation, long-running agents, and conversational systems, where it directly shapes coherence, accuracy, and cost.

### Overview

- Because context windows are finite, management decides what to include, summarise, drop, or fetch on demand.
- It balances recency, relevance, and salience so the model reasons over the right evidence.
- Strategies include retrieval, summarisation, hierarchical memory, and selective truncation.
- It is a primary determinant of an AI system's coherence, factual grounding, and inference cost.

### Key aspects

- Window budgeting allocates limited tokens across instructions, history, and retrieved content.
- Compression and summarisation preserve meaning while reducing token footprint.
- External memory persists state beyond a single window for continuity across sessions.
- Ordering and formatting influence how the [[Attention Mechanism]] weights supplied content.

### Applications

- Conversational assistants maintaining coherent multi-turn dialogue.
- RAG pipelines injecting retrieved documents into prompts.
- Agentic systems carrying task state across many steps.
- Long-document analysis exceeding the native window.

### Provenance

