public:: true

# Replication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:replication",
  "@type": "Page",
  "vc:slug": "replication",
  "title": "Replication",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:replication",
  "@type": "Class",
  "label": "Replication",
  "definition": "Replication is the practice of maintaining multiple copies of data or services across different machines or locations to improve availability, durability, fault tolerance, and read performance. Strategies range from synchronous replication, which guarantees copies are identical before acknowledging a write, to asynchronous replication, which favours latency at the risk of temporary divergence. Replication is foundational to distributed databases, content-delivery networks, and high-availability systems, and its design forces explicit choices among consistency, availability, and partition tolerance.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:data-availability", "label": "Data Availability"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:crdt", "label": "CRDT"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:distributed-storage", "label": "Distributed Storage"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Replication maintains multiple copies of data or services across machines to improve availability, durability, fault tolerance, and read performance, forcing explicit trade-offs among consistency, availability, and partition tolerance.

- ### Relationships
  - Replication is a subclass of [[Fault Tolerance]] and enables [[Data Availability]] by ensuring copies survive individual failures. It can use [[CRDT]] structures to merge concurrent updates without coordination, and relates to [[Distributed Systems]] and [[Distributed Storage]], where replication strategy is a defining architectural choice.

- ### Content
  - Replication is the most direct answer to the question of how a system survives the failure of any single component: keep more than one copy. By placing copies on independent machines, racks, or regions, a system can continue serving reads and writes when a node crashes, a disk fails, or an entire data centre goes offline. The same copies that provide durability also enable scaling reads, since queries can be spread across replicas rather than funnelled to one master.

  - The central tension is keeping copies consistent. Synchronous replication confirms a write only once all (or a quorum of) replicas have applied it, guaranteeing that any subsequent read sees the latest data — at the cost of higher write latency and reduced availability if replicas are unreachable. Asynchronous replication acknowledges the write immediately and propagates it in the background, minimising latency but admitting a window in which replicas diverge and a failure could lose recent writes.

  - Topology shapes behaviour. Single-leader replication routes all writes through one primary and streams them to followers, simple to reason about but bottlenecked and exposed to failover complexity. Multi-leader and leaderless designs accept writes anywhere for higher availability and lower latency, but must then resolve concurrent conflicting updates — through last-writer-wins, version vectors, application-level merge, or conflict-free replicated data types whose algebraic structure guarantees automatic convergence.

  - These choices are constrained by the CAP theorem: under a network partition a replicated system must sacrifice either strong consistency or availability. Real systems therefore occupy a spectrum, from strongly-consistent stores that block during partitions to highly-available eventually-consistent stores that converge afterward. Understanding which guarantees an application truly needs — and which it can relax — is the essence of replication design, and underpins everything from globally distributed databases to edge caching and offline-first applications.
