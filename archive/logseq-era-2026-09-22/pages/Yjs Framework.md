public:: true

# Yjs Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-yjs-framework",
  "@type": "Page",
  "vc:slug": "yjs-framework",
  "title": "Yjs Framework",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:yjs-framework",
  "@type": "Class",
  "label": "Yjs Framework",
  "definition": "Yjs is an open-source, high-performance CRDT (Conflict-free Replicated Data Type) framework for building collaborative applications in JavaScript. It provides shared data types such as maps, arrays, and rich text that automatically merge concurrent edits without conflicts, and integrates with popular editors like ProseMirror, CodeMirror, and Quill. Yjs supports multiple transport backends including WebSocket, WebRTC, and IndexedDB for offline persistence.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-protocol-and-infra", "label": "Protocol and Infrastructure"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:crdt", "label": "CRDT"},
      {"@id": "urn:ngm:class:real-time-synchronisation", "label": "Real-Time Synchronisation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:automerge", "label": "Automerge"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - Yjs is a JavaScript CRDT framework that provides conflict-free shared data types and pluggable network transports, enabling real-time collaborative editing in web applications.
