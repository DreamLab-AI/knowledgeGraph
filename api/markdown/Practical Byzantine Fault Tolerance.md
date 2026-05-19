public:: true

# Practical Byzantine Fault Tolerance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f0d8cef9822bafdaf356e9f3255acdaeb0ba6afeecea8be64b7ca2cc01ebc931",
  "@type": "Page",
  "vc:slug": "practical-byzantine-fault-tolerance",
  "title": "Practical Byzantine Fault Tolerance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:byzantine-fault-tolerance",
      "vc:label": "Byzantine Fault Tolerance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0555"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Practical Byzantine Fault Tolerance"
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
  "@id": "urn:ngm:class:practical-byzantine-fault-tolerance",
  "@type": "Class",
  "label": "Practical Byzantine Fault Tolerance",
  "definition": "A consensus algorithm providing high-performance Byzantine state machine replication, processing thousands of requests per second with sub-millisecond latency increases. Designed for asynchronous systems with low latency optimization.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:byzantine-fault-tolerance",
      "label": "Byzantine Fault Tolerance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:practical-byzantine-fault-tolerance:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f0d8cef9822bafdaf356e9f3255acdaeb0ba6afeecea8be64b7ca2cc01ebc931"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Byzantine Fault Tolerance]]",
      "resolved": "urn:visionflow:owl:class:byzantine-fault-tolerance",
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
  - A consensus algorithm providing high-performance Byzantine state machine replication, processing thousands of requests per second with sub-millisecond latency increases. Designed for asynchronous systems with low latency optimization.

- ### Semantic Classification
  - owl-class:: blockchain:PracticalByzantineFaultTolerance
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Byzantine Fault Tolerance]]

- ### Content
  Practical Byzantine Fault Tolerance — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
