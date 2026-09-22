public:: true

# Byzantine Generals Problem

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:byzantine-generals-problem",
  "@type": "Page",
  "title": "Byzantine Generals Problem",
  "vc:slug": "byzantine-generals-problem",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:byzantine-generals-problem",
  "@type": "Class",
  "label": "Byzantine Generals Problem",
  "definition": "The Byzantine Generals Problem is a foundational thought experiment in distributed computing describing how loyal participants can reach agreement when some participants are traitorous and may send arbitrary or conflicting messages. It formalises the difficulty of achieving consensus in the presence of arbitrary (Byzantine) faults, where faulty nodes behave maliciously rather than merely crashing. The problem establishes that agreement is solvable only when fewer than one-third of participants are faulty.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:fault-tolerance",
      "label": "Fault Tolerance"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      },
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:crash-fault-tolerance",
        "label": "Crash Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:atomic-broadcast",
        "label": "Atomic Broadcast"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:practical-byzantine-fault-tolerance",
        "label": "Practical Byzantine Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:blockchain-consensus",
        "label": "Blockchain Consensus"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:distributed-system",
        "label": "Distributed System"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:proof-of-stake",
        "label": "Proof Of Stake"
      },
      {
        "@id": "urn:ngm:class:tendermint",
        "label": "Tendermint"
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
  - The Byzantine Generals Problem frames [[Consensus]] under arbitrary, malicious faults in a [[Distributed System]].
  - It motivates [[Byzantine Fault Tolerance]] and the one-third faulty bound.
  - Loyal generals must agree despite traitors corrupting [[Message Passing]].
- ### Overview
  - Posed by Lamport, Shostak, and Pease as the canonical model of arbitrary faults.
  - Agreement requires at least 3f+1 participants to tolerate f Byzantine faults.
  - Cryptographic signatures relax the bound by making forged messages detectable.
- ### Key aspects
  - Interactive consistency: all loyal generals decide the same plan.
  - Oral messages versus signed messages variants.
  - The 3f+1 lower bound for unauthenticated Byzantine agreement.
  - Direct lineage to modern BFT and blockchain consensus.
- ### Applications
  - Blockchain and permissioned ledger consensus design.
  - Fault-tolerant aerospace and avionics control systems.
  - Replicated services that must tolerate compromised nodes.
  - Reasoning about trust in adversarial distributed networks.
- ### Relationships
  - relatedTo:: [[Consensus]]
  - relatedTo:: [[Byzantine Fault Tolerance]]
  - relatedTo:: [[Distributed Systems]]
  - enables:: [[Byzantine Fault Tolerance]]
  - requires:: [[Message Passing]]
  - contrastsWith:: [[Crash Fault Tolerance]]
  - contrastsWith:: [[Atomic Broadcast]]
  - supports:: [[Practical Byzantine Fault Tolerance]]
  - supports:: [[Blockchain Consensus]]
  - dependsOn:: [[Fault Tolerance]]
  - dependsOn:: [[Distributed System]]
  - bridgesTo:: [[Proof Of Stake]]
  - bridgesTo:: [[Tendermint]]
- ### Provenance
  - updated:: 2026-06-15
