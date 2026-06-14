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
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralised-web", "label": "Decentralised Web"},
      {"@id": "urn:ngm:class:solid", "label": "Solid"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Data portability is the ability to export and reuse one's data across services in open formats, enabled by the [[Decentralised Web]] and protocols such as [[Solid]] to break platform lock-in.
- ### Content
  - As a legal right it obliges providers to return personal data in a structured, commonly used format on request. As a technical capability, decentralised storage such as personal data pods lets users grant and revoke application access without surrendering custody of the data.
