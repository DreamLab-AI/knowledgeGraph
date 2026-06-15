public:: true

# Bitcoin Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2df37b38e45e8b527354446c87ac15d6a12a982e9ff1b32fa669d0ed99e709b8",
  "@type": "Page",
  "vc:slug": "bitcoin-protocol",
  "title": "Bitcoin Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:consensus-protocol",
      "vc:label": "Consensus Protocol"
    },
    {
      "@id": "urn:visionflow:linked:utxo",
      "vc:label": "UTXO"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin-script",
      "vc:label": "Bitcoin Script"
    },
    {
      "@id": "urn:visionflow:linked:block-reward",
      "vc:label": "Block Reward"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Bitcoin Protocol"
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
  "@id": "urn:ngm:class:bitcoin-protocol",
  "@type": "Class",
  "label": "Bitcoin Protocol",
  "definition": "The set of rules governing how Bitcoin transactions are formed, validated, and ordered into blocks by proof-of-work consensus, including the UTXO model, scripting system, block reward schedule, and difficulty adjustment mechanism.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
      "label": "Bitcoin Proof-of-Work Protocol"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-script",
        "label": "Bitcoin Script"
      },
      {
        "@id": "urn:ngm:class:block-reward",
        "label": "Block Reward"
      },
      {
        "@id": "urn:ngm:class:difficulty-adjustment",
        "label": "Difficulty Adjustment"
      },
      {
        "@id": "urn:ngm:class:mempool",
        "label": "Mempool"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-protocol",
        "label": "Consensus Protocol"
      },
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-script",
        "label": "Bitcoin Script"
      },
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-payment",
        "label": "Peer-to-Peer Payment"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:nakamoto-consensus",
        "label": "Nakamoto Consensus"
      },
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:sha-256",
        "label": "SHA-256"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum Protocol"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:digital-currency",
        "label": "Digital Currency"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:mining",
        "label": "Mining"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:bitcoin-network-protocol",
      "label": "Bitcoin Network Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bitcoin-protocol:6bfaaf5ae1a5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2df37b38e45e8b527354446c87ac15d6a12a982e9ff1b32fa669d0ed99e709b8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Consensus Protocol]]",
      "resolved": "urn:visionflow:linked:consensus-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[UTXO]]",
      "resolved": "urn:visionflow:linked:utxo",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Script]]",
      "resolved": "urn:visionflow:linked:bitcoin-script",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Block Reward]]",
      "resolved": "urn:visionflow:linked:block-reward",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
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
  - The set of rules governing how Bitcoin transactions are formed, validated, and ordered into blocks by proof-of-work consensus.

- ### Semantic Classification
  - owl-class:: blockchain:BitcoinProtocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Bitcoin Proof-of-Work Protocol]]
  - bridges-to:: [[Block Reward]]
  - requires:: [[Consensus Protocol]], [[UTXO]]
  - enables:: [[Bitcoin Script]]

- ### Content
  - The Bitcoin protocol specifies the structure of transactions and blocks, the unspent transaction output model for tracking ownership, and the proof-of-work rule by which nodes agree on a single transaction history.
  - Validation rules are enforced independently by every full node, and the longest valid chain by accumulated work is treated as canonical. The protocol also defines issuance through the block reward and its periodic halving.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
