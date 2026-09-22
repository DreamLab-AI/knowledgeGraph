public:: true

# Automerge
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-automerge",
  "@type": "Page",
  "vc:slug": "automerge",
  "title": "Automerge",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:automerge",
  "@type": "Class",
  "label": "Automerge",
  "definition": "Automerge is a library and data format implementing a JSON-like CRDT that enables automatic merging of concurrent changes to shared documents without requiring a central server. It models document history as an append-only log of operations, allowing peers to exchange and apply changes in any order while converging to the same state. Automerge supports rich text, rich data structures, and is designed for local-first software where data lives on the user's device and syncs opportunistically.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-protocol-and-infra", "label": "Protocol and Infrastructure"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:crdt", "label": "CRDT"},
      {"@id": "urn:ngm:class:local-first-software", "label": "Local-First Software"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:yjs-framework", "label": "Yjs Framework"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - Automerge is a CRDT library that automatically merges concurrent JSON document edits across peers by maintaining an append-only operation log, enabling local-first collaborative applications.
