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

- ### Current Landscape (2026)
  - Solana governance approved Alpenglow (SIMD-0326) in September 2025 with 98.27% of participating stake in favour, replacing the legacy Proof-of-History plus TowerBFT stack with the Votor voting protocol (and a later Rotor propagation layer); it targets deterministic finality of roughly 100-150ms versus the previous ~12.8s, with mainnet activation targeted for the second half of 2026.
  - Alpenglow, designed by Anza under Roger Wattenhofer, moves validator votes off-chain via BLS certificates and adopts a dual-path model tolerating 20% adversarial plus 20% offline stake — an ebb-and-flow relaxation of the classical 33% Byzantine threshold.
  - On 4 July 2026 Vitalik Buterin introduced "Lean Ethereum" (folding in the earlier Beam Chain vision as Lean Consensus), targeting a cut in Ethereum finality from ~15 minutes towards seconds; the leading candidate is Minimmit, a one-round protocol first floated in July 2025 that would finalise after a single vote wave but lower the fault tolerance from ~33% to ~17%.
  - Ethereum shipped Pectra (7 May 2025) and Fusaka (3 December 2025, bringing PeerDAS/EIP-7594 data-availability sampling), with Glamsterdam targeted for 2026 to enshrine proposer-builder separation (ePBS, EIP-7732); single-slot and three-slot finality remain in active research with no fork assignment yet.
  - DAG-based BFT matured from research into production, with certified-DAG designs (Narwhal/Bullshark) giving way to uncertified, low-latency protocols: Mysticeti-C reached the three-message-round latency lower bound and ships in Sui, while Autobahn (SOSP 2024), Sailfish, Shoal++, Mahi-Mahi and Remora (2025) push sub-second asynchronous latency.
  - Classical crash-fault consensus remains anchored on Raft (etcd, CockroachDB, TiKV) and EPaxos-style leaderless variants (Cassandra Accord), but a 2026 study using LLM-driven agents uncovered 15 previously unknown protocol-level logic bugs across Raft, EPaxos, HotStuff and Bullshark implementations, underscoring persistent verification gaps.
  - Open frontiers as of 2026 include making single-slot finality tractable for 1-2 million validators via SNARK-based signature aggregation, post-quantum (hash-based) consensus signatures on Ethereum's ~2029 horizon, and formally proving causal ordering and the availability-versus-consistency tension inherent to DAG topologies.

- ### References
  - 1. Chainstack (2026). Solana: Alpenglow consensus explained. https://docs.chainstack.com/docs/solana-alpenglow-consensus
  - 2. Helius (2025). Alpenglow: Solana's Great Consensus Rewrite. https://www.helius.dev/blog/alpenglow
  - 3. Ethereum Foundation (2026). A more secure Ethereum (roadmap: finality, ePBS, FOCIL). https://ethereum.org/roadmap/security/
  - 4. Oak Research (2026). Lean Ethereum: the biggest overhaul of Ethereum since the Merge. https://oakresearch.io/en/analyses/innovations/lean-ethereum-biggest-overhaul-ethereum-since-the-merge
  - 5. Wu, H. et al. (2025). Half a Century of Distributed Byzantine Fault-Tolerant Consensus: Design Principles and Evolutionary Pathways. https://arxiv.org/html/2407.19863v3
  - 6. Nanotech Insight (2026). Consensus Algorithms in Distributed Systems: Engineering Guide. https://nanotechinsight.com/post/distributed-systems-consensus-algorithms-engineering-guide-2026

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
