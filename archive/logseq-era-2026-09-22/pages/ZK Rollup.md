public:: true

# ZK Rollup

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:zk-rollup",
  "@type": "Page",
  "title": "ZK Rollup",
  "vc:slug": "zk-rollup",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:zk-rollup",
  "@type": "Class",
  "label": "ZK Rollup",
  "definition": "A ZK rollup is a Layer 2 scaling construction that executes transactions off-chain and posts a succinct validity proof, typically a zk-SNARK or zk-STARK, to a Layer 1 chain so the base layer can verify correctness without re-executing the batch. Compressed transaction data and the proof are published on-chain, inheriting the security of the underlying settlement layer while drastically reducing per-transaction cost. Unlike optimistic rollups, finality does not require a fraud-proof challenge window because validity is proven cryptographically.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:rollup",
      "label": "Rollup"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:cryptographic-proof",
        "label": "Cryptographic Proof"
      },
      {
        "@id": "urn:ngm:class:zk-snark",
        "label": "ZK-SNARK"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:trustless-settlement",
        "label": "Trustless Settlement"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      },
      {
        "@id": "urn:ngm:class:sidechain",
        "label": "Sidechain"
      },
      {
        "@id": "urn:ngm:class:state-channel",
        "label": "State Channel"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:layer-2-networks",
        "label": "Layer 2 Networks"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
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
  - A [[Rollup]] variant that proves correctness of off-chain execution with a [[Cryptographic Proof]] rather than an economic challenge.
  - Posts a succinct [[Zero-Knowledge Proof]] (often a [[ZK-SNARK]]) plus compressed data to [[Ethereum]].
  - Delivers [[Scalability]] while retaining [[Trustless Settlement]] from the base [[Blockchain]].
- ### Overview
  - ZK rollups move computation off the main chain and replace re-execution with verification of a validity proof.
  - The proof attests that the new state root follows from the previous root and the batch of transactions, so the Layer 1 contract only checks the proof.
  - Because validity is cryptographically established, withdrawals do not wait for a dispute period, giving fast finality.
  - Data availability is preserved by publishing compressed calldata or blobs on the settlement layer.
- ### Mechanisms
  - Off-chain sequencer batches transactions and computes the new state.
  - A prover generates a succinct proof (zk-SNARK or zk-STARK) of correct execution.
  - An on-chain verifier contract checks the proof and updates the canonical state root.
  - Compressed transaction data is committed for [[Data Availability]], allowing independent state reconstruction.
- ### Applications
  - High-throughput payments and token transfers.
  - Decentralised exchange and trading venues needing cheap, fast settlement.
  - Application-specific rollups (appchains) for games and identity.
  - Bridging assets between Layer 1 and Layer 2 ecosystems.
- ### Relationships
  - partOf:: [[Layer 2 Scaling]]
  - implements:: [[Cryptographic Proof]]
  - implements:: [[ZK-SNARK]]
  - hasPart:: [[Data Availability]]
  - requires:: [[Zero-Knowledge Proof]]
  - enables:: [[Scalability]]
  - enables:: [[Trustless Settlement]]
  - dependsOn:: [[Ethereum]]
  - uses:: [[Smart Contract]]
  - contrastsWith:: [[Optimistic Rollup]]
  - contrastsWith:: [[Sidechain]]
  - contrastsWith:: [[State Channel]]
  - bridgesTo:: [[Layer 2 Networks]]
  - relatedTo:: [[Blockchain]]
- ### Provenance
  - updated:: 2026-06-15
