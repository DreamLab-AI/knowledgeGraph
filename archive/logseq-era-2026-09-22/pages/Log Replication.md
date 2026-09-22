public:: true

# Log Replication
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:log-replication", "@type":"Page", "title":"Log Replication", "vc:slug":"log-replication", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:log-replication",
  "@type":"Class",
  "label":"Log Replication",
  "definition":"Log replication is the mechanism by which an ordered, append-only sequence of commands is copied consistently across the nodes of a distributed system so that each replica can apply the same operations in the same order. In leader-based consensus protocols such as Raft, the leader appends client commands to its log and replicates entries to followers, committing an entry once a quorum has durably stored it. By ensuring every replica converges on an identical log, it is the substrate for state machine replication and strong consistency. It must handle leader failover, log divergence, and consistency checks to keep replicas in agreement.",
  "domain":"distributed-systems",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:replication","label":"Replication"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:leader-election","label":"Leader Election"},
      {"@id":"urn:ngm:class:quorum","label":"Quorum"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:state-machine-replication","label":"State Machine Replication"},
      {"@id":"urn:ngm:class:consensus-algorithm","label":"Consensus Algorithm"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:fault-tolerance","label":"Fault Tolerance"},
      {"@id":"urn:ngm:class:linearizability","label":"Linearizability"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:raft","label":"Raft"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:raft","label":"Raft"},
      {"@id":"urn:ngm:class:paxos","label":"Paxos"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:distributed-consensus","label":"Distributed Consensus"},
      {"@id":"urn:ngm:class:leader-election","label":"Leader Election"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:consistency-model","label":"Consistency Model"},
      {"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Log replication copies an ordered, append-only command log consistently across replicas so each applies the same operations in order. It is the core of [[State Machine Replication]] in protocols such as [[Raft]] and [[Paxos]], built atop [[Leader Election]] and [[Quorum]] agreement to deliver [[Fault Tolerance]].
- ### Overview
- A replicated log is the canonical record of intended state transitions; if every node holds the same log and applies it deterministically, every node reaches the same state.
- Leader-based designs funnel all writes through one node that orders entries and pushes them to followers, committing once durably stored on a majority.
- Correctness hinges on consistency checks that reconcile divergent follower logs after failures.
- ### Mechanisms
- The leader appends client commands and assigns monotonic indices and terms.
- Entries are sent to followers; an AppendEntries-style RPC verifies log matching.
- An entry commits once replicated to a [[Quorum]], then is applied to the state machine.
- ### Applications
- Backbone of consensus stores like etcd and Consul.
- Distributed databases replicating write-ahead logs across regions.
- Coordination services providing strongly consistent configuration.
- ### Relationships
- hasPart:: [[Leader Election]]
- hasPart:: [[Quorum]]
- implements:: [[State Machine Replication]]
- implements:: [[Consensus Algorithm]]
- enables:: [[Fault Tolerance]]
- enables:: [[Linearizability]]
- partOf:: [[Raft]]
- uses:: [[Raft]]
- uses:: [[Paxos]]
- requires:: [[Distributed Consensus]]
- requires:: [[Leader Election]]
- relatedTo:: [[Consistency Model]]
- relatedTo:: [[Distributed Systems]]
- ### Provenance
- updated:: 2026-06-15
