public:: true

# tool schema
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:150a087a4ea7179627b7ada6c1c6a39ebe41f10c4b7a4895c03a9b4a762f4dee",
  "@type": "Page",
  "vc:slug": "tool-schema",
  "title": "tool schema",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tool-schema",
  "@type": "Class",
  "label": "Tool Schema",
  "definition": "A tool schema is a structured, machine-readable specification \u2014 typically expressed in JSON Schema format \u2014 that formally describes a function or external capability callable by an AI agent: its name, natural-language description, parameter names and types, constraints, and which parameters are required. Tool schemas are provided to large language models at inference time as part of the system or user context, enabling the model to reason about which tools are available and to emit syntactically correct structured function-call outputs that an orchestration layer can execute. They are the core interface contract between AI models and the external systems they interact with.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:json-schema", "label": "JSON Schema"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:tool-use", "label": "Tool Use"},
      {"@id": "urn:ngm:class:function-calling", "label": "Function Calling"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:model-context-protocol", "label": "Model Context Protocol"},
      {"@id": "urn:ngm:class:agentic-ai", "label": "Agentic AI"},
      {"@id": "urn:ngm:class:schema-registry", "label": "Schema Registry"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - A tool schema is a structured, machine-readable specification — typically expressed in JSON Schema format — that formally describes a function or external capability callable by an AI agent: its name, natural-language description, parameter names and types, constraints, and which parameters are required. Tool schemas are provided to large language models at inference time as part of the system or user context, enabling the model to reason about which tools are available and to emit syntactically correct structured function-call outputs that an orchestration layer can execute. They are the core interface contract between AI models and the external systems they interact with.

- ### Semantic Classification
  - owl-class:: tool-schema:Tool Schema
  - owl-role:: Concept

- ### Relationships
  - requires [[JSON Schema]]
  - enables [[Tool Use]]
  - enables [[Function Calling]]
  - relatedTo [[Model Context Protocol]]
  - relatedTo [[Agentic AI]]
  - relatedTo [[Schema Registry]]

- ### Content
  Tool schemas define the interface contract that allows a language model to understand and correctly invoke external capabilities without prior training on those specific functions. A well-formed tool schema consists of a short unique name used as the function identifier, a natural-language description that guides the model's tool selection reasoning, and a JSON Schema object defining input parameters with their types, descriptions, and optionality constraints.

  The OpenAI function calling format established a de facto standard for tool schema structure, subsequently adopted with minor variations by Anthropic's tools API, Google's Gemini function calling, and the Model Context Protocol (MCP). MCP extends the schema to include resource definitions and prompt templates alongside tools, creating a richer capability discovery mechanism for AI agents connecting to external servers.

  Schema quality significantly affects model performance: ambiguous descriptions lead to incorrect tool selection; loose parameter typing leads to malformed invocations; excessive parameter complexity strains the model's structured output generation. Best practices recommend tight typing (enums over strings where possible), examples in descriptions, and decomposing complex tools into simpler atomic operations. Schema registries enable version management and discovery of available tools across distributed agent ecosystems, analogous to API gateways in service-oriented architectures.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
