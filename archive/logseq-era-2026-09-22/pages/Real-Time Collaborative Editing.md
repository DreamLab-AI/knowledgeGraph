public:: true

# Real-Time Collaborative Editing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:real-time-collaborative-editing",
  "@type": "Page",
  "vc:slug": "real-time-collaborative-editing",
  "title": "Real-Time Collaborative Editing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:real-time-collaborative-editing",
  "@type": "Class",
  "label": "Real-Time Collaborative Editing",
  "definition": "Real-time collaborative editing is the capability for multiple users to concurrently modify a shared document or data structure and see each other's changes near-instantaneously with automatic conflict resolution. It depends on synchronisation algorithms such as operational transformation or conflict-free replicated data types to maintain a consistent merged state across replicas. It underpins shared documents, whiteboards, and collaborative virtual workspaces.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:crdt", "label": "CRDT"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Real-time collaborative editing lets multiple users edit shared content concurrently with automatic merge. It is enabled and supported by [[CRDT]] structures that guarantee eventual consistency without a central coordinator.
- ### Content
  - Two dominant approaches exist: operational transformation, which rewrites concurrent operations against each other, and CRDTs, which define commutative merge semantics so replicas converge regardless of operation order. CRDT-based designs suit peer-to-peer and offline-first editing, while OT is common in centralised document services.
