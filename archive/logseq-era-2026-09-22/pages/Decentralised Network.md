public:: true

# Decentralised Network

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:decentralised-network",
  "@type": "Page",
  "title": "Decentralised Network",
  "vc:slug": "decentralised-network",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decentralised-network",
  "@type": "Class",
  "label": "Decentralised Network",
  "definition": "A Decentralised Network is a network architecture in which control, data and decision-making are distributed across many independent nodes rather than concentrated in a central authority or server. Nodes communicate peer-to-peer, share responsibility for routing, storage and consensus, and the network continues to operate even when individual nodes fail or leave. This topology improves resilience, censorship resistance and fault tolerance at the cost of greater coordination complexity.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems",
      "label": "Distributed Systems"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:blockchain-network",
        "label": "Blockchain Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:censorship-resistance",
        "label": "Censorship Resistance"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:decentralization",
        "label": "Decentralization"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gossip-protocol",
        "label": "Gossip Protocol"
      },
      {
        "@id": "urn:ngm:class:overlay-network",
        "label": "Overlay Network"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:node",
        "label": "Node"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:resilience",
        "label": "Resilience"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:distributed-hash-table",
        "label": "Distributed Hash Table"
      },
      {
        "@id": "urn:ngm:class:federation",
        "label": "Federation"
      },
      {
        "@id": "urn:ngm:class:ipfs",
        "label": "IPFS"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:federation",
        "label": "Federation"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A network where control, data and decisions are distributed across many independent peer nodes with no central authority, improving resilience and censorship resistance.
  - Related: [[Distributed Systems]] [[Peer-to-Peer Network]] [[Consensus Mechanism]] [[Fault Tolerance]]
- ### Overview
  - A decentralised network spreads control and data across many autonomous nodes with no central point of authority.
  - Nodes cooperate peer-to-peer to route messages, store data and reach agreement.
  - The architecture degrades gracefully as nodes join, leave or fail.
  - It trades the simplicity of centralised control for resilience and censorship resistance.
- ### Key aspects
  - Peer-to-peer connectivity and overlay topologies for node discovery and routing.
  - Distributed consensus to agree on shared state without a coordinator.
  - Replication and content addressing for resilient data storage.
  - Gossip and epidemic protocols for scalable information dissemination.
  - Incentive and reputation mechanisms that sustain honest participation.
- ### Applications
  - Blockchain and distributed-ledger networks.
  - Peer-to-peer file sharing and content-addressed storage such as IPFS.
  - Decentralised messaging and social protocols resistant to single-point control.
  - Resilient infrastructure for edge and mesh deployments.
- ### Relationships
  - partOf:: [[Distributed Systems]]
  - bridgesTo:: [[Peer-to-Peer Network]]
  - enables:: [[Censorship Resistance]]
  - requires:: [[Consensus Mechanism]]
  - supports:: [[Distributed Ledger]]
  - relatedTo:: [[Distributed Hash Table]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
