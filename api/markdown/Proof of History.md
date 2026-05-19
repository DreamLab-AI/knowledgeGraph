public:: true

# Proof of History
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e12d1287c45fb678de872ac1c08c52206c8acdebb6a171894877156c9c4f6547",
  "@type": "Page",
  "vc:slug": "proof-of-history",
  "title": "Proof of History",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:proof-based-consensus",
      "vc:label": "Proof-Based Consensus"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0548"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Proof of History"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:proof-of-history",
  "@type": "Class",
  "label": "Proof of History",
  "definition": "A cryptographic mechanism that timestamps transactions to establish a historical record, enabling validators to process transactions in parallel for high throughput. Creates verifiable passage of time between events without requiring nodes to trust each other.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:proof-based-consensus",
      "label": "Proof-Based Consensus"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:proof-of-history:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e12d1287c45fb678de872ac1c08c52206c8acdebb6a171894877156c9c4f6547"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof-Based Consensus]]",
      "resolved": "urn:visionflow:owl:class:proof-based-consensus",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A cryptographic mechanism that timestamps transactions to establish a historical record, enabling validators to process transactions in parallel for high throughput. Creates verifiable passage of time between events without requiring nodes to trust each other.

- ### Semantic Classification
  - owl-class:: blockchain:ProofOfHistory
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Proof-Based Consensus]]

- ### Content
  Proof of History — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
