public:: true

# Modular Blockchain
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:modular-blockchain",
  "@type": "Page",
  "title": "Modular Blockchain",
  "vc:slug": "modular-blockchain",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:modular-blockchain",
  "@type": "Class",
  "label": "Modular Blockchain",
  "definition": "A modular blockchain is a blockchain architecture that separates the core functions of execution, settlement, consensus, and data availability into distinct, specialised layers rather than handling them all in a single monolithic chain. Each layer can be optimised and scaled independently, and components can be mixed and matched across networks. This decomposition aims to overcome the scalability constraints of monolithic designs while preserving security and decentralisation.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
      },
      {
        "@id": "urn:ngm:class:consensus-layer",
        "label": "Consensus Layer"
      },
      {
        "@id": "urn:ngm:class:settlement-layer",
        "label": "Settlement Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:blockchain-scalability",
        "label": "Blockchain Scalability"
      },
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-availability-sampling",
        "label": "Data Availability Sampling"
      },
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      },
      {
        "@id": "urn:ngm:class:zk-rollup",
        "label": "ZK-Rollup"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:layer2",
        "label": "Layer2"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer-2 Scaling"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:celestia",
        "label": "Celestia"
      },
      {
        "@id": "urn:ngm:class:cosmos",
        "label": "Cosmos"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:fraud-proof",
        "label": "Fraud Proof"
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
  - A modular blockchain is a blockchain architecture that separates the core functions of execution, settlement, consensus, and data availability into distinct, specialised layers rather than handling them all in a single monolithic chain. Each layer can be optimised and scaled independently, and components can be mixed and matched across networks. This decomposition aims to overcome the scalability constraints of monolithic designs while preserving security and decentralisation.
  - Related concepts: [[Blockchain]] [[Data Availability]] [[Consensus Layer]] [[Rollup]] [[Blockchain Scalability]]

- ### Overview
  - Modular blockchains reframe scaling as an architectural problem. Where a monolithic chain forces every node to execute every transaction, store all data, and reach consensus together, a modular stack lets dedicated layers handle each responsibility, so specialised data-availability and consensus layers can serve many execution layers above them.

- ### Mechanisms
  - The execution layer processes transactions and updates state, typically as a rollup.
  - The settlement layer verifies proofs, resolves disputes, and anchors execution layers.
  - The consensus layer orders transactions and provides finality across participants.
  - The data-availability layer guarantees that transaction data is published and retrievable, often via data-availability sampling.

- ### Applications
  - Scalable rollup ecosystems that share a common data-availability layer.
  - Application-specific chains that reuse external consensus and settlement.
  - Interoperable multi-chain networks built from specialised, composable layers.

- ### Relationships
  - has-part:: [[Data Availability]]
  - has-part:: [[Consensus Layer]]
  - has-part:: [[Settlement Layer]]
  - enables:: [[Blockchain Scalability]]
  - enables:: [[Scalability]]
  - enables:: [[Rollup]]
  - uses:: [[Data Availability Sampling]]
  - uses:: [[Optimistic Rollup]]
  - uses:: [[ZK-Rollup]]
  - requires:: [[Data Availability]]
  - supports:: [[Layer2]]
  - supports:: [[Layer-2 Scaling]]
  - bridges-to:: [[Celestia]]
  - bridges-to:: [[Cosmos]]
  - contrasts-with:: [[Blockchain]]
  - related-to:: [[Fraud Proof]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
