public:: true

# Tool-Augmented LLM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:tool-augmented-llm",
  "@type": "Page",
  "vc:slug": "tool-augmented-llm",
  "title": "Tool-Augmented LLM",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tool-augmented-llm",
  "@type": "Class",
  "label": "Tool-Augmented LLM",
  "definition": "A tool-augmented large language model is an LLM that can invoke external tools, APIs, code execution, or retrieval systems during inference to overcome the limits of its parametric knowledge. By emitting structured calls and incorporating the returned results, it can perform calculations, access live data, and act on the world rather than relying solely on text generation.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:agents", "label": "Agents"}, {"@id": "urn:ngm:class:computer-use-and-browser-agents", "label": "Computer Use and Browser Agents"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An LLM extended with the ability to call external tools, APIs, and code at inference time to access live data and act beyond its training knowledge. It is the foundation for autonomous [[Agents]] and [[Computer Use and Browser Agents]].
- ### Content
  - Tool use is typically realised through function-calling interfaces in which the model proposes a tool and arguments, the runtime executes it, and the result is fed back into the context. This pattern grounds outputs in authoritative sources, reduces hallucination, and enables multi-step reasoning over real-world systems.
