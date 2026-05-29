- ### Definition
  - The OpenAI API is a hosted REST interface giving developers usage-priced access to OpenAI's models for text, reasoning, embeddings, images, speech, and tool use, abstracting away model hosting and inference.

- ### Relationships
  - OpenAI API is a subclass of [[API]] and implements a [[REST API]] over HTTP. It enables [[LLM Application Framework]]s and practical [[Prompt Engineering]] by exposing model capabilities programmatically, and relates to the [[GPT]] family of models it serves.

- ### Content
  - The OpenAI API turned large language models from research artefacts into a programmable utility. Rather than train, host, and scale models themselves, developers send a request describing a task and receive a generated response, paying per token consumed. This abstraction collapsed the barrier to building AI features: a single HTTP call can summarise text, answer questions, extract structured data, or generate code, with the heavy infrastructure handled entirely server-side.

  - The interface has evolved alongside model capabilities. Early completion endpoints gave way to chat-formatted messages with system, user, and assistant roles, then to structured outputs that constrain responses to a JSON schema, function calling that lets a model request execution of developer-defined tools, and streaming that returns tokens incrementally for responsive interfaces. Companion endpoints provide embeddings for semantic search, image generation, speech transcription and synthesis, and moderation.

  - Beyond raw access, the API's design conventions have become an industry reference point. The chat-message format, function-calling schema, and embeddings interface are widely emulated, and many alternative providers and open-source inference servers offer OpenAI-compatible endpoints so that existing client code works unchanged. This compatibility has made the API shape a quasi-standard, easing the portability of applications across model backends.

  - Building production systems on the API introduces concerns beyond the model itself: managing rate limits and latency, controlling token cost, handling non-determinism and occasional errors, protecting against prompt injection when untrusted input reaches the model, and guarding sensitive data sent to a third-party service. These operational realities have given rise to the surrounding ecosystem of orchestration frameworks, caching layers, evaluation tooling, and gateways that the API both enables and depends upon for reliable real-world deployment.