public:: true

# Vector Clocks
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:de96586621d3fdaba13935e993a73e043955925e610f39c3b31433be7a182e7f",
  "@type": "Page",
  "vc:slug": "vector-clocks",
  "title": "Vector Clocks",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-computing",
      "vc:label": "Distributed Computing"
    },
    {
      "@id": "urn:visionflow:linked:eventual-consistency",
      "vc:label": "Eventual Consistency"
    },
    {
      "@id": "urn:visionflow:linked:clock-synchronization",
      "vc:label": "Clock Synchronization"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Vector Clocks"
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
  "@id": "urn:ngm:class:vector-clocks",
  "@type": "Class",
  "label": "Vector Clocks",
  "definition": "A mechanism for ordering events in a distributed system by assigning each process a vector of counters. Comparing vectors determines whether one event causally precedes another or whether they are concurrent.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:clock-synchronization",
      "label": "Clock Synchronization"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:eventual-consistency",
        "label": "Eventual Consistency"
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
  "@id": "urn:visionflow:annotation:link-resolutions:vector-clocks:600797f3674f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:de96586621d3fdaba13935e993a73e043955925e610f39c3b31433be7a182e7f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Distributed Computing]]",
      "resolved": "urn:visionflow:linked:distributed-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Eventual Consistency]]",
      "resolved": "urn:visionflow:linked:eventual-consistency",
      "kind": "StubLink"
    },
    {
      "raw": "[[Clock Synchronization]]",
      "resolved": "urn:visionflow:linked:clock-synchronization",
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
  - A mechanism for ordering events in a distributed system by assigning each process a vector of counters. Comparing vectors determines whether one event causally precedes another or whether they are concurrent.

- ### Semantic Classification
  - owl-class:: distributed-systems:VectorClocks
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Clock Synchronization]]
  - bridges-to:: [[Clock Synchronization]]
  - requires:: [[Distributed Computing]]
  - enables:: [[Eventual Consistency]]

- ### Content
  - A vector clock maintains, for each process, a vector with one entry per process. Each process increments its own entry on local events and merges vectors on message receipt, capturing causal relationships between events.
  - By comparing two vectors, a system can tell whether one event happened before another or whether they are concurrent, which supports conflict detection in replicated stores and eventually consistent systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
