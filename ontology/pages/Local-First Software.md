public:: true

# Local-First Software
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:local-first-software",
  "@type": "Page",
  "vc:slug": "local-first-software",
  "title": "Local-First Software",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:local-first-software",
  "@type": "Class",
  "label": "Local-First Software",
  "definition": "Local-first software is a design philosophy in which the primary copy of a user's data lives on their own device, with the network used for optional synchronisation rather than as a dependency. It prioritises offline availability, low latency, data ownership, and longevity while still supporting real-time collaboration via conflict-free merging. The approach typically relies on CRDTs to reconcile concurrent edits across devices without a central authority.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:software-architecture", "label": "Software Architecture"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:crdt", "label": "CRDT"}, {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Local-first software keeps the authoritative data copy on the user's device with optional sync; it relies on [[CRDT]] data structures to merge concurrent edits and draws on [[Distributed Systems]] techniques for replication.
- ### Content
  - The model delivers instant local reads and writes, full offline capability, and resilience to server outages, while background sync propagates changes peer-to-peer or through relays. Conflict-free replicated data types provide deterministic merge semantics, eliminating the need for centralised locking or last-write-wins coordination.
