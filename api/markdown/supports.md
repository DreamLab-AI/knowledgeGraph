```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:12ca1543b6f7f0ec13292daa7fb703447a4c0ffa2d176d159f500146e394bb0a",
  "@type": "Page",
  "vc:slug": "supports",
  "title": "supports",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability"
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
      "vc:value": "supports"
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
  "@id": "urn:ngm:class:supports",
  "@type": "Class",
  "label": "supports",
  "definition": "Supports is a relational predicate used in the knowledge graph to indicate that one entity provides backing, compatibility, or enabling capability for another.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
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

- ### Definition
  - Supports is a relational predicate used in the knowledge graph to indicate that one entity provides backing, compatibility, or enabling capability for another.

- ### Semantic Classification
  - owl-class:: ontology:supports
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Interoperability]]
  - related-to:: [[Knowledge Graph]]

- ### Content
  - The supports relation links a provider to a beneficiary, expressing that the first entity makes the second possible or compatible. It is used loosely across technical and organisational contexts.
  - As a graph predicate it differs from strict logical entailment; it records an asserted dependency or compatibility rather than a proven necessity.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
