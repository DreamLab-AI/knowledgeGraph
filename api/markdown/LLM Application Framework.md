public:: true

# LLM Application Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:762018aba7544a89f77f99e4f2193fcaf279cfef82629e85e35637e85ebbb0f5",
  "@type": "Page",
  "vc:slug": "llm-application-framework",
  "title": "LLM Application Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:large-language-models",
      "vc:label": "Large Language Models"
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
      "vc:value": "LLM Application Framework"
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
  "@id": "urn:ngm:class:llm-application-framework",
  "@type": "Class",
  "label": "LLM Application Framework",
  "definition": "A software library that provides abstractions for building applications on top of large language models, including prompt management, tool integration, retrieval and chaining of model calls.",
  "domain": "natural-language-processing",
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
  "@id": "urn:visionflow:annotation:link-resolutions:llm-application-framework:8b6cabd65f4d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:762018aba7544a89f77f99e4f2193fcaf279cfef82629e85e35637e85ebbb0f5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:linked:large-language-models",
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
  - A software library that provides abstractions for building applications on top of large language models, including prompt management, tool integration, retrieval and chaining of model calls.

- ### Semantic Classification
  - owl-class:: natural-language-processing:LLMApplicationFramework
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Large Language Models]]
  - bridges-to:: [[LangChain]]
  - requires:: [[Large Language Models]]
  - enables:: [[Retrieval-Augmented Generation]]

- ### Content
  - LLM application frameworks supply reusable components for connecting language models to data sources, external tools and control logic. Typical features include prompt templating, conversational memory, document retrieval and orchestration of multi-step model calls.
  - These frameworks reduce the boilerplate involved in integrating models into products and standardise patterns such as retrieval-augmented generation and tool-using agents. Examples include LangChain and LlamaIndex, which differ in emphasis between general orchestration and data indexing.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
