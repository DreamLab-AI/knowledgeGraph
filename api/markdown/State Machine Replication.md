public:: true

# State Machine Replication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4b2909df1d28d61e415bfcc60536bde215c504cc9a499b10e3cc88d2f86da722",
  "@type": "Page",
  "vc:slug": "state-machine-replication",
  "title": "State Machine Replication",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-9507"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "State Machine Replication"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:state-machine-replication",
  "@type": "Class",
  "label": "State Machine Replication",
  "definition": "State Machine Replication (SMR) is a fault-tolerance technique in which multiple server replicas each maintain an identical copy of a deterministic state machine, processing the same ordered sequence of client requests to achieve consistency. It underpins the correctness guarantees of distributed consensus protocols and forms the theoretical foundation of blockchain ledger replication.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:state-machine", "label": "State Machine"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:state-machine-replication:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4b2909df1d28d61e415bfcc60536bde215c504cc9a499b10e3cc88d2f86da722"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - State Machine Replication (SMR) is a fault-tolerance technique in which multiple server replicas each maintain an identical copy of a deterministic state machine, processing the same ordered sequence of client requests to achieve consistency. It underpins the correctness guarantees of distributed consensus protocols and forms the theoretical foundation of blockchain ledger replication.

- ### Semantic Classification
  - owl-class:: blockchain:StateMachineReplication
  - owl-role:: concept

- ### Relationships
  - requires [[Consensus Mechanism]]
  - requires [[Fault Tolerance]]
  - enables [[Blockchain]]
  - enables [[Distributed Systems]]
  - relatedTo [[State Machine]]

- ### Content

  ## Overview

  State Machine Replication is the core abstraction behind replicated distributed services. By ensuring all replicas apply the same sequence of commands to the same initial state, SMR guarantees that all replicas reach identical states. Classical implementations include Paxos and Raft; blockchain systems such as Bitcoin and Ethereum instantiate SMR using Nakamoto consensus and proof-of-stake variants respectively.

  #### Related Concepts
  - [[Consensus Mechanism]]
  - [[Fault Tolerance]]
  - [[Blockchain]]
  - [[Distributed Systems]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
