public:: true

# Matrix Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-dc-matrix-protocol",
  "@type": "Page",
  "vc:slug": "matrix-protocol",
  "title": "Matrix Protocol",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:matrix-protocol",
  "@type": "Class",
  "label": "Matrix Protocol",
  "definition": "Matrix is an open standard and communication protocol for real-time, decentralised communication over the internet. It enables interoperable, federated messaging and collaboration by allowing servers from different organisations to synchronise shared conversation state. The protocol supports end-to-end encryption, persistent history, and a rich ecosystem of clients and bridges.",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:dc-protocol-and-infra", "label": "Protocol and Infrastructure"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:federation-protocol", "label": "Federation Protocol"},
      {"@id": "urn:ngm:class:end-to-end-encrypted-collaboration", "label": "End-to-End Encrypted Collaboration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:real-time-synchronisation", "label": "Real-Time Synchronisation"}
    ]
  },
  "quality": 0.7
}
```

- ### Definition
  - Matrix is an open, federated communication protocol that synchronises shared conversation state across decentralised servers, supporting end-to-end encryption and interoperable real-time collaboration.
