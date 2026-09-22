public:: true

# Linearizability
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:linearizability", "@type":"Page", "title":"Linearizability", "vc:slug":"linearizability", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:linearizability",
  "@type":"Class",
  "label":"Linearizability",
  "definition":"Linearizability is a strong consistency model for concurrent and distributed systems requiring that every operation appears to take effect atomically at a single point in time between its invocation and its response, consistent with a global real-time ordering. It is a composable (local) property: a system is linearizable if each individual object is linearizable. Informally it guarantees that once a write completes, all subsequent reads observe that write or a later one, giving the illusion of a single, instantaneous copy of the data. Formalised by Herlihy and Wing, it is the gold standard against which weaker models such as eventual consistency are contrasted.",
  "domain":"distributed-systems",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:consistency-model","label":"Consistency Model"}],
  "relations":{
    "enables":[
      {"@id":"urn:ngm:class:state-machine-replication","label":"State Machine Replication"},
      {"@id":"urn:ngm:class:fault-tolerance","label":"Fault Tolerance"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:consensus-algorithm","label":"Consensus Algorithm"},
      {"@id":"urn:ngm:class:distributed-consensus","label":"Distributed Consensus"},
      {"@id":"urn:ngm:class:concurrency-control","label":"Concurrency Control"},
      {"@id":"urn:ngm:class:replication","label":"Replication"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:cap-theorem","label":"CAP Theorem"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:consensus-algorithm","label":"Consensus Algorithm"},
      {"@id":"urn:ngm:class:quorum","label":"Quorum"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:distributed-consensus","label":"Distributed Consensus"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:raft","label":"Raft"},
      {"@id":"urn:ngm:class:paxos","label":"Paxos"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Linearizability is the strongest single-object [[Consistency Model]], requiring each operation to appear atomic and consistent with real-time order. It is what robust [[Distributed Consensus]] protocols such as [[Raft]] and [[Paxos]] provide, and it stands in tension with availability as framed by the [[CAP Theorem]].
- ### Overview
- A linearizable system behaves as if there were a single up-to-date copy of the data, even though it is replicated across many machines.
- Each operation seems to occur instantaneously at some moment between its call and return, and these moments respect the wall-clock order of non-overlapping operations.
- Because it is a local property, composing linearizable objects yields a linearizable system, which simplifies reasoning.
- ### Key aspects
- Real-time ordering: non-overlapping operations preserve their observed order.
- Atomic visibility: a completed write is immediately visible to all later reads.
- Compositionality: per-object linearizability implies system-wide linearizability.
- ### Applications
- Strongly consistent key-value stores and coordination services.
- Leader-based [[State Machine Replication]] for configuration and locks.
- Distributed databases prioritising correctness over latency.
- ### Relationships
- enables:: [[State Machine Replication]]
- enables:: [[Fault Tolerance]]
- relatedTo:: [[Consensus Algorithm]]
- relatedTo:: [[Distributed Consensus]]
- relatedTo:: [[Concurrency Control]]
- relatedTo:: [[Replication]]
- contrastsWith:: [[CAP Theorem]]
- requires:: [[Consensus Algorithm]]
- requires:: [[Quorum]]
- dependsOn:: [[Distributed Consensus]]
- uses:: [[Raft]]
- uses:: [[Paxos]]
- supports:: [[Distributed Systems]]
- ### Provenance
- updated:: 2026-06-15
