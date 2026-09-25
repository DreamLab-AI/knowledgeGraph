The OpenAI Chat Completions API is a widely adopted HTTP interface for sending a sequence of role-tagged messages to a large language model and receiving a generated response. Its request and response schema, including roles, tool-calling, and streaming, has become a de facto interoperability standard implemented by many open-source and third-party inference servers. This compatibility lets applications swap model backends with minimal code change.

### Content

- The schema supports multi-turn role-tagged messages, function/tool calling, and token streaming. Because numerous self-hosted and commercial backends implement the same shape, it provides backend portability and has effectively standardized how applications integrate with chat-oriented LLMs.

