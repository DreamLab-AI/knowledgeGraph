public:: true

# Information Governance
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-information-governance",
  "@type": "Page",
  "vc:slug": "information-governance",
  "title": "Information Governance",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:information-governance",
  "@type": "Class",
  "label": "Information Governance",
  "definition": "Information Governance is the framework of policies, processes, roles, and standards that organisations use to manage the availability, usability, integrity, and security of their information assets throughout the data lifecycle. It encompasses data stewardship, regulatory compliance, records management, and accountability structures. Effective information governance ensures that data is trustworthy, properly classified, and handled in accordance with legal and business requirements.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"}
  ],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:data-quality", "label": "Data Quality"}]
  },
  "quality": 0.7
}
```

- ### Definition
  - Information Governance is the organisational framework of policies and processes that ensures information assets are managed, protected, and used in compliance with regulatory and business requirements throughout their lifecycle.
