public:: true

# Crash Fault Tolerance
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:crash-fault-tolerance", "@type":"Page", "title":"Crash Fault Tolerance", "vc:slug":"crash-fault-tolerance", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:crash-fault-tolerance",
  "@type":"Class",
  "label":"Crash Fault Tolerance",
  "definition":"Crash fault tolerance is the property of a distributed system that continues to operate correctly despite nodes failing by stopping, that is, by halting and ceasing to send messages. It assumes the crash-stop or crash-recovery failure model, in which faulty processes do not behave maliciously or send incorrect information. Protocols such as Paxos and Raft achieve it through replication and consensus over a quorum of non-faulty nodes.",
  "domain":"distributed-systems",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:fault-tolerance","label":"Fault Tolerance"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:fault-tolerance","label":"Fault Tolerance"},
      {"@id":"urn:ngm:class:distributed-consensus","label":"Distributed Consensus"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:quorum","label":"Quorum"},
      {"@id":"urn:ngm:class:replication","label":"Replication"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:high-availability","label":"High Availability"},
      {"@id":"urn:ngm:class:state-machine-replication","label":"State Machine Replication"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:consensus-protocol","label":"Consensus Protocol"},
      {"@id":"urn:ngm:class:leader-election","label":"Leader Election"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:paxos","label":"Paxos"},
      {"@id":"urn:ngm:class:raft","label":"Raft"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:replication","label":"Replication"},
      {"@id":"urn:ngm:class:leader-election","label":"Leader Election"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:state-machine-replication","label":"State Machine Replication"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:byzantine-fault-tolerance","label":"Byzantine Fault Tolerance"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:distributed-consensus","label":"Distributed Consensus"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:quorum","label":"Quorum"},
      {"@id":"urn:ngm:class:consensus-protocol","label":"Consensus Protocol"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Crash fault tolerance is the ability of a system to keep working as a kind of [[Fault Tolerance]] when nodes fail by halting rather than acting maliciously.
  - It is achieved through [[Replication]], a [[Quorum]] of healthy nodes and a [[Consensus Protocol]] such as [[Paxos]] or [[Raft]].

- ### Overview
  - The crash-stop failure model assumes a faulty process simply stops; the crash-recovery model allows it to restart, optionally with stable storage.
  - Because failures are benign, crash-fault-tolerant protocols tolerate up to f failures with 2f+1 replicas, needing a simple majority quorum.
  - This is weaker than tolerating arbitrary behaviour but far cheaper, which is why it underpins most production data stores and coordination services.

- ### Mechanisms
  - State machine replication: replicas apply the same ordered log of commands so survivors hold an up-to-date copy.
  - Quorum agreement: a majority must acknowledge each decision, ensuring overlap between successive quorums.
  - Leader-based ordering with failover, using timeouts and [[Leader Election]] to replace a crashed leader.
  - Recovery from durable logs and snapshots so a restarted node can rejoin.

- ### Applications
  - Coordination services and distributed lock managers.
  - Replicated databases and metadata stores requiring [[High Availability]].
  - Configuration and service-discovery systems built on [[Raft]].

- ### Relationships
  - subClassOf:: [[Fault Tolerance]]
  - partOf:: [[Distributed Consensus]]
  - requires:: [[Quorum]]
  - requires:: [[Replication]]
  - enables:: [[High Availability]]
  - enables:: [[State Machine Replication]]
  - dependsOn:: [[Consensus Protocol]]
  - dependsOn:: [[Leader Election]]
  - implements:: [[Paxos]]
  - implements:: [[Raft]]
  - uses:: [[Replication]]
  - supports:: [[State Machine Replication]]
  - contrastsWith:: [[Byzantine Fault Tolerance]]
  - bridgesTo:: [[Distributed Consensus]]
  - relatedTo:: [[Quorum]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
