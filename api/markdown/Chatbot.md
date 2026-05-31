public:: true

# Chatbot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:52c8ebcab5ad36b26666c86d46b18bb997945df4da5171307dd829ba7084a906",
  "@type": "Page",
  "vc:slug": "chatbot",
  "title": "Chatbot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:natural-language-processing",
      "vc:label": "Natural Language Processing"
    },
    {
      "@id": "urn:visionflow:linked:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:linked:conversational-ai",
      "vc:label": "Conversational AI"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Chatbot"
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
  "@id": "urn:ngm:class:chatbot",
  "@type": "Class",
  "label": "Chatbot",
  "definition": "A software application that conducts a conversation with users through text or speech, increasingly built on large language models to generate natural-language responses.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:conversational-ai",
      "label": "Conversational AI"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:chatbot:386ebc0efd04",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:52c8ebcab5ad36b26666c86d46b18bb997945df4da5171307dd829ba7084a906"
  },
  "vc:resolutions": [
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:linked:natural-language-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:linked:large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Conversational AI]]",
      "resolved": "urn:visionflow:linked:conversational-ai",
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
  - A software application that conducts a conversation with users through text or speech, increasingly built on large language models to generate natural-language responses.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Chatbot
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Conversational AI]]
  - bridges-to:: [[Large Language Models]], [[Conversational AI]]
  - requires:: [[Natural Language Processing]]

- ### Content
  - A chatbot is an application that interacts with users in natural language, interpreting their input and producing responses. Early systems relied on scripted rules and pattern matching, while modern chatbots use natural language processing and, increasingly, large language models to handle open-ended dialogue.
  - Chatbots are deployed for customer support, information retrieval, task automation and as conversational front ends to other services. Their quality depends on language understanding, the relevance of generated responses and appropriate handling of ambiguous or out-of-scope requests.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
