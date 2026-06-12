```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:open-source-software",
  "title": "Open Source Software",
  "vc:slug": "open-source-software",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-source-software",
  "@type": "Class",
  "label": "Open Source Software",
  "definition": "Open Source Software is software whose source code is made publicly available under a licence that permits inspection, modification, and redistribution. In the AI and metaverse infrastructure ecosystem, open-source projects provide the foundational frameworks — including deep learning libraries, rendering engines, and interoperability toolkits — that accelerate innovation, reduce vendor lock-in, and enable community-driven governance. Licences such as MIT, Apache 2.0, and GPL govern the permissibility of commercial reuse and derivative works.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "quality": 0.3,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:open-source-ai", "label": "Open-Source AI"},
      {"@id": "urn:ngm:class:collaboration", "label": "Collaboration"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:version-control", "label": "Version Control"},
      {"@id": "urn:ngm:class:intellectual-property-licence-instrument", "label": "license"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:open-source-framework", "label": "Open Source Framework"},
      {"@id": "urn:ngm:class:software-library", "label": "Software Library"}
    ]
  }
}
```

## Open Source Software

Open Source Software is software whose source code is publicly available under a licence permitting inspection, modification, and redistribution. In the AI and metaverse ecosystem, open-source projects provide the foundational frameworks — including deep learning libraries, rendering engines, and interoperability toolkits — that accelerate innovation and reduce vendor lock-in. Licences such as MIT, Apache 2.0, and GPL govern the permissibility of commercial reuse and derivative works. Community governance models, issue trackers, and version-controlled repositories are the primary coordination mechanisms.

### Relationships
  - enables [[Open-Source AI]]
  - enables [[Collaboration]]
  - uses [[Version Control]]
  - uses [[Intellectual Property Licence Instrument]]
  - relatedTo [[Open Source Framework]]
  - relatedTo [[Software Library]]
