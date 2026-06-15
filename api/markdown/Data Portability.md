public:: true

# Data Portability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-portability",
  "@type": "Page",
  "vc:slug": "data-portability",
  "title": "Data Portability",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-portability",
  "@type": "Class",
  "label": "Data Portability",
  "definition": "Data portability is the ability for users to obtain, move and reuse their personal or application data across services in a structured, machine-readable format without lock-in. It is both a legal right under regimes such as GDPR and a technical property enabled by open formats and interoperable storage. In decentralised-web designs it lets individuals carry data between providers, shifting control from platforms to users.",
  "domain": "data",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"}],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:open-standards", "label": "Open Standards"},
      {"@id": "urn:ngm:class:interoperability", "label": "Interoperability"},
      {"@id": "urn:ngm:class:data-format", "label": "Data Format"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:user-sovereignty", "label": "User Sovereignty"},
      {"@id": "urn:ngm:class:vendor-lock-in-avoidance", "label": "Vendor Lock-in Avoidance"},
      {"@id": "urn:ngm:class:data-sovereignty", "label": "Data Sovereignty"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:api", "label": "API"},
      {"@id": "urn:ngm:class:data-schema", "label": "Data Schema"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:gdpr", "label": "GDPR"},
      {"@id": "urn:ngm:class:right-to-data-portability", "label": "Right to Data Portability"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:solid", "label": "Solid"},
      {"@id": "urn:ngm:class:activitypub", "label": "ActivityPub"},
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:decentralised-web", "label": "Decentralised Web"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self-Sovereign Identity"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:w3c", "label": "W3C"},
      {"@id": "urn:ngm:class:iso", "label": "ISO"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:data-silo", "label": "Data Silo"},
      {"@id": "urn:ngm:class:platform-lock-in", "label": "Platform Lock-in"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"},
      {"@id": "urn:ngm:class:governance", "label": "Governance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralised-web", "label": "Decentralised Web"},
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"},
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:data-mobility", "label": "Data Mobility"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Data portability is the ability to export and reuse one's data across services in open formats, enabled by the [[Decentralised Web]] and protocols such as [[Solid]] to break platform lock-in.
- ### Content
  - As a legal right it obliges providers to return personal data in a structured, commonly used format on request. As a technical capability, decentralised storage such as personal data pods lets users grant and revoke application access without surrendering custody of the data.
