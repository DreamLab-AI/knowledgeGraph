public:: true

# Partial Synchrony
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:partial-synchrony",
  "@type": "Page",
  "title": "Partial Synchrony",
  "vc:slug": "partial-synchrony",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:partial-synchrony",
  "@type": "Class",
  "label": "Partial Synchrony",
  "definition": "Partial synchrony is a timing model for distributed systems that sits between the fully synchronous model, where message delays are bounded and known, and the fully asynchronous model, where delays are unbounded. In the partially synchronous model there exists an unknown bound on message delay that eventually holds after some unknown global stabilisation time (GST), or alternatively a known bound that holds only after GST. This model is the theoretical foundation for practical Byzantine fault-tolerant consensus protocols, allowing them to circumvent the FLP impossibility result by guaranteeing safety always and liveness once the network behaves synchronously.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:consensus-protocol",
      "label": "Consensus Protocol"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-protocol",
        "label": "Consensus Protocol"
      },
      {
        "@id": "urn:ngm:class:leader-election",
        "label": "Leader Election"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:blockchain-consensus",
        "label": "Blockchain Consensus"
      },
      {
        "@id": "urn:ngm:class:deterministic-finality",
        "label": "Consensus Mechanism"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:flp-impossibility",
        "label": "FLP Impossibility"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gossip-protocol",
        "label": "Gossip Protocol"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:tendermint",
        "label": "Tendermint"
      },
      {
        "@id": "urn:ngm:class:paxos",
        "label": "Paxos"
      },
      {
        "@id": "urn:ngm:class:raft",
        "label": "Raft"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:quorum",
        "label": "Quorum"
      },
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
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
  - Partial synchrony is a timing model for distributed systems that sits between the fully synchronous model, where message delays are bounded and known, and the fully asynchronous model, where delays are unbounded. In the partially synchronous model there exists an unknown bound on message delay that eventually holds after some unknown global stabilisation time (GST), or alternatively a known bound that holds only after GST. This model is the theoretical foundation for practical Byzantine fault-tolerant consensus protocols, allowing them to circumvent the FLP impossibility result by guaranteeing safety always and liveness once the network behaves synchronously.
  - [[Consensus Protocol]] [[Consensus Mechanism]] [[Gossip Protocol]] [[Byzantine Fault Tolerance]] [[Blockchain Consensus]]
- ### Overview
  - Partial synchrony was introduced by Dwork, Lynch and Stockmeyer to model real networks, which are usually timely but can experience arbitrary bursts of delay during congestion, partitions, or attacks. Because no algorithm can guarantee both safety and liveness in a fully asynchronous network with even a single crash failure (the FLP result), partial synchrony provides a principled escape hatch: protocols are designed to never violate safety, and to make progress only when timing assumptions hold.
- ### Mechanisms
  - Global stabilisation time (GST) after which message-delay bounds hold
  - Timeout-based view changes that retry leadership when progress stalls
  - Eventual synchrony assumption decoupling safety from liveness
  - Quorum intersection guaranteeing agreement across overlapping votes
  - Exponential backoff on timeouts to adapt to unknown delay bounds
- ### Applications
  - BFT consensus engines such as Tendermint and HotStuff
  - Classical state-machine replication via Paxos and Raft
  - Permissioned and permissionless blockchain finality
  - Atomic broadcast and total-order delivery layers
- ### Relationships
  - requires:: [[Consensus Protocol]]
  - requires:: [[Leader Election]]
  - enables:: [[Byzantine Fault Tolerance]]
  - enables:: [[Blockchain Consensus]]
  - enables:: [[Consensus Mechanism]]
  - contrastsWith:: [[FLP Impossibility]]
  - implements:: [[Consensus Mechanism]]
  - uses:: [[Gossip Protocol]]
  - supports:: [[Tendermint]]
  - supports:: [[Paxos]]
  - supports:: [[Raft]]
  - relatedTo:: [[Fault Tolerance]]
  - relatedTo:: [[Quorum]]
  - relatedTo:: [[Distributed Computing]]
- ### Provenance
  - This class was materialised to resolve inbound references from existing classes in the knowledge graph.
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
