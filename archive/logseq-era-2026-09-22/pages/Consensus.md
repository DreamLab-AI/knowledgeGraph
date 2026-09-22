public:: true

# Consensus
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3ec222f71bcd60b0606afac7a5de306be3c02be0387caddd1d24165332081c70",
  "@type": "Page",
  "vc:slug": "consensus",
  "title": "Consensus",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:consensus-mechanisms",
      "vc:label": "Consensus Mechanisms"
    },
    {
      "@id": "urn:visionflow:linked:distributed-ledger",
      "vc:label": "Distributed Ledger"
    },
    {
      "@id": "urn:visionflow:linked:tendermint",
      "vc:label": "Tendermint"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Consensus"
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
  "@id": "urn:ngm:class:consensus",
  "@type": "Class",
  "label": "Consensus",
  "definition": "The general problem of getting distributed processes to agree on a common value or decision despite failures, communication delays or adversarial behaviour.",
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
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:quorum",
        "label": "Quorum"
      },
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:consensus-mechanisms",
        "label": "Consensus Mechanisms"
      },
      {
        "@id": "urn:ngm:class:distributed-ledger",
        "label": "Distributed Ledger"
      },
      {
        "@id": "urn:ngm:class:state-machine-replication",
        "label": "Replicated State Machine"
      },
      {
        "@id": "urn:ngm:class:atomic-broadcast",
        "label": "Atomic Broadcast"
      },
      {
        "@id": "urn:ngm:class:distributed-databases",
        "label": "Distributed Database"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:leader-election",
        "label": "Leader Election"
      },
      {
        "@id": "urn:ngm:class:voting-round",
        "label": "Voting Round"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:paxos",
        "label": "Paxos"
      },
      {
        "@id": "urn:ngm:class:raft",
        "label": "Raft"
      },
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerant"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-hash",
        "label": "Cryptographic Hash"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:eventual-consistency",
        "label": "Eventual Consistency"
      },
      {
        "@id": "urn:ngm:class:cap-theorem",
        "label": "CAP Theorem"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tendermint",
        "label": "Tendermint"
      },
      {
        "@id": "urn:ngm:class:byzantine-generals-problem",
        "label": "Byzantine Generals Problem"
      },
      {
        "@id": "urn:ngm:class:partial-synchrony",
        "label": "Partial Synchrony"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:distributed-consensus",
      "label": "Distributed Consensus"
    },
    {
      "@id": "urn:ngm:class:agreement-protocol",
      "label": "Agreement Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:consensus:c983c585ac3c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3ec222f71bcd60b0606afac7a5de306be3c02be0387caddd1d24165332081c70"
  },
  "vc:resolutions": [
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Mechanisms]]",
      "resolved": "urn:visionflow:linked:consensus-mechanisms",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Ledger]]",
      "resolved": "urn:visionflow:linked:distributed-ledger",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tendermint]]",
      "resolved": "urn:visionflow:linked:tendermint",
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
  - The general problem of getting distributed processes to agree on a common value or decision despite failures, communication delays or adversarial behaviour.

- ### Semantic Classification
  - owl-class:: distributed-systems:Consensus
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Distributed Systems]]
  - bridges-to:: [[Tendermint]]
  - requires:: [[Distributed Systems]]
  - enables:: [[Consensus Mechanisms]], [[Distributed Ledger]]

- ### Content
  - Consensus is the foundational distributed computing problem of reaching agreement on a single value among processes that may fail or be separated by an unreliable network. Classical results characterise what is achievable under different fault and timing assumptions, including the impossibility of deterministic consensus in fully asynchronous systems with even one crash fault.
  - Practical consensus protocols add timing assumptions, randomisation or partial synchrony to make progress, and they provide the agreement guarantees needed for replicated state machines, distributed databases and blockchains.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
