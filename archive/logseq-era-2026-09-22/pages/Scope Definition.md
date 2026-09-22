public:: true

# Scope Definition
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:scope-definition",
  "@type": "Page",
  "vc:slug": "scope-definition",
  "title": "Scope Definition",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scope-definition",
  "@type": "Class",
  "label": "Scope Definition",
  "definition": "Scope definition is the act of establishing the precise boundaries, entities, and conditions to which an assessment, consent, or measurement applies. In governance and consent systems it specifies which permissions, data, or activities are covered, while in environmental assessment it delineates the system boundary for impact accounting. Clear scope is a prerequisite for auditable and comparable results.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:governance", "label": "Governance"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:user-consent-token", "label": "User Consent Token"},
      {"@id": "urn:ngm:class:blockchain-environmental-impact-assessment", "label": "Blockchain Environmental Impact Assessment"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Scope definition fixes the boundaries of an assessment or grant; it is a constituent of the [[User Consent Token]] and a foundational step in [[Blockchain Environmental Impact Assessment]].
- ### Content
  - In consent frameworks, scope enumerates the resources, purposes, and durations a token authorises, enabling least-privilege access. In impact assessment, scope sets the system boundary and accounting categories, determining what emissions or effects are included and ensuring comparability across studies.
