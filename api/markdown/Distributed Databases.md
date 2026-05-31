public:: true

# Distributed Databases
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:distributed-databases",
  "@type": "Page",
  "vc:slug": "distributed-databases",
  "title": "Distributed Databases",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:distributed-databases",
  "@type": "Class",
  "label": "Distributed Databases",
  "definition": "A distributed database stores and manages data across multiple networked nodes, presenting a unified logical database while partitioning and replicating data for scale and resilience. It must reconcile the trade-offs of the CAP theorem, choosing among strong consistency, availability, and partition tolerance through consensus, quorum, or conflict-resolution strategies. It underpins large-scale applications that exceed the capacity or fault-tolerance limits of a single server.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:crdt", "label": "CRDT"},
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A distributed database spreads data across networked nodes with partitioning and replication while exposing one logical store. It can use [[CRDT]] structures for conflict-free replication and is a key application of [[Distributed Computing]].
- ### Content
  - Architectures range from sharded SQL and NewSQL (e.g. Spanner, CockroachDB) to eventually consistent NoSQL and CRDT-based stores. Consistency models span linearizable to eventual; designers tune replication factor, partitioning keys, and consensus (Raft, Paxos) against latency, availability, and operational complexity.
