public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f610eda63f72c337a4ff482b3e7b477cd4aebf76295e7020dff8631373dc369d",
  "@type": "Page",
  "vc:slug": "dc-protocol-and-infra",
  "title": "Protocol and Infrastructure",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:dc-protocol-and-infra",
  "label": "Protocol and Infrastructure",
  "definition": "Taxonomy hub for the communication protocols, data-interchange formats, and underlying infrastructure that enable distributed collaboration. Encompasses decentralised messaging protocols, identity systems, content-addressed storage, version control, and the networking substrate on which remote collaborative workflows operate.",
  "domain": "distributed-collaboration",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-collaboration",
      "label": "Distributed Collaboration"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:nostr-protocol", "label": "Nostr Protocol"},
      {"@id": "urn:ngm:class:ipfs", "label": "IPFS"},
      {"@id": "urn:ngm:class:crdt", "label": "CRDT"},
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"},
      {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:dc-workspace-tools", "label": "Workspace Tools"},
      {"@id": "urn:ngm:class:decentralized-storage", "label": "Decentralized Storage"},
      {"@id": "urn:ngm:class:collaboration-platform", "label": "Collaboration Platform"},
      {"@id": "urn:ngm:class:asynchronous-collaboration", "label": "Asynchronous Collaboration"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:decentralized-identifiers", "label": "Decentralized Identifiers"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```
