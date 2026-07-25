public:: true

# Federated Byzantine Fault Tolerance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e1a27a107e7d3a9c9bc6873413de447c8089b0d3573c9ca1a5bcdfbbe23c79fa",
  "@type": "Page",
  "vc:slug": "federated-byzantine-fault-tolerance",
  "title": "Federated Byzantine Fault Tolerance",
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
      "vc:value": "BC-0556"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Federated Byzantine Fault Tolerance"
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
  "@id": "urn:ngm:class:federated-byzantine-fault-tolerance",
  "@type": "Class",
  "label": "Federated Byzantine Fault Tolerance",
  "definition": "Federated Byzantine Fault Tolerance (FBFT) is a consensus mechanism in which each node independently selects a trusted subset of peers—its quorum slice—forming overlapping quorums that propagate agreement without requiring global participation or expensive proof-of-work computation. Unlike classic BFT protocols that demand a fixed, known validator set, FBFT allows open membership: any node may join by declaring its quorum slices, and safety is guaranteed as long as quorum intersections contain at least one correct node. FBFT underpins the Stellar Consensus Protocol (SCP), enabling low-latency, high-throughput cross-border payment settlement with safety and liveness properties derived from quorum-intersection analysis.",
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
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:node", "label": "Node"},
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"},
      {"@id": "urn:ngm:class:gossip-protocol", "label": "Gossip Protocol"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:finality", "label": "Finality"},
      {"@id": "urn:ngm:class:transaction", "label": "Transaction"},
      {"@id": "urn:ngm:class:interoperability", "label": "Interoperability"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:block", "label": "Block"},
      {"@id": "urn:ngm:class:security", "label": "Security"},
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"}
    ]
  },
  "qualityScore": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:federated-byzantine-fault-tolerance:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e1a27a107e7d3a9c9bc6873413de447c8089b0d3573c9ca1a5bcdfbbe23c79fa"
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
  - A consensus mechanism enhancing scalability, speed, and security of blockchain networks by using a trusted set of federated nodes for consensus rather than the entire network.

- ### Semantic Classification
  - owl-class:: blockchain:FederatedByzantineFaultTolerance
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Byzantine Fault Tolerance]]

- ### Content
  Federated Byzantine Fault Tolerance — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
