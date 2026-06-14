public:: true

# Dialogue State Tracking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d4416c7e00f87e5b2f29caacb4fcdc917b0c1fed51fb2e4d3b4e90de5e1b810d",
  "@type": "Page",
  "vc:slug": "dialogue-state-tracking",
  "title": "Dialogue State Tracking",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:natural-language-processing",
      "vc:label": "Natural Language Processing"
    },
    {
      "@id": "urn:visionflow:linked:conversational-ai",
      "vc:label": "Conversational AI"
    },
    {
      "@id": "urn:visionflow:linked:dialogue-system",
      "vc:label": "Dialogue System"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Dialogue State Tracking"
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
  "@id": "urn:ngm:class:dialogue-state-tracking",
  "@type": "Class",
  "label": "Dialogue State Tracking",
  "definition": "A component of conversational systems that maintains a structured representation of the user's goals and the context of a conversation across turns. It updates the dialogue state as new utterances are processed.",
  "domain": "ai",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dialogue-system",
      "label": "Dialogue System"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:conversational-ai",
        "label": "Conversational AI"
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
  "@id": "urn:visionflow:annotation:link-resolutions:dialogue-state-tracking:7c4cf1758b11",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d4416c7e00f87e5b2f29caacb4fcdc917b0c1fed51fb2e4d3b4e90de5e1b810d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:linked:natural-language-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Conversational AI]]",
      "resolved": "urn:visionflow:linked:conversational-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Dialogue System]]",
      "resolved": "urn:visionflow:linked:dialogue-system",
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
  - A component of conversational systems that maintains a structured representation of the user's goals and the context of a conversation across turns. It updates the dialogue state as new utterances are processed.

- ### Semantic Classification
  - owl-class:: natural-language-processing:DialogueStateTracking
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Dialogue System]]
  - bridges-to:: [[Dialogue System]]
  - requires:: [[Natural Language Processing]]
  - enables:: [[Conversational AI]]

- ### Content
  - Dialogue state tracking summarises the conversation so far into a set of slots and values that represent what the user wants. It enables a system to respond coherently across multiple turns and to handle corrections and references.
  - Approaches range from rule-based and probabilistic models to neural networks that read the dialogue history and predict the current state. It is a core part of task-oriented dialogue systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
