public:: true

# Beacon Chain

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:beacon-chain",
  "@type": "Page",
  "title": "Beacon Chain",
  "vc:slug": "beacon-chain",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:beacon-chain",
  "@type": "Class",
  "label": "Beacon Chain",
  "definition": "The Beacon Chain is the proof-of-stake consensus backbone introduced to Ethereum that coordinates validators, manages staking, and finalises blocks. It organises time into slots and epochs, assigns block-proposal and attestation duties, and applies a finality gadget that locks in the canonical chain. The Beacon Chain decouples consensus from execution, providing the security and randomness that the broader sharded and execution layers build upon.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:consensus-layer",
      "label": "Consensus Layer"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:validator",
        "label": "Validator"
      },
      {
        "@id": "urn:ngm:class:attestation",
        "label": "Attestation"
      },
      {
        "@id": "urn:ngm:class:epoch",
        "label": "Epoch"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:consensus-layer",
        "label": "Consensus Layer"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof Of Stake"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      },
      {
        "@id": "urn:ngm:class:validator",
        "label": "Validator"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:finality",
        "label": "Finality"
      },
      {
        "@id": "urn:ngm:class:sharding",
        "label": "Sharding"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:staking",
        "label": "Staking"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:block-proposal",
        "label": "Block Proposal"
      },
      {
        "@id": "urn:ngm:class:attestation",
        "label": "Attestation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof Of Stake"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:consensus-layer",
        "label": "Consensus Layer"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:sharding",
        "label": "Sharding"
      },
      {
        "@id": "urn:ngm:class:finality",
        "label": "Finality"
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
  - The Beacon Chain is the core of the [[Consensus Layer]] implementing [[Proof Of Stake]] for [[Ethereum]].
  - It coordinates [[Validator]] duties through [[Staking]], [[Block Proposal]], and [[Attestation]] across [[Epoch]] cycles.
  - It delivers [[Finality]] and underpins [[Sharding]] and the [[Consensus Mechanism]].
- ### Overview
  - The Beacon Chain replaced Ethereum's original proof-of-work consensus with a proof-of-stake protocol driven by a large set of bonded validators.
  - It structures consensus around slots (fixed time windows for one block) and epochs (groups of slots) within which validators propose and attest.
  - A two-stage finality mechanism justifies and then finalises checkpoints, making reverting finalised blocks economically prohibitive through slashing.
- ### Key aspects
  - Validator registry and staking that bond capital as security against misbehaviour.
  - Slot and epoch scheduling that assigns proposal and attestation duties pseudo-randomly.
  - Attestation aggregation by which validators vote on the head and checkpoints of the chain.
  - Finality gadget that justifies and finalises checkpoints, backed by slashing penalties.
- ### Applications
  - Securing Ethereum's transition from proof-of-work to proof-of-stake.
  - Coordinating validator duties and rewards across the staking ecosystem.
  - Providing consensus and randomness for sharding and rollup-centric scaling roadmaps.
- ### Relationships
  - hasPart:: [[Validator]]
  - hasPart:: [[Attestation]]
  - hasPart:: [[Epoch]]
  - partOf:: [[Consensus Layer]]
  - requires:: [[Proof Of Stake]]
  - requires:: [[Staking]]
  - requires:: [[Validator]]
  - enables:: [[Finality]]
  - enables:: [[Sharding]]
  - dependsOn:: [[Consensus Mechanism]]
  - dependsOn:: [[Staking]]
  - uses:: [[Block Proposal]]
  - uses:: [[Attestation]]
  - implements:: [[Proof Of Stake]]
  - implements:: [[Consensus Mechanism]]
  - supports:: [[Ethereum]]
  - supports:: [[Consensus Layer]]
  - relatedTo:: [[Ethereum]]
  - relatedTo:: [[Sharding]]
  - relatedTo:: [[Finality]]
  - subClassOf:: [[Consensus Layer]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
