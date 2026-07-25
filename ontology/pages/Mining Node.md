public:: true

# Mining Node

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:mining-node",
  "@type": "Page",
  "title": "Mining Node",
  "vc:slug": "mining-node",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mining-node",
  "@type": "Class",
  "label": "Mining Node",
  "definition": "A mining node is a blockchain participant that not only validates and relays transactions but also competes to produce new blocks by performing proof-of-work computation. It assembles pending transactions into candidate blocks and searches for a valid solution that allows the block to be added to the chain. Mining nodes secure proof-of-work networks and are rewarded for the blocks they successfully add.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:full-node",
      "label": "Full Node"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain-network",
        "label": "Blockchain Network"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:validator-node",
        "label": "Validator Node"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:full-node",
        "label": "Full Node"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
      },
      {
        "@id": "urn:ngm:class:block-validation",
        "label": "Block Validation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:mining",
        "label": "Mining"
      },
      {
        "@id": "urn:ngm:class:full-node",
        "label": "Full Node"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
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
  - A [[Mining Node]] validates transactions and competes to produce new blocks via proof-of-work.
  - It extends the role of a [[Full Node]] by adding block production within a [[Blockchain Network]].
  - It implements [[Proof Of Work]] and contrasts with a stake-based [[Validator Node]].
- ### Overview
  - Like any [[Full Node]], a mining node holds the full ledger and independently verifies every transaction and block.
  - Beyond validation, it gathers unconfirmed transactions into a candidate block and searches for a valid proof.
  - Finding a valid solution is computationally expensive, which is what makes rewriting history costly and the chain secure.
  - Successful miners broadcast their block and collect the associated block reward and fees.
- ### Mechanisms
  - Candidate blocks are formed from the pool of pending transactions after [[Transaction Validation]].
  - The node repeatedly applies a [[Hash Function]] to find an input meeting the difficulty target.
  - On success it performs [[Block Validation]] and propagates the block across the [[Peer-to-Peer Network]].
  - Difficulty adjustment keeps block production rate roughly constant as total mining power changes.
- ### Key aspects
  - Work: producing a block requires demonstrable computational effort.
  - Reward: miners are incentivised by block subsidies and fees.
  - Security: honest majority hash power makes the chain tamper-resistant.
  - Decentralisation: open participation lets anyone run a mining node.
- ### Applications
  - Securing [[Bitcoin]] and other proof-of-work blockchains.
  - Ordering transactions and finalising the canonical chain.
  - Participating in the [[Consensus Mechanism]] that prevents double-spending.
  - Bootstrapping new coin issuance through block rewards.
- ### Relationships
  - partOf:: [[Blockchain Network]]
  - contrastsWith:: [[Validator Node]]
  - hasPart:: [[Full Node]]
  - implements:: [[Proof Of Work]]
  - requires:: [[Proof Of Work]]
  - requires:: [[Hash Function]]
  - uses:: [[Transaction Validation]]
  - uses:: [[Block Validation]]
  - enables:: [[Consensus Mechanism]]
  - supports:: [[Bitcoin]]
  - dependsOn:: [[Peer-to-Peer Network]]
  - relatedTo:: [[Mining]]
  - relatedTo:: [[Full Node]]
  - bridgesTo:: [[Consensus Mechanism]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
