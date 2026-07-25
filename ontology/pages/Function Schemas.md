public:: true

# Function Schemas
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:function-schemas",
  "@type": "Page",
  "vc:slug": "function-schemas",
  "title": "Function Schemas",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:function-schemas",
  "@type": "Class",
  "label": "Function Schemas",
  "definition": "Function schemas are structured, machine-readable declarations that describe the name, parameters, and types of tools or functions that a large language model may call. Typically expressed as JSON Schema, they let a model select an appropriate tool and emit validly structured arguments. Function schemas are the contract that enables reliable tool use and agentic workflows.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:agents", "label": "Agents"}, {"@id": "urn:ngm:class:computer-use-and-browser-agents", "label": "Computer Use and Browser Agents"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Function schemas are JSON-Schema declarations of callable tools that [[Agents]] and [[Computer Use and Browser Agents]] use to invoke external capabilities with well-typed arguments.
- ### Content
  - A schema names a function, documents its purpose, and specifies each parameter's type, constraints, and whether it is required. The model uses these descriptions to decide when to call a tool and to generate conformant arguments, which a runtime then validates and executes. Good schema design improves grounding, reduces hallucinated parameters, and makes multi-tool agent loops dependable.
