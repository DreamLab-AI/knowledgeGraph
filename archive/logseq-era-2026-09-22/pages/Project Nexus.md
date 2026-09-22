public:: true

# Project Nexus
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:project-nexus",
  "@type": "Page",
  "vc:slug": "project-nexus",
  "title": "Project Nexus",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:project-nexus",
  "@type": "Class",
  "label": "Project Nexus",
  "definition": "Project Nexus is a Bank for International Settlements initiative to interlink domestic instant-payment systems across countries through a standardised hub, enabling fast, low-cost cross-border retail payments. Rather than building a single global system, it provides a common protocol that connects existing national fast-payment rails. It is relevant to discussions of cross-border CBDC interoperability and payment-system modernisation.",
  "domain": "blockchain",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:financial-services", "label": "Financial Services"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cbdcs", "label": "CBDCs"},
      {"@id": "urn:ngm:class:cbdc-frameworks", "label": "CBDC Frameworks"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Project Nexus is a BIS initiative that interlinks national instant-payment systems via a standardised hub for fast cross-border retail payments. It is related to [[CBDCs]] and to the interoperability questions addressed by [[CBDC Frameworks]].
- ### Content
  - Nexus defines a single connection model so that each domestic instant-payment scheme integrates once with the hub rather than building bilateral links to every other country. It handles FX, message translation, and compliance hand-offs, aiming to bring the speed and low cost of domestic instant payments to cross-border transfers, and provides a template that CBDC systems could also adopt.
