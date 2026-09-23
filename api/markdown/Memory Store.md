
A memory store is the persistence layer in an AI agent system that retains information across turns and sessions for later retrieval. It typically holds conversation history, facts, and learned context, often as embeddings in a vector database to enable semantic recall. The memory store is what allows agents to maintain continuity, personalise responses, and accumulate knowledge beyond a single context window.

- ### Content
  - Designs distinguish short-term working memory from long-term stores, and episodic from semantic memory, with retrieval gated by relevance and recency. Vector stores support semantic search, while summarisation and forgetting policies manage growth so that the most pertinent context is surfaced into the model's window.

