public:: true

# Structured Output
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:structured-output",
  "@type": "Page",
  "vc:slug": "structured-output",
  "title": "Structured Output",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:structured-output",
  "@type": "Class",
  "label": "Structured Output",
  "definition": "Structured output is a technique for constraining a language model to emit responses that conform to a predefined schema such as JSON, a regular grammar, or a typed object. It is enforced through prompt instructions, constrained decoding, or function-calling interfaces so that downstream systems can parse results reliably. Structured output bridges free-form generation and deterministic software by guaranteeing machine-readable, validatable responses.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Structured output constrains a model's response to a fixed schema such as JSON, and is a core capability enabled by [[Prompt Engineering]] and constrained decoding.
- ### Content
  - Implementations range from soft enforcement, where the prompt asks for a JSON shape, to hard enforcement via grammar-constrained or schema-constrained decoding that masks invalid tokens at each step. Function and tool-calling APIs expose structured output natively by validating arguments against a declared signature. The benefit is reliable parsing for agents and pipelines; the trade-off is reduced flexibility and occasional refusals when the schema cannot accommodate the model's intended answer.
