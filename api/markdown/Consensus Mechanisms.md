public:: true

# Consensus Mechanisms
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:195753e896ab80720df41d6d184d66437909058f4d91704c7b0c53bf334b9f97",
  "@type": "Page",
  "vc:slug": "consensus-mechanisms",
  "title": "Consensus Mechanisms",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:consensus",
      "vc:label": "Consensus"
    },
    {
      "@id": "urn:visionflow:linked:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:linked:distributed-ledger",
      "vc:label": "Distributed Ledger"
    },
    {
      "@id": "urn:visionflow:linked:proof-of-stake",
      "vc:label": "Proof of Stake"
    },
    {
      "@id": "urn:visionflow:linked:tendermint",
      "vc:label": "Tendermint"
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
      "vc:value": "Consensus Mechanisms"
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
  "@id": "urn:ngm:class:consensus-mechanisms",
  "@type": "Class",
  "label": "Consensus Mechanisms",
  "definition": "The family of protocols by which distributed participants agree on a single shared state or ordering of events without relying on a central authority, spanning classical fault-tolerant algorithms, probabilistic approaches, and cryptoeconomic incentive designs.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems",
      "label": "Distributed Systems"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      },
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:practical-byzantine-fault-tolerance",
        "label": "Practical Byzantine Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:tendermint",
        "label": "Tendermint"
      },
      {
        "@id": "urn:ngm:class:delegated-proof-of-stake",
        "label": "Delegated Proof of Stake"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      },
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:digital-signatures",
        "label": "Digital Signatures"
      },
      {
        "@id": "urn:ngm:class:hash-functions",
        "label": "Hash Functions"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:leader-election",
        "label": "Leader Election"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralization",
        "label": "Decentralization"
      },
      {
        "@id": "urn:ngm:class:immutability",
        "label": "Immutability"
      },
      {
        "@id": "urn:ngm:class:sybil-resistance",
        "label": "Sybil Resistance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:finality",
        "label": "Network Finality"
      },
      {
        "@id": "urn:ngm:class:validator-node",
        "label": "Validator Nodes"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:distributed-agreement-protocols",
      "label": "Distributed Agreement Protocols"
    },
    {
      "@id": "urn:ngm:class:blockchain-consensus",
      "label": "Blockchain Consensus"
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
  "@id": "urn:visionflow:annotation:link-resolutions:consensus-mechanisms:b0400ee6f47d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:195753e896ab80720df41d6d184d66437909058f4d91704c7b0c53bf334b9f97"
  },
  "vc:resolutions": [
    {
      "raw": "[[Consensus]]",
      "resolved": "urn:visionflow:linked:consensus",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:linked:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Ledger]]",
      "resolved": "urn:visionflow:linked:distributed-ledger",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:linked:proof-of-stake",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tendermint]]",
      "resolved": "urn:visionflow:linked:tendermint",
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
  - The family of protocols by which distributed participants agree on a single shared state or ordering of events without relying on a central authority.

- ### Semantic Classification
  - owl-class:: distributed-systems:ConsensusMechanisms
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Distributed Systems]]
  - bridges-to:: [[Proof of Stake]], [[Tendermint]]
  - requires:: [[Consensus]]
  - enables:: [[Blockchain]], [[Distributed Ledger]]

- ### Content
  - Consensus mechanisms are the rules and procedures that let independent nodes in a distributed system converge on agreement about state, transaction order or membership, tolerating faults and, in adversarial settings, deliberate misbehaviour. Examples include proof of work, proof of stake and Byzantine fault tolerant protocols.
  - The choice of mechanism shapes a system's security assumptions, throughput, finality and decentralisation. Blockchains and distributed ledgers depend on these mechanisms to maintain a consistent record across mutually distrusting participants.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
