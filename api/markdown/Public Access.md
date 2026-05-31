public:: true

# Public Access
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:public-access",
  "@type": "Page",
  "vc:slug": "public-access",
  "title": "Public Access",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:public-access",
  "@type": "Class",
  "label": "Public Access",
  "definition": "Public access is a data-governance and infrastructure model in which digital resources, collections, or services are made openly available to the general public without restrictive authentication or paywalls. In cultural-heritage and digital-curation contexts it underpins open repositories, online catalogues, and reading-room digitisation programmes. It balances openness against rights management, preservation constraints, and equitable availability.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-curation-platform", "label": "Digital Curation Platform"},
      {"@id": "urn:ngm:class:etsi-domain-data-management-cultural-heritage", "label": "ETSI Domain Data Management Cultural Heritage"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Public access is the open provision of digital collections and services to general users without restrictive gating. It is a core enabler of [[Digital Curation Platform]] deployments and of cultural-heritage data-management frameworks such as [[ETSI Domain Data Management Cultural Heritage]].
- ### Content
  - Implementing public access requires reconciling openness with copyright, licensing, and preservation policy. Practical mechanisms include open APIs, persistent identifiers, IIIF image delivery, and tiered access where sensitive material is restricted while metadata remains discoverable.
