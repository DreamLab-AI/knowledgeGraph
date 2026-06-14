public:: true

# Decentralised Storage
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4bf538c06a1a77083cd40f80c73f6efe3c6a64fe31c2c84140b9fb0acf5ba8f8",
  "@type": "Page",
  "vc:slug": "decentralised-storage",
  "title": "Decentralised Storage",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-hash",
      "vc:label": "Cryptographic Hash"
    },
    {
      "@id": "urn:visionflow:linked:provenance",
      "vc:label": "Provenance"
    },
    {
      "@id": "urn:visionflow:linked:ipfs",
      "vc:label": "IPFS"
    },
    {
      "@id": "urn:visionflow:linked:filecoin",
      "vc:label": "Filecoin"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Decentralised Storage"
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
  "@id": "urn:ngm:class:decentralised-storage",
  "@type": "Class",
  "label": "Decentralised Storage",
  "definition": "Storage systems that distribute data across many independent nodes rather than a single central provider, using content addressing and cryptographic verification to ensure data integrity, availability, and censorship resistance without a trusted intermediary.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:distributed-systems",
    "label": "Distributed Systems"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:content-addressing",
        "label": "Content Addressing"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:data-replication",
        "label": "Data Replication"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:web3-infrastructure",
        "label": "Web3 Infrastructure"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-hash",
        "label": "Cryptographic Hash"
      },
      {
        "@id": "urn:ngm:class:distributed-hash-table",
        "label": "Distributed Hash Table"
      },
      {
        "@id": "urn:ngm:class:node-incentivisation",
        "label": "Node Incentivisation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:provenance",
        "label": "Provenance"
      },
      {
        "@id": "urn:ngm:class:data-sovereignty",
        "label": "Data Sovereignty"
      },
      {
        "@id": "urn:ngm:class:censorship-resistance",
        "label": "Censorship Resistance"
      },
      {
        "@id": "urn:ngm:class:persistent-data-availability",
        "label": "Persistent Data Availability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      },
      {
        "@id": "urn:ngm:class:filecoin",
        "label": "Filecoin"
      },
      {
        "@id": "urn:ngm:class:arweave",
        "label": "Arweave"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:merkle-dag",
        "label": "Merkle DAG"
      },
      {
        "@id": "urn:ngm:class:erasure-coding",
        "label": "Erasure Coding"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-application",
        "label": "Decentralised Application"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralised-cloud-storage",
        "label": "Centralised Cloud Storage"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:distributed-storage",
      "label": "Distributed Storage"
    },
    {
      "@id": "urn:ngm:class:peer-to-peer-storage",
      "label": "Peer-to-Peer Storage"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:decentralised-storage:0eb219219bd7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4bf538c06a1a77083cd40f80c73f6efe3c6a64fe31c2c84140b9fb0acf5ba8f8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptographic Hash]]",
      "resolved": "urn:visionflow:linked:cryptographic-hash",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Provenance]]",
      "resolved": "urn:visionflow:linked:provenance",
      "kind": "StubLink"
    },
    {
      "raw": "[[IPFS]]",
      "resolved": "urn:visionflow:linked:ipfs",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Filecoin]]",
      "resolved": "urn:visionflow:linked:filecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
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
  - Storage systems that distribute data across many independent nodes rather than a single central provider, often using content addressing and cryptographic verification to ensure integrity and availability.

- ### Semantic Classification
  - owl-class:: distributed-systems:DecentralisedStorage
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Distributed Systems]]
  - bridges-to:: [[IPFS]], [[Filecoin]]
  - requires:: [[Cryptographic Hash]]
  - enables:: [[Provenance]]

- ### Content
  - Decentralised storage spreads data across a network of independent nodes, addressing content by cryptographic hash so that any copy can be verified against its identifier. This removes reliance on a single provider and can improve resilience and censorship resistance.
  - Systems such as IPFS provide content-addressed retrieval, while networks like Filecoin add economic incentives for nodes to store and serve data over time. Hash-based addressing also supports data provenance and integrity guarantees.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
