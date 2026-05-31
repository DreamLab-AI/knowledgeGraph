public:: true

# Eventual Consistency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:66702125f30de51091d9cbe51f8ff6d0127d6873a0395384de76504de45fd03c",
  "@type": "Page",
  "vc:slug": "eventual-consistency",
  "title": "Eventual Consistency",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-computing",
      "vc:label": "Distributed Computing"
    },
    {
      "@id": "urn:visionflow:linked:distributed-storage",
      "vc:label": "Distributed Storage"
    },
    {
      "@id": "urn:visionflow:linked:vector-clocks",
      "vc:label": "Vector Clocks"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Eventual Consistency"
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
  "@id": "urn:ngm:class:eventual-consistency",
  "@type": "Class",
  "label": "Eventual Consistency",
  "definition": "A consistency model for distributed data stores in which, given no new updates, all replicas eventually converge to the same value. It favours availability and partition tolerance over immediate consistency.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-computing",
      "label": "Distributed Computing"
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
        "@id": "urn:ngm:class:distributed-storage",
        "label": "Distributed Storage"
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
  "@id": "urn:visionflow:annotation:link-resolutions:eventual-consistency:728502655f06",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:66702125f30de51091d9cbe51f8ff6d0127d6873a0395384de76504de45fd03c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Distributed Computing]]",
      "resolved": "urn:visionflow:linked:distributed-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Storage]]",
      "resolved": "urn:visionflow:linked:distributed-storage",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Vector Clocks]]",
      "resolved": "urn:visionflow:linked:vector-clocks",
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
  - A consistency model for distributed data stores in which, given no new updates, all replicas eventually converge to the same value. It favours availability and partition tolerance over immediate consistency.

- ### Semantic Classification
  - owl-class:: distributed-systems:EventualConsistency
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Distributed Computing]]
  - bridges-to:: [[Vector Clocks]]
  - requires:: [[Distributed Computing]]
  - enables:: [[Distributed Storage]]

- ### Content
  - Under eventual consistency, replicas may temporarily diverge after an update, but in the absence of further changes they converge to a consistent state. This model is used by many large-scale distributed databases to remain available during network partitions.
  - It contrasts with strong consistency, where every read returns the most recent write. Systems that adopt eventual consistency often use mechanisms such as vector clocks and conflict resolution to reconcile divergent replicas.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
