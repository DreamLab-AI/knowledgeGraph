public:: true

# LLM Orchestration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:66bfb77d8762eb0ea3d6e0f5a290489f24ba584718435ebed15d24336bcf8962",
  "@type": "Page",
  "vc:slug": "llm-orchestration",
  "title": "LLM Orchestration",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:linked:tool-use",
      "vc:label": "Tool Use"
    },
    {
      "@id": "urn:visionflow:linked:retrieval-augmented-generation",
      "vc:label": "Retrieval-Augmented Generation"
    },
    {
      "@id": "urn:visionflow:linked:lang-chain",
      "vc:label": "LangChain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "LLM Orchestration"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:llm-orchestration",
  "@type": "Class",
  "label": "LLM Orchestration",
  "definition": "The coordination of multiple calls to one or more large language models, together with tools, retrieval and control logic, to accomplish a task that a single prompt cannot reliably handle.",
  "domain": "ai",
  "maturity": "growing",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:large-language-models",
      "label": "Large Language Models"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:llm-orchestration:d7c87b5173e1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:66bfb77d8762eb0ea3d6e0f5a290489f24ba584718435ebed15d24336bcf8962"
  },
  "vc:resolutions": [
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:linked:large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tool Use]]",
      "resolved": "urn:visionflow:linked:tool-use",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Retrieval-Augmented Generation]]",
      "resolved": "urn:visionflow:linked:retrieval-augmented-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[LangChain]]",
      "resolved": "urn:visionflow:linked:lang-chain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The coordination of multiple calls to one or more large language models, together with tools, retrieval and control logic, to accomplish a task that a single prompt cannot reliably handle.

- ### Semantic Classification
  - owl-class:: natural-language-processing:LLMOrchestration
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Large Language Models]]
  - bridges-to:: [[LangChain]]
  - requires:: [[Large Language Models]], [[Tool Use]]
  - enables:: [[Retrieval-Augmented Generation]]

- ### Content
  - LLM orchestration structures the flow of information between model calls, external tools and data sources. Patterns include sequential chains, conditional routing, parallel calls and iterative loops in which model output drives the next step.
  - Orchestration handles concerns such as prompt construction, state and memory, error handling and the integration of retrieval for grounding. It is the layer that turns a general-purpose model into a reliable component of an application, and it is commonly provided by LLM application frameworks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
