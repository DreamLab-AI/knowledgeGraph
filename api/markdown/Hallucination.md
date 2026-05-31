public:: true

# Hallucination
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b7373f22748475addb17300ef5dd4f2d1f37ae880e7ae37abb56262929d5e5b9",
  "@type": "Page",
  "vc:slug": "hallucination",
  "title": "Hallucination",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:tool-augmented-reasoning",
      "vc:label": "Tool-Augmented Reasoning"
    },
    {
      "@id": "urn:visionflow:linked:conversational-ai",
      "vc:label": "Conversational AI"
    },
    {
      "@id": "urn:visionflow:linked:ai-risk",
      "vc:label": "AI Risk"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Hallucination"
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
  "@id": "urn:ngm:class:hallucination",
  "@type": "Class",
  "label": "Hallucination",
  "definition": "In artificial intelligence, hallucination is the generation of plausible but factually incorrect or unsupported content by a model. It is a recognised failure mode of large language models and other generative systems.",
  "domain": "ai-safety",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-risk",
      "label": "AI Risk"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:hallucination:2c229d9fff93",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b7373f22748475addb17300ef5dd4f2d1f37ae880e7ae37abb56262929d5e5b9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Tool-Augmented Reasoning]]",
      "resolved": "urn:visionflow:linked:tool-augmented-reasoning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Conversational AI]]",
      "resolved": "urn:visionflow:linked:conversational-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Risk]]",
      "resolved": "urn:visionflow:linked:ai-risk",
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
  - In artificial intelligence, hallucination is the generation of plausible but factually incorrect or unsupported content by a model. It is a recognised failure mode of large language models and other generative systems.

- ### Semantic Classification
  - owl-class:: ai-safety:Hallucination
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[AI Risk]]
  - bridges-to:: [[Tool-Augmented Reasoning]], [[Conversational AI]]

- ### Content
  - Hallucination occurs when a generative model produces fluent output that is not grounded in its training data or provided context, asserting false facts, fabricated citations or invented details. The behaviour arises because such models predict likely text rather than verifying truth.
  - Mitigations include retrieval grounding, tool-augmented reasoning, fine-tuning and output verification, though none fully eliminate the problem. Hallucination is a significant concern for deploying language models in settings that demand factual reliability.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
