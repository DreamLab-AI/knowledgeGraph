public:: true

# Open AI Chat Completions API
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-ai-chat-completions-api",
  "@type": "Page",
  "vc:slug": "open-ai-chat-completions-api",
  "title": "Open AI Chat Completions API",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:openai-research-organisation-chat-completions-api",
  "@type": "Class",
  "label": "Open AI Chat Completions API",
  "definition": "The OpenAI Chat Completions API is a widely adopted HTTP interface for sending a sequence of role-tagged messages to a large language model and receiving a generated response. Its request and response schema, including roles, tool-calling, and streaming, has become a de facto interoperability standard implemented by many open-source and third-party inference servers. This compatibility lets applications swap model backends with minimal code change.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:open-generative-ai-tools", "label": "Open Generative AI Tools"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Open AI Chat Completions API defines a message-based request/response schema for prompting language models, now treated as a de facto interface standard by many [[Open Generative AI Tools]] and inference servers.
- ### Content
  - The schema supports multi-turn role-tagged messages, function/tool calling, and token streaming. Because numerous self-hosted and commercial backends implement the same shape, it provides backend portability and has effectively standardized how applications integrate with chat-oriented LLMs.
