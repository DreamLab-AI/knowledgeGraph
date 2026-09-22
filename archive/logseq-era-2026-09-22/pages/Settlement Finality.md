public:: true

# Settlement Finality

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:settlement-finality",
  "@type": "Page",
  "title": "Settlement Finality",
  "vc:slug": "settlement-finality",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:settlement-finality",
  "@type": "Class",
  "label": "Settlement Finality",
  "definition": "Settlement finality is the point at which a transfer of value or assets becomes irrevocable and unconditional, such that it can no longer be reversed, unwound, or repudiated even in the event of a participant's insolvency. In traditional finance it is defined by legal frameworks governing payment and securities systems, while in blockchain systems it emerges from consensus guarantees that may be deterministic or probabilistic. Finality is essential to systemic stability because it eliminates settlement risk once the defined threshold is reached.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:settlement",
      "label": "Settlement"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:settlement",
      "label": "Settlement"
    },
    "hasPart": [
      {
        "@id": "urn:ngm:class:transaction-finality",
        "label": "Transaction Finality"
      },
      {
        "@id": "urn:ngm:class:economic-finality",
        "label": "Economic Finality"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:immutability",
        "label": "Immutability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:atomic-settlement",
        "label": "Atomic Settlement"
      },
      {
        "@id": "urn:ngm:class:delivery-versus-payment",
        "label": "Delivery Versus Payment"
      }
    ],
    "bridgesTo": {
      "@id": "urn:ngm:class:central-securities-depository",
      "label": "Central Securities Depository"
    },
    "contrastsWith": {
      "@id": "urn:ngm:class:probabilistic-finality",
      "label": "Probabilistic Finality"
    },
    "relatedTo": [
      {
        "@id": "urn:ngm:class:clearing-and-settlement",
        "label": "Clearing And Settlement"
      },
      {
        "@id": "urn:ngm:class:netting",
        "label": "Netting"
      },
      {
        "@id": "urn:ngm:class:double-spending",
        "label": "Double Spending"
      }
    ],
    "uses": {
      "@id": "urn:ngm:class:proof-of-stake",
      "label": "Proof Of Stake"
    },
    "supports": {
      "@id": "urn:ngm:class:financial-market-infrastructure",
      "label": "Financial Market Infrastructure"
    }
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:transaction-finality",
      "label": "Transaction Finality"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Settlement Finality]] is the moment a transfer becomes irrevocable within [[Settlement]].
  - It is guaranteed by a [[Consensus Mechanism]] and reinforced by [[Immutability]].
  - Finality eliminates settlement risk and underpins [[Atomic Settlement]] and [[Delivery Versus Payment]].
- ### Overview
  - In legal terms, finality is conferred by statute and the rules of the payment or securities system, protecting completed transfers from being unwound.
  - Deterministic finality, common in BFT-style consensus, makes a transaction irreversible the instant it is committed by the validator set.
  - Probabilistic finality, characteristic of proof-of-work, strengthens over time as additional blocks are appended, never reaching absolute certainty.
  - Clear finality rules are a prerequisite for connecting on-chain settlement to regulated market infrastructure.
- ### Key aspects
  - Deterministic finality — irrevocability achieved at commit time under Byzantine-fault-tolerant consensus.
  - Probabilistic finality — confidence that grows with block depth in longest-chain protocols.
  - Economic finality — reversal made prohibitively costly through slashing of staked capital.
  - Legal finality — statutory protection of settled transfers against insolvency clawback.
  - Reorg resistance — the difficulty of reorganising the ledger to undo a settled transaction.
- ### Applications
  - Real-time gross settlement systems for interbank payments.
  - On-chain securities settlement and tokenised asset transfers.
  - Cross-border payment rails requiring legal certainty of completion.
  - Bridging protocols that depend on source-chain finality before minting.
- ### Relationships
  - Settlement finality is a property of [[Settlement]] and contrasts with probabilistic finality.
  - partOf:: [[Settlement]]
  - hasPart:: [[Transaction Finality]]
  - hasPart:: [[Economic Finality]]
  - requires:: [[Consensus Mechanism]]
  - requires:: [[Immutability]]
  - dependsOn:: [[Consensus Mechanism]]
  - enables:: [[Atomic Settlement]]
  - enables:: [[Delivery Versus Payment]]
  - bridgesTo:: [[Central Securities Depository]]
  - contrastsWith:: [[Probabilistic Finality]]
  - relatedTo:: [[Clearing And Settlement]]
  - relatedTo:: [[Netting]]
  - relatedTo:: [[Double Spending]]
  - uses:: [[Proof Of Stake]]
  - supports:: [[Financial Market Infrastructure]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation inference over the narrativegoldmine ontology mesh
  - attributedTo:: did:nostr:ontology-mesh
