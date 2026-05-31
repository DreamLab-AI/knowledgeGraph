public:: true

# Logic
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:df5a54b853d978959a045248495aee927fd291bc37b4d8ac693ac2b6d21cbeb8",
  "@type": "Page",
  "vc:slug": "logic",
  "title": "Logic",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:knowledge-representation",
      "vc:label": "Knowledge Representation"
    },
    {
      "@id": "urn:visionflow:linked:information-theory",
      "vc:label": "Information Theory"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Logic"
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
  "@id": "urn:ngm:class:logic",
  "@type": "Class",
  "label": "Logic",
  "definition": "The systematic study of valid inference and reasoning, concerned with the principles that distinguish correct from incorrect arguments. It underpins mathematics, philosophy, and computer science.",
  "domain": "mathematics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:logic:08e4e1c34e28",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:df5a54b853d978959a045248495aee927fd291bc37b4d8ac693ac2b6d21cbeb8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Knowledge Representation]]",
      "resolved": "urn:visionflow:linked:knowledge-representation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Theory]]",
      "resolved": "urn:visionflow:linked:information-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - The systematic study of valid inference and reasoning, concerned with the principles that distinguish correct from incorrect arguments. It underpins mathematics, philosophy, and computer science.

- ### Semantic Classification
  - owl-class:: mathematics:Logic
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Information Theory]]
  - enables:: [[Knowledge Representation]]

- ### Content
  - Logic studies the forms of valid reasoning, including propositional and predicate logic, which formalise how conclusions follow from premises. It provides the foundation for proof, deduction, and formal systems.
  - In computer science, logic underlies programming language semantics, formal verification, knowledge representation, and the design of automated reasoning systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
