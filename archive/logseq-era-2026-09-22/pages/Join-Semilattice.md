public:: true

# Join-Semilattice
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:join-semilattice",
  "@type": "Page",
  "vc:slug": "join-semilattice",
  "title": "Join-Semilattice",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:join-semilattice",
  "@type": "Class",
  "label": "Join-Semilattice",
  "definition": "A join-semilattice is a partially ordered set in which every pair of elements has a least upper bound (join), making the join operation associative, commutative and idempotent. These algebraic properties guarantee that repeated or reordered merges converge to a unique value. The structure is the mathematical foundation for state-based conflict-free replicated data types.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-data-structure", "label": "Distributed Data Structure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:crdt", "label": "CRDT"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A join-semilattice is an ordered algebraic structure whose idempotent, commutative, associative join operation provides the convergence guarantee that a [[CRDT]] relies upon to merge concurrent replica states.
- ### Content
  - Because merges form a monotone lattice climb toward a least upper bound, state-based (convergent) replicated data types can exchange and combine states in any order without coordination and still reach the same result. This property makes join-semilattices central to eventually consistent and offline-first distributed systems.
