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
  "vc:plainGloss": "Making an AI reply in a fixed, tidy format — such as a filled-in form or a neat set of labelled fields — instead of free-flowing prose. This lets other software read and act on the answer automatically, without a person tidying it up first.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format-schema",
        "label": "JSON Schema"
      },
      {
        "@id": "urn:ngm:class:constrained-decoding",
        "label": "Constrained Decoding"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ai-agent",
        "label": "AI Agent"
      },
      {
        "@id": "urn:ngm:class:function-calling",
        "label": "Function Calling"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      },
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenization"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:grammar-constrained-generation",
        "label": "Grammar-Constrained Generation"
      },
      {
        "@id": "urn:ngm:class:schema-validation",
        "label": "Schema Validation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:regular-expression",
        "label": "Regular Expression"
      },
      {
        "@id": "urn:ngm:class:type-system",
        "label": "Type System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:agentic-workflow",
        "label": "Agentic Workflow"
      },
      {
        "@id": "urn:ngm:class:api-integration",
        "label": "API Integration"
      },
      {
        "@id": "urn:ngm:class:information-extraction",
        "label": "Data Extraction"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:chain-of-thought",
        "label": "Chain-of-Thought"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:data",
        "label": "Data"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:pydantic",
        "label": "Pydantic"
      },
      {
        "@id": "urn:ngm:class:openai-research-organisation-api",
        "label": "OpenAI API"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:constrained-generation",
      "label": "Constrained Generation"
    },
    {
      "@id": "urn:ngm:class:schema-constrained-output",
      "label": "Schema-Constrained Output"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Structured output constrains a model's response to a fixed schema such as JSON, and is a core capability enabled by [[Prompt Engineering]] and constrained decoding.
- ### In Plain Terms
  - Making an AI reply in a fixed, tidy format — such as a filled-in form or a neat set of labelled fields — instead of free-flowing prose. This lets other software read and act on the answer automatically, without a person tidying it up first.
- ### Content
  - Implementations range from soft enforcement, where the prompt asks for a JSON shape, to hard enforcement via grammar-constrained or schema-constrained decoding that masks invalid tokens at each step. Function and tool-calling APIs expose structured output natively by validating arguments against a declared signature. The benefit is reliable parsing for agents and pipelines; the trade-off is reduced flexibility and occasional refusals when the schema cannot accommodate the model's intended answer.
