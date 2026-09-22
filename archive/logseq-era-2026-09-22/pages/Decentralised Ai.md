public:: true

# Decentralised Ai
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:decentralised-ai",
  "@type": "Page",
  "title": "Decentralised Ai",
  "vc:slug": "decentralised-ai",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decentralised-ai",
  "@type": "Class",
  "label": "Decentralised Ai",
  "definition": "Decentralised AI refers to artificial intelligence systems whose training, inference, data provenance, or governance are distributed across many independent participants rather than controlled by a single centralised entity. It commonly combines machine-learning techniques such as federated learning with blockchain or peer-to-peer infrastructure to coordinate compute, verify contributions, and align incentives through crypto-economic mechanisms. The goal is to reduce single points of control and failure, preserve data sovereignty, and enable open marketplaces for models, data, and compute.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:cat-ai-infrastructure",
      "label": "AI Infrastructure (Artificial Intelligence)"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-sovereignty",
        "label": "Data Sovereignty"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-machine-learning",
        "label": "Privacy-Preserving Machine Learning"
      },
      {
        "@id": "urn:ngm:class:edge-ai",
        "label": "Edge AI"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenization"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:web3",
        "label": "Web3"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain-consensus",
        "label": "Blockchain Consensus"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - Decentralised AI refers to artificial intelligence systems whose training, inference, data provenance, or governance are distributed across many independent participants rather than controlled by a single centralised entity. It commonly combines machine-learning techniques such as federated learning with blockchain or peer-to-peer infrastructure to coordinate compute, verify contributions, and align incentives through crypto-economic mechanisms. The goal is to reduce single points of control and failure, preserve data sovereignty, and enable open marketplaces for models, data, and compute.
  - [[Blockchain]] [[Decentralised Identity]] [[Federated Learning]] [[Smart Contract]] [[Peer-to-Peer Network]]
- ### Overview
  - Decentralised AI emerges at the intersection of two trends: the rising cost and concentration of large-model training, and the maturation of blockchain primitives for coordination without trusted intermediaries. Participants may contribute data, compute, or model updates and be rewarded through tokens, while on-chain records provide auditable provenance for datasets and model lineage. Verifiability remains a core challenge, since proving that off-chain computation was performed correctly typically requires cryptographic proofs or trusted execution.
- ### Key aspects
  - Federated and collaborative training across independent nodes
  - Token incentives rewarding data, compute, and model contributions
  - On-chain provenance and auditability of datasets and model lineage
  - Verifiable off-chain computation via proofs or trusted execution
  - Open marketplaces for models, inference, and compute capacity
- ### Applications
  - Community-owned model training networks
  - Privacy-preserving healthcare and finance analytics
  - Decentralised compute and inference marketplaces
  - Data unions where contributors retain ownership and earn from usage
- ### Relationships
  - bridgesTo:: [[Artificial Intelligence]]
  - bridgesTo:: [[Machine Learning]]
  - uses:: [[Federated Learning]]
  - uses:: [[Smart Contract]]
  - uses:: [[Peer-to-Peer Network]]
  - enables:: [[Data Sovereignty]]
  - enables:: [[Privacy-Preserving Machine Learning]]
  - enables:: [[Edge AI]]
  - dependsOn:: [[Distributed Ledger]]
  - dependsOn:: [[Tokenization]]
  - implements:: [[Decentralised Identity]]
  - supports:: [[Web3]]
  - relatedTo:: [[Blockchain Consensus]]
  - relatedTo:: [[Proof of Stake]]
- ### Provenance
  - This class was materialised to resolve inbound references from existing classes in the knowledge graph.
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
