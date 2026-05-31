public:: true

# HotStuff
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hot-stuff",
  "@type": "Page",
  "vc:slug": "hot-stuff",
  "title": "HotStuff",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hot-stuff",
  "@type": "Class",
  "label": "HotStuff",
  "definition": "HotStuff is a leader-based Byzantine fault-tolerant consensus protocol that achieves linear communication complexity and responsiveness through a pipelined, three-phase voting structure with threshold signatures. Its linear view-change cost and rotating leadership make it well suited to large validator sets. HotStuff influenced modern BFT systems and underpins protocols such as Libra/Diem's consensus.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:fault-tolerance", "label": "Fault Tolerance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - HotStuff is a linear-complexity BFT [[Consensus Mechanism]] that implements practical [[Fault Tolerance]] for large, dynamic validator sets.
- ### Content
  - It collapses the classic PBFT communication pattern into a pipelined sequence of prepare, pre-commit, and commit phases aggregated with threshold signatures, so each phase costs O(n) messages. The rotating leader and chained block proposals deliver high throughput with bounded latency under partial synchrony, motivating its adoption in several production blockchains.
